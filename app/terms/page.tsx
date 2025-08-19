import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-purple-100">Effective Date: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using Nexus Precision Industries ("Service"), you agree to be bound by these Terms of Service ("Terms"). 
              If you disagree with any part of these terms, you do not have permission to access the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Service</h2>
            <p className="text-gray-700 mb-4">
              Nexus Precision Industries provides manufacturing intelligence and ERP integration services. You may use our Service only 
              for lawful purposes and in accordance with these Terms. You agree not to use the Service:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>To transmit any unauthorized advertising or promotional material</li>
              <li>To impersonate or attempt to impersonate the Company or another user</li>
              <li>In any way that infringes upon the rights of others</li>
              <li>To engage in any conduct that restricts or inhibits anyone's use of the Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Collection and Privacy</h2>
            <p className="text-gray-700 mb-4">
              Your use of our Service is also governed by our Privacy Policy. By using the Service, you consent to our collection 
              and use of information as described in our Privacy Policy. We collect manufacturing data solely for the purpose of 
              providing insights and improving operational efficiency.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
            <p className="text-gray-700 mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of 
              AImpact Nexus and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks 
              may not be used in connection with any product or service without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. AI-Generated Insights</h2>
            <p className="text-gray-700 mb-4">
              Our Service uses artificial intelligence to analyze data and provide insights. While we strive for accuracy, 
              AI-generated recommendations should be reviewed by qualified personnel before implementation. We are not liable 
              for decisions made based solely on AI recommendations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. ERP Integration</h2>
            <p className="text-gray-700 mb-4">
              By connecting your ERP system to our Service, you grant us permission to access and analyze your manufacturing data. 
              We maintain strict security protocols and will never modify your ERP data without explicit permission. Integration 
              setup times are estimates and may vary based on system complexity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Level Agreement</h2>
            <p className="text-gray-700 mb-4">
              We strive to maintain 99.9% uptime for our Service. Scheduled maintenance will be communicated in advance. 
              We are not liable for any downtime caused by factors outside our control, including but not limited to internet 
              service provider failures, ERP system outages, or force majeure events.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement industry-standard security measures including 256-bit encryption, SOC 2 Type II compliance, 
              and regular security audits. You are responsible for maintaining the confidentiality of your account credentials 
              and for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, AImpact Nexus shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
              or any loss of data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, 
              including without limitation if you breach the Terms. Upon termination, your right to use the Service will cease 
              immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to 
              its conflict of law provisions. Any legal action or proceeding shall be brought exclusively in the federal or 
              state courts located in our jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide 
              at least 30 days' notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-700">
                <strong>AImpact Nexus</strong><br />
                Email: legal@aimpactnexus.ai<br />
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