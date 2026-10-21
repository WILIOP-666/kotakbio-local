/**
 * test-system.js
 * Comprehensive automated audit and verification script for Kotakio Local System
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_PORT = 3999;
const SERVER_URL = `http://localhost:${TEST_PORT}`;

async function runAudit() {
  console.log('>>> STARTING COMPREHENSIVE AUDIT OF KOTAKIO LOCAL SYSTEM <<<\n');
  let passedTests = 0;
  let totalTests = 0;

  function assert(condition, message) {
    totalTests++;
    if (condition) {
      console.log(`[PASS] ${message}`);
      passedTests++;
    } else {
      console.error(`[FAIL] ${message}`);
      process.exitCode = 1;
    }
  }

  // 1. Audit Files on Disk
  console.log('--- 1. File Inventory Check ---');
  const requiredFiles = [
    'server.js',
    'package.json',
    'cookies.txt',
    'sync-assets.js',
    'index.html',
    'studio.html',
    'README.md',
    'ARCHITECTURE.md',
    'KOTAKIO-FULL-DICTIONARY-AND-CAD-SPEC.md',
    'REA-FULL-MODELS.md',
    'models.html',
    'kamus.html',
    'fonts/ibm-plex-sans-latin-v23.woff2',
    'assets/index-CMZTRe2i.js',
    'assets/App-B6dsLZV_.js',
    'assets/AuthModal-B3hKGvKZ.js',
    'assets/AdminPage-dTfClQpT.js',
    'assets/index-CMxk3kTM.css',
    'assets/App-CAaPZQVS.css'
  ];

  for (const f of requiredFiles) {
    const p = path.join(__dirname, f);
    assert(fs.existsSync(p) && fs.statSync(p).size > 0, `File exists & non-empty: ${f}`);
  }

  // 2. Audit Cleanliness (No Cloudflare Browser Insights / No RUM)
  console.log('\n--- 2. Cloudflare & Telemetry Neutralization Audit ---');
  const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  assert(!indexHtml.includes('/cdn-cgi/scripts/'), 'index.html has no /cdn-cgi/ scripts');
  assert(!indexHtml.includes('beacon.min.js'), 'index.html has no Cloudflare beacon.min.js');
  assert(!indexHtml.includes('__cf_email__'), 'index.html has no Cloudflare __cf_email__ obfuscation');

  const studioHtml = fs.readFileSync(path.join(__dirname, 'studio.html'), 'utf8');
  assert(!studioHtml.includes('cloudflare'), 'studio.html has no cloudflare references');
  assert(!studioHtml.includes('beacon'), 'studio.html has no beacon references');

  // 3. Audit Auth & Pro Bypass
  console.log('\n--- 3. Auth & Pro State Bypass Audit ---');
  const indexJs = fs.readFileSync(path.join(__dirname, 'assets/index-CMZTRe2i.js'), 'utf8');
  assert(indexJs.includes('plan:"pro"'), 'index-CMZTRe2i.js contains pre-baked pro user');
  assert(indexJs.includes('wh=kt(()=>!0)'), 'isLoggedIn (wh) is locked to true');
  assert(indexJs.includes('vh=kt(()=>!0)'), 'isPro (vh) is locked to true');
  assert(indexJs.includes('jh=async e=>({authorized:!0})'), 'Export authorization (jh) is unlocked to true');

  // 4. Audit Live Server & HTTP Endpoints
  console.log('\n--- 4. Live Server Endpoints Audit ---');
  const serverProcess = spawn('node', ['server.js'], {
    cwd: __dirname,
    env: { ...process.env, PORT: TEST_PORT.toString() }
  });

  // Give server time to bind
  await new Promise(r => setTimeout(r, 1200));

  try {
    // Test Studio endpoint
    const resStudio = await fetch(`${SERVER_URL}/studio`);
    assert(resStudio.status === 200, 'GET /studio returns 200 OK');
    const studioText = await resStudio.text();
    assert(studioText.includes('assets/index-CMZTRe2i.js'), 'Studio loads index-CMZTRe2i.js entry');

    // Test Index endpoint
    const resIndex = await fetch(`${SERVER_URL}/`);
    assert(resIndex.status === 200, 'GET / returns 200 OK');

    // Test JS asset serving
    const resJs = await fetch(`${SERVER_URL}/assets/index-CMZTRe2i.js`);
    assert(resJs.status === 200, 'GET /assets/index-CMZTRe2i.js returns 200 OK');
    assert(resJs.headers.get('content-type').includes('javascript'), 'JS content-type is correct');

    // Test CSS asset serving
    const resCss = await fetch(`${SERVER_URL}/assets/index-CMxk3kTM.css`);
    assert(resCss.status === 200, 'GET /assets/index-CMxk3kTM.css returns 200 OK');
    assert(resCss.headers.get('content-type').includes('css'), 'CSS content-type is correct');

    // Test Font serving
    const resFont = await fetch(`${SERVER_URL}/fonts/ibm-plex-sans-latin-v23.woff2`);
    assert(resFont.status === 200, 'GET /fonts/...woff2 returns 200 OK');

    // Test Neutralized Cloudflare route
    const resCf = await fetch(`${SERVER_URL}/cdn-cgi/rum/beacon.min.js`);
    assert(resCf.status === 200, 'Cloudflare telemetry request neutralized cleanly with 200 OK');

    // Test Mock /auth/me
    const resAuthMe = await fetch(`${SERVER_URL}/auth/me`);
    const authData = await resAuthMe.json();
    assert(resAuthMe.status === 200 && authData.user.plan === 'pro', 'Local /auth/me returns Pro user');

    // Test Mock /exports/authorize
    const resExp = await fetch(`${SERVER_URL}/exports/authorize`, { method: 'POST' });
    const expData = await resExp.json();
    assert(resExp.status === 200 && expData.authorized === true, 'Local /exports/authorize returns authorized: true');

    // Test Google auth disabled
    // Test Admin Dashboard Stats
    const resModels = await fetch(`${SERVER_URL}/models`);
    assert(resModels.status === 200, 'GET /models returns 200 OK');

    const resKamus = await fetch(`${SERVER_URL}/kamus`);
    assert(resKamus.status === 200, 'GET /kamus returns 200 OK');

    const resAdmin = await fetch(`${SERVER_URL}/admin`);
    assert(resAdmin.status === 200, 'GET /admin returns 200 OK');

    const resStatsApi = await fetch(`${SERVER_URL}/api/admin/stats`);
    const statsDataApi = await resStatsApi.json();
    assert(resStatsApi.status === 200 && statsDataApi.total > 0 && Array.isArray(statsDataApi.daily), 'Local /api/admin/stats returns JSON metrics & daily chart array');

    const resStats = await fetch(`${SERVER_URL}/admin/stats`);
    const statsData = await resStats.json();
    assert(resStats.status === 200 && statsData.total > 0 && Array.isArray(statsData.daily), 'Local /admin/stats returns valid metrics & daily chart array');

    const resGAuth = await fetch(`${SERVER_URL}/auth/google/config`);
    const gData = await resGAuth.json();
    assert(resGAuth.status === 200 && gData.enabled === false, 'Google Auth is explicitly disabled');

  } finally {
    serverProcess.kill();
    console.log('\n--- Server stopped ---');
  }

  console.log(`\n==============================================`);
  console.log(`Audit Finished: ${passedTests}/${totalTests} Tests Passed`);
  console.log(`==============================================\n`);

  if (passedTests === totalTests) {
    console.log('>>> ALL VERIFICATION GATES SATISFIED! <<<');
  }
}

runAudit();
