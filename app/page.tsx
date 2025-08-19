import Link from 'next/link'
import Image from 'next/image'
import { 
  Factory, 
  LayoutDashboard, 
  FileText, 
  BarChart3, 
  Activity, 
  Package, 
  TrendingUp, 
  Users, 
  AlertTriangle,
  Bot,
  Brain,
  LineChart,
  PieChart,
  Zap
} from 'lucide-react'

// Mock data for demo
const stats = {
  productionRecords: 2847,
  machines: 12,
  efficiency: '94.3%',
  uptime: '99.2%'
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nexus Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Image 
                src="/nexus-logo.png" 
                alt="Nexus" 
                width={40} 
                height={40}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Nexus Precision Industries</h1>
                <p className="text-xs text-cyan-600">Beyond ERP - Manufacturing Intelligence</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-cyan-600 transition-colors">Home</Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-cyan-600 transition-colors">Dashboard</Link>
              <Link href="/reports" className="text-gray-600 hover:text-cyan-600 transition-colors">Reports</Link>
              <Link href="/ai-reports" className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-teal-600 transition-all flex items-center">
                <Brain className="h-4 w-4 mr-1" />
                AI Insights
              </Link>
              <Link href="/entry" className="text-gray-600 hover:text-cyan-600 transition-colors">Data Entry</Link>
              <Link href="/settings" className="text-gray-600 hover:text-cyan-600 transition-colors">Settings</Link>
              <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Platform Factory Background */}
      <div className="relative bg-gradient-to-br from-cyan-600 to-teal-700 text-white overflow-hidden">
        {/* Background Image - Brightened */}
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/images/hero-transformation.png" 
            alt="Platform Factory" 
            fill
            className="object-cover brightness-110"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/60 via-cyan-800/50 to-teal-900/60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Manufacturing Intelligence Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100">
              Transform your ERP data into AI-powered insights and actionable intelligence
            </p>
            
            {/* ERP Integration Banner */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Enhancing Your Existing ERP System</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">HubSpot</div>
                  <div className="text-sm text-cyan-200">Advanced analytics</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">Plex</div>
                  <div className="text-sm text-cyan-200">AI predictions</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">SAP</div>
                  <div className="text-sm text-cyan-200">Custom reports</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">Oracle</div>
                  <div className="text-sm text-cyan-200">Real-time insights</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">NetSuite</div>
                  <div className="text-sm text-cyan-200">Pattern detection</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold">{stats.productionRecords.toLocaleString()}+</div>
                <div className="text-sm text-cyan-100">Production Records</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-cyan-100">Real-Time Tracking</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{stats.machines}</div>
                <div className="text-sm text-cyan-100">Production Lines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{stats.efficiency}</div>
                <div className="text-sm text-cyan-100">Overall Efficiency</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intelligence From Your ERP Section */}
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unlock Hidden Intelligence From Your ERP Data
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your ERP system collects valuable data every day. We transform that data into 
              AI-powered reports and insights that help you make better decisions, faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">
                Analyze historical ERP data to predict equipment failures and maintenance needs before they impact production
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <LineChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Reports</h3>
              <p className="text-gray-600">
                Generate comprehensive reports from your ERP data that surface insights your standard reports miss
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Integration</h3>
              <p className="text-gray-600">
                Seamlessly connect with your existing ERP to create a unified view of all manufacturing operations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturing Intelligence Suite */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Manufacturing Intelligence Suite</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          <Link href="/dashboard" className="block">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-cyan-400">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Executive Dashboard</h3>
                <LayoutDashboard className="h-6 w-6 text-cyan-600" />
              </div>
              <p className="text-gray-600">Real-time KPIs, OEE metrics, and production analytics</p>
              <div className="mt-4 flex items-center text-cyan-600">
                <span className="text-sm font-medium">View Dashboard</span>
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/reports/hit-tracker-accurate" className="block">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-cyan-400">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Production Tracker</h3>
                <Activity className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-gray-600">Track production cycles, parts produced, and quality metrics</p>
              <div className="mt-4 flex items-center text-cyan-600">
                <span className="text-sm font-medium">View Tracker</span>
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/reports/scrap-analysis" className="block">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-2 border-orange-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Waste Analysis</h3>
                <AlertTriangle className="h-6 w-6 text-orange-600 animate-pulse" />
              </div>
              <p className="text-gray-700 font-medium">AI identifies $284K+ in potential savings</p>
              <div className="mt-4 flex items-center text-orange-600">
                <span className="text-sm font-medium">View Analysis</span>
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/ai-reports" className="block">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-2 border-purple-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">AI Insights</h3>
                <Brain className="h-6 w-6 text-purple-600 animate-pulse" />
              </div>
              <p className="text-gray-700 font-medium">Predictive analytics & recommendations</p>
              <div className="mt-4 flex items-center text-purple-600">
                <span className="text-sm font-medium">View AI Reports</span>
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/inventory-true-impact" className="block">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-2 border-emerald-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Inventory Intelligence</h3>
                <TrendingUp className="h-6 w-6 text-emerald-600 animate-pulse" />
              </div>
              <p className="text-gray-700 font-medium">True impact analysis with AI optimization</p>
              <div className="mt-4 flex items-center text-emerald-600">
                <span className="text-sm font-medium">View Impact</span>
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/reports" className="block">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-cyan-400">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Quality Reports</h3>
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-gray-600">Comprehensive quality metrics and trend analysis</p>
              <div className="mt-4 flex items-center text-cyan-600">
                <span className="text-sm font-medium">View Reports</span>
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/reports/manning" className="block">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-cyan-400">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Workforce Analytics</h3>
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <p className="text-gray-600">Shift optimization and labor efficiency analysis</p>
              <div className="mt-4 flex items-center text-cyan-600">
                <span className="text-sm font-medium">View Analytics</span>
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/entry" className="block">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-cyan-400">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Data Entry</h3>
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-gray-600">Streamlined data entry with validation</p>
              <div className="mt-4 flex items-center text-cyan-600">
                <span className="text-sm font-medium">Enter Data</span>
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* AI Chatbot Callout */}
      <div className="bg-gradient-to-r from-cyan-50 to-teal-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                <Bot className="h-8 w-8 text-cyan-600 mr-3" />
                AI Production Assistant Available 24/7
              </h3>
              <p className="text-gray-600">
                Ask questions about your ERP data and get instant insights. Our AI assistant analyzes your 
                existing data to uncover patterns, trends, and opportunities you might be missing.
              </p>
            </div>
            <div className="ml-8">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all transform hover:scale-105">
                Try AI Assistant →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ERP Compatibility Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Works With Your Existing ERP</h2>
            <p className="text-lg text-gray-600">
              Nexus integrates seamlessly with all major ERP systems to enhance, not replace, your current investment
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
              <span className="font-semibold text-gray-700">SAP</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
              <span className="font-semibold text-gray-700">Oracle</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
              <span className="font-semibold text-gray-700">Microsoft Dynamics</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
              <span className="font-semibold text-gray-700">NetSuite</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
              <span className="font-semibold text-gray-700">Infor</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
              <span className="font-semibold text-gray-700">Epicor</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
              <span className="font-semibold text-gray-700">Plex</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
              <span className="font-semibold text-gray-700">HubSpot</span>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Capabilities */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Platform Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Activity className="h-6 w-6 text-cyan-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Monitoring</h3>
                <p className="text-gray-600">Track production metrics as they happen with live dashboard updates and alerts</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">OEE Analysis</h3>
                <p className="text-gray-600">Monitor Overall Equipment Effectiveness and identify improvement opportunities</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Insights</h3>
                <p className="text-gray-600">Machine learning algorithms that predict issues before they impact production</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Factory className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Predictive Maintenance</h3>
                <p className="text-gray-600">AI predicts equipment failures 72 hours in advance</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Workforce Optimization</h3>
                <p className="text-gray-600">Smart scheduling based on skills, availability, and production demands</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <PieChart className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
                <p className="text-gray-600">Deep dive into data with custom reports and visualizations</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Platform Performance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-600 mb-2">{stats.uptime}</div>
                <div className="text-gray-600">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">250ms</div>
                <div className="text-gray-600">Avg Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">1.2M</div>
                <div className="text-gray-600">Data Points/Day</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">98.5%</div>
                <div className="text-gray-600">Prediction Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-cyan-600 to-teal-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Enhance Your ERP With AI-Powered Intelligence
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            Turn your existing ERP data into actionable insights and custom reports
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-white text-cyan-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Demo
            </button>
            <button className="px-8 py-3 bg-cyan-700 text-white rounded-lg font-semibold hover:bg-cyan-800 transition-colors border border-cyan-500">
              See Sample Reports
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image 
                src="/nexus-logo.png" 
                alt="Nexus" 
                width={30} 
                height={30}
              />
              <span className="text-gray-600 text-sm">
                © 2025 Nexus Precision Industries. All rights reserved.
              </span>
            </div>
            <div className="text-sm text-gray-500">
              Powered by Nexus Platform Technology
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}