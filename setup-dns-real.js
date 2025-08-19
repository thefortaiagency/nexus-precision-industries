#!/usr/bin/env node

const https = require('https');

// REAL PRODUCTION API KEYS - WE HAVE THEM!
const GODADDY_API_KEY = 'dLV6x6C1hSXL_JKn1GQEHF3F4V3MeZ5Kzzg';
const GODADDY_API_SECRET = '3CmB1GiHbpRo9iMNKLSgJU';
const DOMAIN = 'aimpactnexus.ai';
const SUBDOMAIN = 'npi';

// Vercel IP for A record
const VERCEL_IP = '76.76.21.21';

async function makeGoDaddyRequest(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.godaddy.com',
      path: path,
      method: method,
      headers: {
        'Authorization': `sso-key ${GODADDY_API_KEY}:${GODADDY_API_SECRET}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(body ? JSON.parse(body) : {});
        } else {
          reject(new Error(`GoDaddy API error: ${res.statusCode} - ${body}`));
        }
      });
    });

    req.on('error', reject);
    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

async function setupDNS() {
  console.log('🚀 Setting up DNS for npi.aimpactnexus.ai...\n');
  console.log('Using REAL production API keys - not mocks!\n');

  try {
    // Step 1: Check if the A record already exists
    console.log('📡 Checking existing DNS records...');
    try {
      const existingRecords = await makeGoDaddyRequest(
        'GET',
        `/v1/domains/${DOMAIN}/records/A/${SUBDOMAIN}`
      );
      console.log('Found existing A record:', existingRecords);
    } catch (error) {
      console.log('No existing A record found (this is normal)');
    }

    // Step 2: Create or update the A record
    console.log('🔧 Creating/updating A record...');
    const recordData = [{
      data: VERCEL_IP,
      ttl: 600,
      type: 'A',
      name: SUBDOMAIN
    }];

    await makeGoDaddyRequest(
      'PUT',
      `/v1/domains/${DOMAIN}/records/A/${SUBDOMAIN}`,
      recordData
    );

    console.log('✅ DNS A record configured successfully!\n');

    // Step 3: Display success
    console.log('🎉 SUCCESS! DNS is now configured!');
    console.log('════════════════════════════════════════════════════════');
    console.log(`   ${SUBDOMAIN}.${DOMAIN} → ${VERCEL_IP}`);
    console.log('════════════════════════════════════════════════════════\n');

    console.log('🌐 Your site will be live at:');
    console.log('   https://npi.aimpactnexus.ai');
    console.log('');
    console.log('⏱️  DNS propagation may take 5-30 minutes');
    console.log('🔒 SSL certificate will be automatically provisioned by Vercel');
    console.log('');
    console.log('💡 Check propagation with:');
    console.log('   nslookup npi.aimpactnexus.ai');
    console.log('   dig npi.aimpactnexus.ai');
    console.log('');
    console.log('✨ The whitelabeled Nexus Precision Industries demo is ready!');

  } catch (error) {
    console.error('❌ Error setting up DNS:', error.message);
    console.error('\nFull error:', error);
    process.exit(1);
  }
}

// Run the setup
console.log('═══════════════════════════════════════════════════════════════');
console.log('   NEXUS PRECISION INDUSTRIES - DNS AUTOMATION');
console.log('   Using PRODUCTION GoDaddy API Keys');
console.log('═══════════════════════════════════════════════════════════════\n');

setupDNS().catch(console.error);