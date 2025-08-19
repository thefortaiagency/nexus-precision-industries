'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Check, 
  X, 
  AlertCircle, 
  TrendingDown,
  DollarSign,
  Clock,
  Users,
  HeadphonesIcon,
  Lock,
  Zap,
  Brain,
  ChevronRight
} from 'lucide-react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'

export default function ERPComparison() {
  // Feature comparison data
  const features = [
    {
      category: 'Reporting & Analytics',
      items: [
        { feature: 'Real-time reporting', nexus: true, sap: false, oracle: false, microsoft: false, netsuite: false },
        { feature: 'Natural language queries', nexus: true, sap: false, oracle: false, microsoft: false, netsuite: false },
        { feature: 'AI-powered insights', nexus: true, sap: 'partial', oracle: 'partial', microsoft: 'partial', netsuite: false },
        { feature: 'Self-service report builder', nexus: true, sap: false, oracle: false, microsoft: 'partial', netsuite: 'partial' },
        { feature: 'Predictive analytics', nexus: true, sap: 'partial', oracle: 'partial', microsoft: false, netsuite: false },
        { feature: 'Automated anomaly detection', nexus: true, sap: false, oracle: false, microsoft: false, netsuite: false },
      ]
    },
    {
      category: 'Implementation & Support',
      items: [
        { feature: 'Deployment time <30 days', nexus: true, sap: false, oracle: false, microsoft: false, netsuite: 'partial' },
        { feature: 'No technical expertise required', nexus: true, sap: false, oracle: false, microsoft: false, netsuite: false },
        { feature: '24/7 AI support', nexus: true, sap: false, oracle: false, microsoft: false, netsuite: false },
        { feature: 'Free updates & upgrades', nexus: true, sap: false, oracle: false, microsoft: 'partial', netsuite: 'partial' },
        { feature: 'No hidden costs', nexus: true, sap: false, oracle: false, microsoft: false, netsuite: false },
      ]
    },
    {
      category: 'Customization & Flexibility',
      items: [
        { feature: 'Code-free customization', nexus: true, sap: false, oracle: false, microsoft: false, netsuite: false },
        { feature: 'Adaptive workflows', nexus: true, sap: false, oracle: false, microsoft: false, netsuite: false },
        { feature: 'Industry-specific templates', nexus: true, sap: 'partial', oracle: 'partial', microsoft: 'partial', netsuite: 'partial' },
        { feature: 'Seamless third-party integration', nexus: true, sap: 'partial', oracle: 'partial', microsoft: 'partial', netsuite: 'partial' },
        { feature: 'API-first architecture', nexus: true, sap: 'partial', oracle: 'partial', microsoft: true, netsuite: true },
      ]
    },
    {
      category: 'Cost & Value',
      items: [
        { feature: 'Transparent pricing', nexus: true, sap: false, oracle: false, microsoft: 'partial', netsuite: 'partial' },
        { feature: 'No per-module fees', nexus: true, sap: false, oracle: false, microsoft: false, netsuite: false },
        { feature: 'ROI within 6 months', nexus: true, sap: false, oracle: false, microsoft: false, netsuite: false },
        { feature: 'Free trial available', nexus: true, sap: false, oracle: false, microsoft: true, netsuite: true },
        { feature: 'Money-back guarantee', nexus: true, sap: false, oracle: false, microsoft: false, netsuite: false },
      ]
    }
  ]

  // Common ERP complaints data
  const complaints = [
    {
      issue: 'Excessive Implementation Time',
      description: 'Traditional ERPs take 6-18 months to implement',
      impact: 'Birmingham City Council: 4+ years, £129 million over budget',
      nexusSolution: 'Add Nexus intelligence layer in 30 days without disrupting your ERP'
    },
    {
      issue: 'Hidden Costs & Budget Overruns',
      description: 'Projects regularly exceed budget by 200-300%',
      impact: 'Average cost overrun: $3.8 million + consultant fees',
      nexusSolution: 'Affordable add-on pricing that enhances your ERP investment'
    },
    {
      issue: 'Manual Report Generation',
      description: 'Teams spend days creating reports in Excel',
      impact: '40% of staff time wasted on manual reporting',
      nexusSolution: 'AI layer extracts insights from your ERP data in seconds'
    },
    {
      issue: 'Poor Customer Support',
      description: 'Vendors provide minimal support after purchase',
      impact: 'Average support ticket resolution: 5-7 days',
      nexusSolution: '24/7 AI support for reporting and analytics questions'
    },
    {
      issue: 'Rigid, Inflexible Systems',
      description: 'Cannot adapt to unique business processes',
      impact: 'Forces businesses to change processes to fit software',
      nexusSolution: 'AI adapts to your workflows while keeping ERP as system of record'
    },
    {
      issue: 'Integration Nightmares',
      description: 'Systems don\'t communicate with each other',
      impact: 'Data silos prevent comprehensive business view',
      nexusSolution: 'Integration layer connects your ERP to other systems seamlessly'
    }
  ]

  const renderCheckmark = (value: boolean | string) => {
    if (value === true) {
      return (
        <div className="flex justify-center items-center">
          <Check className="h-5 w-5 text-green-600" />
        </div>
      )
    } else if (value === 'partial') {
      return (
        <div className="flex justify-center items-center">
          <AlertCircle className="h-5 w-5 text-yellow-600" />
        </div>
      )
    } else {
      return (
        <div className="flex justify-center items-center">
          <X className="h-5 w-5 text-red-600" />
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection 
        page="erpComparison"
        title="Enhance Your ERP with Intelligence It's Missing"
        subtitle="See how Nexus fills the critical gaps in SAP, Oracle, Microsoft, and NetSuite with AI-powered capabilities"
        height="large"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 px-4 sm:px-0">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 text-center">
            <div className="text-lg sm:text-2xl font-bold">50%</div>
            <div className="text-xs sm:text-sm">faster reporting</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 text-center">
            <div className="text-lg sm:text-2xl font-bold">30 days</div>
            <div className="text-xs sm:text-sm">to value</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 text-center">
            <div className="text-lg sm:text-2xl font-bold">100%</div>
            <div className="text-xs sm:text-sm">ERP compatible</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 text-center">
            <div className="text-lg sm:text-2xl font-bold">24/7</div>
            <div className="text-xs sm:text-sm">AI support</div>
          </div>
        </div>
      </HeroSection>

      {/* Feature Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Your ERP Has vs. What You Need
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Traditional ERPs handle core business processes well, but they consistently miss critical 
            intelligence capabilities. Here's what Nexus adds to your existing ERP investment.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Capabilities</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-cyan-600">
                    <div className="flex flex-col items-center">
                      <Brain className="h-6 w-6 mb-1" />
                      Nexus Adds
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">SAP</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Oracle</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Microsoft</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">NetSuite</th>
                </tr>
              </thead>
              <tbody>
                {features.map((category, categoryIdx) => (
                  <React.Fragment key={categoryIdx}>
                    <tr className="bg-gray-50">
                      <td colSpan={6} className="px-6 py-3 text-sm font-semibold text-gray-900">
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, itemIdx) => (
                      <tr key={itemIdx} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-700">{item.feature}</td>
                        <td className="px-6 py-4 text-center">{renderCheckmark(item.nexus)}</td>
                        <td className="px-6 py-4 text-center">{renderCheckmark(item.sap)}</td>
                        <td className="px-6 py-4 text-center">{renderCheckmark(item.oracle)}</td>
                        <td className="px-6 py-4 text-center">{renderCheckmark(item.microsoft)}</td>
                        <td className="px-6 py-4 text-center">{renderCheckmark(item.netsuite)}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-600 mr-2" />
              <span>Full support</span>
            </div>
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
              <span>Partial/Limited</span>
            </div>
            <div className="flex items-center">
              <X className="h-5 w-5 text-red-600 mr-2" />
              <span>Not available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Common ERP Complaints Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common ERP Challenges We Help Solve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Based on documented case studies and user research, these are the most common ERP limitations 
              that organizations face - and how Nexus helps address them without replacing your ERP.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {complaints.map((complaint, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <TrendingDown className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{complaint.issue}</h3>
                    <p className="text-gray-600 mb-3">{complaint.description}</p>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
                      <p className="text-sm text-red-800">
                        <strong>Real Impact:</strong> {complaint.impact}
                      </p>
                    </div>
                    <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3">
                      <p className="text-sm text-cyan-800">
                        <strong>Nexus Solution:</strong> {complaint.nexusSolution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Direct Vendor Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How Nexus Complements Your ERP
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Adding capabilities that are typically expensive or complex to get from traditional vendors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cost Comparison */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Cost for Advanced Analytics</h3>
              <DollarSign className="h-6 w-6 text-orange-600" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">SAP Analytics</span>
                <span className="font-semibold text-orange-600">$150K+/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Oracle Analytics</span>
                <span className="font-semibold text-orange-600">$120K+/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">MS Power BI Pro</span>
                <span className="font-semibold text-orange-600">$80K+/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">NetSuite Analytics</span>
                <span className="font-semibold text-orange-600">$60K+/year</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-cyan-600">Nexus Add-On</span>
                  <span className="font-bold text-green-600">$10K-30K/year</span>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Time */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Implementation Time</h3>
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">SAP</span>
                <span className="font-semibold text-orange-600">12-24 months</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Oracle</span>
                <span className="font-semibold text-orange-600">9-18 months</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Microsoft</span>
                <span className="font-semibold text-orange-600">6-12 months</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">NetSuite</span>
                <span className="font-semibold text-orange-600">3-9 months</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-cyan-600">Nexus</span>
                  <span className="font-bold text-green-600">30 days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Support Quality */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Support Experience</h3>
              <HeadphonesIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">SAP</span>
                <span className="text-sm text-red-600">Ticket system, 3-5 days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Oracle</span>
                <span className="text-sm text-red-600">Phone support, limited</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Microsoft</span>
                <span className="text-sm text-yellow-600">Community forums</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">NetSuite</span>
                <span className="text-sm text-yellow-600">Email support</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-cyan-600">Nexus</span>
                  <span className="text-sm font-bold text-green-600">24/7 AI + Human</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why They Won't Talk to You Section */}
      <div className="bg-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Understanding ERP Vendor Limitations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Why getting advanced capabilities from traditional ERP vendors can be challenging
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <Lock className="h-5 w-5 text-red-600 inline mr-2" />
                "You're Too Small"
              </h3>
              <p className="text-gray-600 mb-3">
                Unless you're a Fortune 500 company, SAP and Oracle won't give you the time of day. 
                Their sales teams are compensated on deal size, not customer success.
              </p>
              <p className="text-sm text-red-600 font-medium">
                Minimum deal size: $500K+ just to get a meeting
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <Users className="h-5 w-5 text-red-600 inline mr-2" />
                Partner-Only Model
              </h3>
              <p className="text-gray-600 mb-3">
                They won't work with you directly. You must go through expensive consultants who 
                add 40-60% markup and have their own agenda.
              </p>
              <p className="text-sm text-red-600 font-medium">
                Average consultant fees: $250-500/hour
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <DollarSign className="h-5 w-5 text-red-600 inline mr-2" />
                Hidden Pricing Games
              </h3>
              <p className="text-gray-600 mb-3">
                No transparent pricing because they charge whatever they think you can afford. 
                The same system costs 10x more for one company vs another.
              </p>
              <p className="text-sm text-red-600 font-medium">
                Price variance: Up to 1000% for identical features
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <Clock className="h-5 w-5 text-red-600 inline mr-2" />
                6-Month Sales Cycles
              </h3>
              <p className="text-gray-600 mb-3">
                Even if they talk to you, expect 6-12 months of meetings, demos, and negotiations 
                before you can even start implementation.
              </p>
              <p className="text-sm text-red-600 font-medium">
                Average time to first value: 18-24 months
              </p>
            </div>
          </div>

          <div className="mt-12 bg-cyan-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Nexus: Enhancing Your ERP Investment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div>
                <Zap className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">Quick Setup</p>
                <p className="text-sm text-cyan-100">Add intelligence without disruption</p>
              </div>
              <div>
                <DollarSign className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">Transparent Pricing</p>
                <p className="text-sm text-cyan-100">Clear, predictable costs</p>
              </div>
              <div>
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">Fast ROI</p>
                <p className="text-sm text-cyan-100">See value in 30 days</p>
              </div>
              <div>
                <Users className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">Works With Your ERP</p>
                <p className="text-sm text-cyan-100">SAP, Oracle, Microsoft, any system</p>
              </div>
            </div>
            <Link href="/" className="inline-flex items-center px-6 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              See How Nexus Works
              <ChevronRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-cyan-600 to-teal-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get More From Your ERP Investment
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            Add AI-powered intelligence that transforms your ERP data into actionable insights
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-white text-cyan-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get ERP Enhancement Assessment
            </button>
            <button className="px-8 py-3 bg-cyan-700 text-white rounded-lg font-semibold hover:bg-cyan-800 transition-colors border border-cyan-500">
              See Integration Options
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}