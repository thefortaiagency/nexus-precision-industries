import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-indigo-100">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us, as well as data about your manufacturing operations through 
              our ERP integration services. This includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Contact information (name, email, company, phone number)</li>
              <li>Account credentials and authentication data</li>
              <li>Manufacturing data (production metrics, inventory levels, quality data)</li>
              <li>ERP system information and integration logs</li>
              <li>Usage data and analytics about how you interact with our Service</li>
              <li>Communication preferences and support interactions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide, maintain, and improve our manufacturing intelligence services</li>
              <li>Generate AI-powered insights and predictive analytics</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent or illegal activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties. We may share your 
              information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>With your consent or at your direction</li>
              <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
              <li>If required by law or to respond to legal process</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a merger, acquisition, or sale of assets (with notice to users)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>256-bit SSL/TLS encryption for data in transit</li>
              <li>AES-256 encryption for data at rest</li>
              <li>SOC 2 Type II certified infrastructure</li>
              <li>Regular security audits and penetration testing</li>
              <li>Role-based access controls and multi-factor authentication</li>
              <li>24/7 security monitoring and incident response</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your information for as long as necessary to provide our services and fulfill the purposes outlined 
              in this policy. Manufacturing data is retained for analytics and historical comparison purposes. You may request 
              deletion of your data at any time, subject to legal and contractual obligations.
            </p>
          </section>

          <section className="mb-8" id="cookies">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to track activity on our Service and hold certain information:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Types of Cookies We Use:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the Service to function properly (authentication, security)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how you use our Service to improve it</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              <li><strong>Performance Cookies:</strong> Monitor Service performance and optimize user experience</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cookie Management:</h3>
            <p className="text-gray-700 mb-4">
              You can control cookies through your browser settings. Note that disabling certain cookies may limit your 
              ability to use some features of our Service. We honor "Do Not Track" signals and do not track users across 
              third-party websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Data Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal obligations)</li>
              <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Objection:</strong> Object to certain processing of your data</li>
              <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and maintained on servers located outside of your state, province, 
              or country. We ensure appropriate safeguards are in place to protect your data in accordance with this 
              Privacy Policy and applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal 
              information from children under 18. If you become aware that a child has provided us with personal data, 
              please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. California Privacy Rights</h2>
            <p className="text-gray-700 mb-4">
              California residents have specific rights under the California Consumer Privacy Act (CCPA), including the 
              right to know what personal information we collect, the right to delete personal information, and the right 
              to opt-out of the sale of personal information (which we do not do).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. GDPR Compliance</h2>
            <p className="text-gray-700 mb-4">
              For users in the European Economic Area, we comply with the General Data Protection Regulation (GDPR). 
              We process data based on legitimate interests, consent, or contractual necessity. You have additional rights 
              including the right to lodge a complaint with supervisory authorities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date. Material changes will be communicated via 
              email or prominent notice on our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy or your data, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-700">
                <strong>Data Protection Officer</strong><br />
                AImpact Nexus<br />
                Email: privacy@aimpactnexus.ai<br />
                Support: support@aimpactnexus.ai<br />
                Website: https://aimpactnexus.ai
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}