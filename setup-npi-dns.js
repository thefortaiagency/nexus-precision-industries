#!/usr/bin/env node

const https = require('https');

// GoDaddy API credentials from environment
const GODADDY_API_KEY = process.env.GODADDY_API_KEY || 'dLV6x6C1hSXL_JKn1GQEHF3F4V3MeZ5Kzzg';
const GODADDY_API_SECRET = process.env.GODADDY_API_SECRET || '3CmB1GiHbpRo9iMNKLSgJU';
const DOMAIN = 'aimpactnexus.ai';
const SUBDOMAIN = 'npi';

// Vercel deployment URL
const VERCEL_URL = 'nexus-precision-industries.vercel.app';

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

  try {
    // Step 1: Check if the record already exists
    console.log('📡 Checking existing DNS records...');
    const existingRecords = await makeGoDaddyRequest(
      'GET',
      `/v1/domains/${DOMAIN}/records/CNAME/${SUBDOMAIN}`
    );

    // Step 2: Create or update the CNAME record
    console.log('🔧 Configuring CNAME record...');
    const recordData = [{
      data: VERCEL_URL,
      ttl: 600,
      type: 'CNAME',
      name: SUBDOMAIN
    }];

    await makeGoDaddyRequest(
      'PUT',
      `/v1/domains/${DOMAIN}/records/CNAME/${SUBDOMAIN}`,
      recordData
    );

    console.log('✅ DNS record created/updated successfully!\n');

    // Step 3: Display configuration instructions
    console.log('📋 Next Steps:');
    console.log('════════════════════════════════════════════════════════');
    console.log('1. Go to Vercel Dashboard: https://vercel.com/dashboard');
    console.log('2. Open your project: nexus-precision-industries');
    console.log('3. Go to Settings → Domains');
    console.log('4. Add domain: npi.aimpactnexus.ai');
    console.log('5. Vercel will automatically provision SSL certificate');
    console.log('════════════════════════════════════════════════════════\n');

    console.log('🌐 Your site will be live at:');
    console.log('   https://npi.aimpactnexus.ai');
    console.log('');
    console.log('⏱️  DNS propagation may take 5-30 minutes');
    console.log('🔒 SSL certificate will be automatically provisioned by Vercel\n');

    // Step 4: Verify DNS propagation
    console.log('🔍 Current DNS Status:');
    console.log(`   ${SUBDOMAIN}.${DOMAIN} → ${VERCEL_URL}`);
    console.log('');
    console.log('💡 Pro tip: Use "nslookup npi.aimpactnexus.ai" to check propagation');

  } catch (error) {
    console.error('❌ Error setting up DNS:', error.message);
    process.exit(1);
  }
}

// Run the setup
setupDNS().catch(console.error);