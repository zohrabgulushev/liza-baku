const http = require('http');
const https = require('https');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data.json');
const UPLOADS_DIR = path.join(__dirname, 'uploads');

// Cloudinary Configuration
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'ra76ikqs';
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || '672811622714727';
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || 'vCtT5rMDDrCVPKdyjkX7ecj6rPw';

if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.heic': 'image/heic',
  '.heif': 'image/heif',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mov': 'video/quicktime',
  '.ogg': 'video/ogg'
};

// --- DATA PERSISTENCE & CLOUDINARY SYNC ---
let cachedData = null;

function readDataLocal() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch (e) {
    console.error('Error reading local data.json:', e);
  }
  return {};
}

function writeDataLocal(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error('Error writing local data.json:', e);
    return false;
  }
}

function getData() {
  if (!cachedData) {
    cachedData = readDataLocal();
  }
  return cachedData;
}

// Upload buffer directly to Cloudinary (zero external npm dependencies required)
function uploadToCloudinary({ buffer, fileName, resourceType = 'image', publicId = null, folder = null, overwrite = false }) {
  return new Promise((resolve, reject) => {
    try {
      if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
        return reject(new Error('Cloudinary credentials not configured'));
      }

      const timestamp = Math.floor(Date.now() / 1000);
      const params = { timestamp: String(timestamp) };

      if (folder) params.folder = folder;
      if (publicId) params.public_id = publicId;
      if (overwrite) {
        params.invalidate = 'true';
        params.overwrite = 'true';
      }

      const sortedKeys = Object.keys(params).sort();
      const stringToSign = sortedKeys.map(k => `${k}=${params[k]}`).join('&') + CLOUDINARY_API_SECRET;
      const signature = crypto.createHash('sha1').update(stringToSign).digest('hex');

      let mimeType = 'image/jpeg';
      const ext = path.extname(fileName || '').toLowerCase();
      if (ext === '.png') mimeType = 'image/png';
      else if (ext === '.webp') mimeType = 'image/webp';
      else if (ext === '.svg') mimeType = 'image/svg+xml';
      else if (ext === '.mp4') mimeType = 'video/mp4';
      else if (ext === '.webm') mimeType = 'video/webm';
      else if (ext === '.mov') mimeType = 'video/quicktime';
      else if (ext === '.json') mimeType = 'application/json';

      const fileDataUri = `data:${mimeType};base64,${buffer.toString('base64')}`;
      const postObj = {
        ...params,
        api_key: CLOUDINARY_API_KEY,
        signature: signature,
        file: fileDataUri
      };

      const postData = Object.keys(postObj)
        .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(postObj[k])}`)
        .join('&');

      const req = https.request({
        hostname: 'api.cloudinary.com',
        path: `/v1_1/${CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(postData)
        }
      }, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try {
            const parsed = JSON.parse(body);
            if (res.statusCode >= 200 && res.statusCode < 300 && parsed.secure_url) {
              resolve(parsed);
            } else {
              reject(new Error(parsed.error?.message || `Cloudinary error ${res.statusCode}: ${body}`));
            }
          } catch (e) {
            reject(new Error(`Failed to parse Cloudinary response: ${body}`));
          }
        });
      });

      req.on('error', reject);
      req.write(postData);
      req.end();
    } catch (err) {
      reject(err);
    }
  });
}

// Synchronize base content from Cloudinary raw backup
async function syncDataFromCloudinary() {
  if (!CLOUDINARY_CLOUD_NAME) return;
  try {
    const cloudUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/raw/upload/liza_site_data.json?v=${Date.now()}`;
    const res = await fetch(cloudUrl);
    if (res.ok) {
      const cloudData = await res.json();
      if (cloudData && typeof cloudData === 'object' && Object.keys(cloudData).length > 0) {
        cachedData = cloudData;
        writeDataLocal(cloudData);
        console.log('[Cloudinary] Successfully synchronized site data from Cloudinary');
      }
    } else {
      console.log(`[Cloudinary] No cloud state found yet (${res.status}), initialized with local data.json`);
    }
  } catch (e) {
    console.warn('[Cloudinary] Initial sync note (continuing with local data):', e.message);
  }
}

// Save data locally and permanently sync to Cloudinary
async function persistData(newData) {
  cachedData = newData;
  writeDataLocal(newData);

  if (CLOUDINARY_CLOUD_NAME && CLOUDINARY_API_KEY && CLOUDINARY_API_SECRET) {
    try {
      const jsonBuffer = Buffer.from(JSON.stringify(newData, null, 2), 'utf8');
      await uploadToCloudinary({
        buffer: jsonBuffer,
        fileName: 'liza_site_data.json',
        resourceType: 'raw',
        publicId: 'liza_site_data.json',
        overwrite: true
      });
      console.log('[Cloudinary] Synced liza_site_data.json successfully');
    } catch (e) {
      console.error('[Cloudinary] Sync error:', e.message);
    }
  }
}

// Initialize data on boot
cachedData = readDataLocal();
syncDataFromCloudinary();

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      // Protect against gigantic payloads (limit 50MB for media uploads)
      if (body.length > 50 * 1024 * 1024) {
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const urlParts = req.url.split('?');
  const reqPath = urlParts[0];

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // --- API ENDPOINTS ---
  if (reqPath === '/api/data' && req.method === 'GET') {
    const data = getData();
    // Do not leak password in public GET API
    const publicData = { ...data };
    delete publicData.adminPassword;
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(publicData));
    return;
  }

  if (reqPath === '/api/login' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const data = getData();
      const currentPass = data.adminPassword || 'admin';
      if (body.password === currentPass) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, token: 'auth_' + Date.now() }));
      } else {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Неверный пароль' }));
      }
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: 'Bad Request' }));
    }
    return;
  }

  if (reqPath === '/api/save' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const data = getData();
      const currentPass = data.adminPassword || 'admin';
      
      if (body.password !== currentPass) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Требуется верный пароль' }));
        return;
      }

      if (body.payload) {
        // Retain the current adminPassword unless explicitly changing
        const updated = {
          ...body.payload,
          adminPassword: currentPass
        };
        await persistData(updated);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'No payload provided' }));
      }
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: e.message }));
    }
    return;
  }

  if (reqPath === '/api/change-password' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const data = getData();
      const currentPass = data.adminPassword || 'admin';
      if (body.oldPassword !== currentPass) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Текущий пароль неверен' }));
        return;
      }
      if (!body.newPassword || body.newPassword.trim().length < 3) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Новый пароль слишком короткий' }));
        return;
      }
      data.adminPassword = body.newPassword.trim();
      await persistData(data);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: e.message }));
    }
    return;
  }

  // --- ADMIN PHOTO/MEDIA UPLOAD (Cloudinary permanent storage) ---
  if (reqPath === '/api/upload' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const data = getData();
      const currentPass = data.adminPassword || 'admin';
      if (body.password !== currentPass) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Unauthorized' }));
        return;
      }

      if (!body.fileData || !body.fileName) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'No file data' }));
        return;
      }

      let base64Data = body.fileData;
      if (base64Data.includes(',')) {
        base64Data = base64Data.split(',')[1];
      }
      const buffer = Buffer.from(base64Data, 'base64');
      const safeName = Date.now() + '_' + body.fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
      
      // Save local copy as backup
      try {
        fs.writeFileSync(path.join(UPLOADS_DIR, safeName), buffer);
      } catch (e) {}

      let uploadedUrl = 'uploads/' + safeName;

      // Upload permanently to Cloudinary
      if (CLOUDINARY_CLOUD_NAME && CLOUDINARY_API_KEY && CLOUDINARY_API_SECRET) {
        const ext = path.extname(body.fileName).toLowerCase();
        const isVideo = ['.mp4', '.webm', '.mov'].includes(ext);
        const cloudRes = await uploadToCloudinary({
          buffer,
          fileName: body.fileName,
          resourceType: isVideo ? 'video' : 'image',
          folder: 'liza_portfolio'
        });
        if (cloudRes && cloudRes.secure_url) {
          uploadedUrl = cloudRes.secure_url;
        }
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, url: uploadedUrl }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: e.message }));
    }
    return;
  }

  // --- CLIENT REFERENCE UPLOAD (Public for booking form) ---
  if (reqPath === '/api/upload-reference' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      if (!body.fileData || !body.fileName) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'No file data provided' }));
        return;
      }

      let base64Data = body.fileData;
      if (base64Data.includes(',')) {
        base64Data = base64Data.split(',')[1];
      }
      const buffer = Buffer.from(base64Data, 'base64');
      // 15MB limit for sketches/photos
      if (buffer.length > 15 * 1024 * 1024) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Файл слишком большой (максимум 15 МБ)' }));
        return;
      }

      const safeName = 'ref_' + Date.now() + '_' + body.fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
      try {
        fs.writeFileSync(path.join(UPLOADS_DIR, safeName), buffer);
      } catch (e) {}

      let uploadedUrl = 'uploads/' + safeName;

      if (CLOUDINARY_CLOUD_NAME && CLOUDINARY_API_KEY && CLOUDINARY_API_SECRET) {
        const cloudRes = await uploadToCloudinary({
          buffer,
          fileName: body.fileName,
          resourceType: 'image',
          folder: 'liza_bookings'
        });
        if (cloudRes && cloudRes.secure_url) {
          uploadedUrl = cloudRes.secure_url;
        }
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, url: uploadedUrl }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: e.message }));
    }
    return;
  }

  // --- CLIENT BOOKING RECORDING ---
  if (reqPath === '/api/booking' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const data = getData();
      if (!data.bookings) data.bookings = [];

      const newBooking = {
        id: 'bk_' + Date.now(),
        date: new Date().toISOString(),
        service: body.service || 'Татуировка',
        idea: body.idea || '',
        name: body.name || '',
        phone: body.phone || '',
        referenceUrl: body.referenceUrl || ''
      };

      data.bookings.unshift(newBooking);
      if (data.bookings.length > 50) data.bookings = data.bookings.slice(0, 50);
      await persistData(data);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, booking: newBooking }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: e.message }));
    }
    return;
  }

  // --- STATIC ROUTING ---
  let normalizedPath = reqPath;
  if (normalizedPath === '/' || normalizedPath === '' || normalizedPath === '/az' || normalizedPath === '/az/' || normalizedPath === '/ru' || normalizedPath === '/ru/') {
    normalizedPath = '/index.html';
  } else if (normalizedPath === '/admin' || normalizedPath === '/admin/') {
    normalizedPath = '/admin.html';
  } else if (normalizedPath.startsWith('/az/')) {
    normalizedPath = normalizedPath.replace(/^\/az/, '') || '/index.html';
  } else if (normalizedPath.startsWith('/ru/')) {
    normalizedPath = normalizedPath.replace(/^\/ru/, '') || '/index.html';
  }

  const filePath = path.join(__dirname, normalizedPath);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Content-Length': Buffer.byteLength(content)
      });
      if (req.method === 'HEAD') {
        res.end();
      } else {
        res.end(content);
      }
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/ (Admin at http://localhost:${PORT}/admin)`);
});
