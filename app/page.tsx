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
  Settings,
  Clock,
  CheckCircle
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
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
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
                <p className="text-xs text-cyan-600">Manufacturing Intelligence Platform</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/dashboard" className="text-gray-600 hover:text-cyan-600 transition-colors">Dashboard</Link>
              <Link href="/reports" className="text-gray-600 hover:text-cyan-600 transition-colors">Reports</Link>
              <Link href="/settings" className="text-gray-600 hover:text-cyan-600 transition-colors">Settings</Link>
              <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-cyan-600 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Production Metrics Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100">
              Advanced manufacturing intelligence with real-time tracking and AI-powered insights
            </p>
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

      {/* Quick Actions */}
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
                <h3 className="text-lg font-semibold text-gray-900">Hit Tracker</h3>
                <Activity className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-gray-600">Track production hits, parts produced, and quality metrics</p>
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
                <h3 className="text-lg font-semibold text-gray-900">Scrap Analysis</h3>
                <AlertTriangle className="h-6 w-6 text-orange-600 animate-pulse" />
              </div>
              <p className="text-gray-700 font-medium">2025 YTD: $482K scrap with $284K savings identified</p>
              <div className="mt-4 flex items-center text-orange-600">
                <span className="text-sm font-medium">View Analysis</span>
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/inventory-true-impact" className="block">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-2 border-emerald-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Inventory Impact</h3>
                <TrendingUp className="h-6 w-6 text-emerald-600 animate-pulse" />
              </div>
              <p className="text-gray-700 font-medium">TRUE impact: $34.4M (93.8% were transfers)</p>
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
              <p className="text-gray-600">Pioneer scrap, quality metrics, and trend analysis</p>
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
                <h3 className="text-lg font-semibold text-gray-900">Manning Status</h3>
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <p className="text-gray-600">Shift coverage, overtime tracking, and workforce analytics</p>
              <div className="mt-4 flex items-center text-cyan-600">
                <span className="text-sm font-medium">View Manning</span>
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
              <p className="text-gray-600">Submit shift reports, production data, and quality issues</p>
              <div className="mt-4 flex items-center text-cyan-600">
                <span className="text-sm font-medium">Enter Data</span>
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/reports/import" className="block">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-cyan-400">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Import Data</h3>
                <Package className="h-6 w-6 text-slate-600" />
              </div>
              <p className="text-gray-600">Import Excel files for batch processing and analysis</p>
              <div className="mt-4 flex items-center text-cyan-600">
                <span className="text-sm font-medium">Import Files</span>
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Key Features */}
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
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
                <p className="text-gray-600">Comprehensive reporting with trend analysis, predictions, and AI insights</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Factory className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Machine Intelligence</h3>
                <p className="text-gray-600">AI-powered insights for predictive maintenance and downtime prevention</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Shift Management</h3>
                <p className="text-gray-600">Monitor shift performance, manning status, and labor efficiency</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Control</h3>
                <p className="text-gray-600">Track scrap rates, defects, and quality metrics with root cause analysis</p>
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
                <div className="text-gray-600">Data Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-cyan-600 to-teal-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Manufacturing Operations?
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            See how Nexus Precision Industries can optimize your production efficiency
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-white text-cyan-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Demo
            </button>
            <button className="px-8 py-3 bg-cyan-700 text-white rounded-lg font-semibold hover:bg-cyan-800 transition-colors border border-cyan-500">
              View Sample Reports
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