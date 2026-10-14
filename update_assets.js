const https = require('https');
const fs = require('fs');

const url = 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1ZDc3YWIxZjA5ZjcwNDRmNTdhMjU2MmQyNGRjEgsSBxDu5I6D4BQYAZIBIwoKcHJvamVjdF9pZBIVQhM3MDQ5MjcxMjg3MDM4MTc3NjY3&filename=&opi=89354086';

https.get(url, (res) => {
  const chunks = [];
  res.on('data', chunk => chunks.push(chunk));
  res.on('end', () => {
    const buffer = Buffer.concat(chunks);
    let html = buffer.toString('utf8');
    
    // Replace remote image URLs
    const artistUrl = 'https://lh3.googleusercontent.com/aida/AEtjO1UgDeDc8nqjTpsIXlYhVmjyE3J3iSrqElA-7NFMP18xBhQ8AeepVEB0IOMyR6tZl6C_0LMYn8gNaER_ramWQuIQvZPUiCwvkW4aHnJdNcQEXCFQMkg9RBS_u1_aE6XJOcDOji-SHI3SEKvFAlQmguY32TBpHFfA5gR74JyVzqSjh0uW33SyPFlMYVH5ixxu34gp7u1Xd7Cty4mvAlAhS0LjDrGJ6suIpEWzGFrqlBnItLFgWh61JISCQ9s';
    const tattooUrl = 'https://lh3.googleusercontent.com/aida/AEtjO1VI9adEI-VEFz9nDB-6Zc_yp1KWBXrCdNtXc_bVMjsHA37_YOohxZjAuMiizpK2GR6QEzFgWslJq3vD0YFgJYH1w66m5RepX1r_GkLw1Z4xLeP7aI8FjxP1gOxSN09MGipONYFJ_0vg2zUcPIVD1czSzjJ4-cD5OJIHkfCL1-Vntd_5YTubN6mPN5SmtN_MQ-LbUXaNHk5EE0n5XfbRqAE8Lt_rJAxF3T6adFRGS6j5X7www1Cm3FIIIg';
    const pmuUrl = 'https://lh3.googleusercontent.com/aida/AEtjO1VS6EOYWgdKarCbLMFbh-uQpFos9gTnl7Hd5AB4s_qJehFEqjo45wt4I65C67V7ORSmwDA9mzZfmhS3h-FEmDNZUZRGMfROI_ucCwhjTKrLsq9bXOhsGdXra2ZhAPelrNvadhxHRky7KZj921wb3Eph3IWSvLQ8YsTT_2f5kzSlS-e_1mKFbvmAlvSXQtPuhUxrnx5g7FzzTZkglzljHwAlCmoTvoywuGhuJHb_zks2tGj2eey7q2hvzw';
    
    // Replace artist photo
    html = html.split(artistUrl).join('assets/artist.jpg');
    
    // Replace first 2 instances of tattooUrl (hero + direction card) with botanical-tattoo.jpg
    // And 3rd instance (portfolio item 1) with botanical-tattoo.jpg
    // And 4th instance (portfolio item 3 - Calligraphy) with calligraphy-tattoo.jpg
    let tattooCount = 0;
    html = html.replace(new RegExp(tattooUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), () => {
      tattooCount++;
      if (tattooCount === 4) {
        return 'assets/calligraphy-tattoo.jpg';
      }
      return 'assets/botanical-tattoo.jpg';
    });

    // Replace first instance of pmuUrl (services card) with lip-blush.jpg
    // Replace second instance (portfolio item 2) with lip-blush.jpg
    // Replace third instance (portfolio item 4 - powder brows) with powder-brows.jpg
    let pmuCount = 0;
    html = html.replace(new RegExp(pmuUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), () => {
      pmuCount++;
      if (pmuCount === 3) {
        return 'assets/powder-brows.jpg';
      }
      return 'assets/lip-blush.jpg';
    });

    fs.writeFileSync('index.html', html, { encoding: 'utf8' });
    console.log('Successfully wrote UTF-8 index.html with distinct high-res assets!');
  });
});
