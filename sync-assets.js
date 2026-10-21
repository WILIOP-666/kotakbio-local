/**
 * sync-assets.js
 * Scraper & Asset Synchronizer for Kotakio using Netscape Cookie spec
 * Compatible with Camofox Browser / Rea headless automation patterns.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFilePath);

const TARGET_HOST = 'https://kotakio.biz.id';
const COOKIE_FILE = path.join(currentDir, 'cookies.txt');

function parseNetscapeCookies(filePath) {
  if (!fs.existsSync(filePath)) return '';
  const lines = fs.readFileSync(filePath, 'utf8').split('\n');
  const cookies = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const parts = trimmed.split('\t');
    if (parts.length >= 7) {
      cookies.push(`${parts[5]}=${parts[6]}`);
    }
  }
  return cookies.join('; ');
}

const cookieHeader = parseNetscapeCookies(COOKIE_FILE);
console.log('Loaded cookies from cookies.txt:', cookieHeader);

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
  'Referer': 'https://kotakio.biz.id/',
  ...(cookieHeader ? { 'Cookie': cookieHeader } : {})
};

export async function fetchWithStealth(urlPath) {
  const fullUrl = urlPath.startsWith('http') ? urlPath : `${TARGET_HOST}${urlPath}`;
  const response = await fetch(fullUrl, { headers: HEADERS });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} fetching ${fullUrl}`);
  }
  return response;
}

export async function syncResource(relPath, destPath) {
  const res = await fetchWithStealth(relPath);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, buffer);
  console.log(`[Synced] ${relPath} -> ${destPath} (${buffer.length} bytes)`);
}

// Auto-run if executed directly
if (process.argv[1] === currentFilePath) {
  console.log('Testing connectivity to Kotakio...');
  try {
    const res = await fetchWithStealth('/studio');
    console.log(`Connected! Status: ${res.status}`);
  } catch (err) {
    console.error('Failed to connect:', err.message);
  }
}
