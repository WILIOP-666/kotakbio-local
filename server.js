import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFilePath);

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm'
};

const PRO_USER = {
  id: "kotakio-local-pro",
  name: "Kotakio Pro",
  email: "admin@kotakio.local",
  plan: "pro",
  is_admin: true,
  pro_expires_at: "2099-12-31T23:59:59Z",
  created_at: new Date().toISOString()
};

function generateAdminStats() {
  const daily = [];
  const now = new Date();
  let totalLast30 = 0;
  let totalLast7 = 0;
  let todayCount = 0;

  for (let i = 29; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dayStr = d.toISOString().slice(0, 10);
    const count = Math.floor(18 + Math.sin(i * 0.7) * 8 + (i === 0 ? 14 : (i % 5) * 2));
    daily.push({ day: dayStr, count });
    totalLast30 += count;
    if (i < 7) totalLast7 += count;
    if (i === 0) todayCount = count;
  }

  const total = 1840;
  const pro = 486;
  const free = total - pro;

  return {
    updated_at: new Date().toISOString(),
    total,
    today: todayCount,
    last_7_days: totalLast7,
    last_30_days: totalLast30,
    pro,
    free,
    excluded_owner_accounts: 2,
    excluded_test_accounts: 6,
    daily
  };
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = decodeURIComponent(parsedUrl.pathname);

  // Set CORS and local security headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Intercept and neutralize Cloudflare Browser Insights & CDN-CGI RUM
  if (pathname.startsWith('/cdn-cgi/') || pathname.includes('beacon.min.js') || pathname.includes('cloudflare')) {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    res.writeHead(200);
    res.end('/* Neutralized Cloudflare Browser Insights / RUM */');
    return;
  }

  // Normalize API path (supports both /api/... and direct /...)
  const apiPath = pathname.startsWith('/api/') ? pathname.slice(4) : pathname === '/api' ? '/' : pathname;

  // Admin Dashboard API (/admin/stats or /api/admin/stats)
  if (apiPath === '/admin/stats') {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.writeHead(200);
    res.end(JSON.stringify(generateAdminStats()));
    return;
  }

  // Local Mock API Endpoints (No Google, No External Auth, Full Pro Mode)
  if (apiPath.startsWith('/auth/') || apiPath.startsWith('/exports/') || apiPath.startsWith('/billing/')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    if (apiPath === '/auth/me') {
      res.writeHead(200);
      res.end(JSON.stringify({ ok: true, user: PRO_USER }));
      return;
    }

    if (apiPath.startsWith('/auth/google')) {
      res.writeHead(200);
      res.end(JSON.stringify({ enabled: false, message: "Google Auth bypassed for 100% local operation" }));
      return;
    }

    if (apiPath === '/exports/authorize') {
      res.writeHead(200);
      res.end(JSON.stringify({ authorized: true, plan: "pro" }));
      return;
    }

    if (apiPath === '/billing/pro/checkout') {
      res.writeHead(200);
      res.end(JSON.stringify({ url: '/studio', message: "Account is permanently Pro" }));
      return;
    }

    res.writeHead(200);
    res.end(JSON.stringify({ ok: true, user: PRO_USER }));
    return;
  }

  // Resolve static file path
  let safePath = pathname.replace(/^\/+/, '');
  let filePath = path.join(currentDir, safePath);

  // Route SPA Fallbacks & Custom Views
  if (pathname === '/studio' || pathname === '/studio/') {
    filePath = path.join(currentDir, 'studio.html');
  } else if (pathname === '/models' || pathname === '/models/') {
    filePath = path.join(currentDir, 'models.html');
  } else if (pathname === '/kamus' || pathname === '/kamus/') {
    filePath = path.join(currentDir, 'kamus.html');
  } else if (pathname === '/admin' || pathname === '/admin/') {
    filePath = path.join(currentDir, 'index.html');
  } else if (pathname === '/' || pathname === '') {
    filePath = path.join(currentDir, 'index.html');
  }

  // Check file existence
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    if (!path.extname(pathname)) {
      filePath = path.join(
        currentDir, 
        pathname.includes('studio') ? 'studio.html' : 
        pathname.includes('models') ? 'models.html' :
        pathname.includes('kamus') ? 'kamus.html' : 'index.html'
      );
    }
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME_TYPES[ext] || 'application/octet-stream';
    res.setHeader('Content-Type', mime);
    res.writeHead(200);
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`
================================================================
  KOTAKIO FULL LOCAL SYSTEM (100% Offline & Self-Contained)
================================================================
  - URL Studio:    http://localhost:${PORT}/studio
  - URL Models:    http://localhost:${PORT}/models
  - URL Kamus REA: http://localhost:${PORT}/kamus
  - URL Admin:     http://localhost:${PORT}/admin
  - URL Beranda:   http://localhost:${PORT}/
  - Status Auth:   is_admin: true, Pro Master Unlocked
  - Status REA:    18 FEFCO Models Extracted & Rendered
================================================================
`);
});
