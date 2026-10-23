const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data.json');
const UPLOADS_DIR = path.join(__dirname, 'uploads');

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

function readData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch (e) {
    console.error('Error reading data.json:', e);
  }
  return {};
}

function writeData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error('Error writing data.json:', e);
    return false;
  }
}

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
    const data = readData();
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
      const data = readData();
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
      const data = readData();
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
        const ok = writeData(updated);
        if (ok) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true }));
        } else {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'Ошибка сохранения на сервере' }));
        }
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
      const data = readData();
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
      writeData(data);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: e.message }));
    }
    return;
  }

  if (reqPath === '/api/upload' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const data = readData();
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

      // fileData is base64 string "data:image/png;base64,...." or raw base64
      let base64Data = body.fileData;
      if (base64Data.includes(',')) {
        base64Data = base64Data.split(',')[1];
      }
      const buffer = Buffer.from(base64Data, 'base64');
      const safeName = Date.now() + '_' + body.fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
      const targetPath = path.join(UPLOADS_DIR, safeName);
      fs.writeFileSync(targetPath, buffer);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, url: 'uploads/' + safeName }));
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
      const targetPath = path.join(UPLOADS_DIR, safeName);
      fs.writeFileSync(targetPath, buffer);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, url: 'uploads/' + safeName }));
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
      const data = readData();
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
      writeData(data);

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
