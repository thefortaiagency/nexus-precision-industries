'use client'

import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation'
import HeroSection from '../../components/HeroSection'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { 
  Package, 
  TrendingDown, 
  AlertTriangle, 
  Clock,
  DollarSign,
  BarChart3,
  Brain,
  FileSpreadsheet,
  Database,
  Zap,
  ChevronRight,
  XCircle,
  CheckCircle
} from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'

export default function InventoryIntelligencePage() {
  const [selectedView, setSelectedView] = useState('comparison')

  // Time waste comparison data
  const timeWasteComparison = [
    { 
      task: 'Inventory Counts',
      sap: 160,
      oracle: 150,
      microsoft: 140,
      nexus: 10,
      description: 'Physical counts and reconciliation'
    },
    { 
      task: 'Stock Reports',
      sap: 80,
      oracle: 75,
      microsoft: 70,
      nexus: 5,
      description: 'Creating inventory status reports'
    },
    { 
      task: 'Reorder Analysis',
      sap: 120,
      oracle: 110,
      microsoft: 100,
      nexus: 8,
      description: 'Determining what to order'
    },
    { 
      task: 'Variance Investigation',
      sap: 60,
      oracle: 55,
      microsoft: 50,
      nexus: 3,
      description: 'Researching discrepancies'
    },
    { 
      task: 'Cycle Counting',
      sap: 40,
      oracle: 38,
      microsoft: 35,
      nexus: 2,
      description: 'Regular accuracy checks'
    }
  ]

  // Calculate totals
  const totalHours = {
    sap: timeWasteComparison.reduce((acc, item) => acc + item.sap, 0),
    oracle: timeWasteComparison.reduce((acc, item) => acc + item.oracle, 0),
    microsoft: timeWasteComparison.reduce((acc, item) => acc + item.microsoft, 0),
    nexus: timeWasteComparison.reduce((acc, item) => acc + item.nexus, 0)
  }

  // Capability comparison
  const capabilityComparison = [
    { capability: 'Real-time Tracking', nexus: 100, sap: 60, oracle: 55, microsoft: 50 },
    { capability: 'AI Predictions', nexus: 95, sap: 30, oracle: 35, microsoft: 40 },
    { capability: 'Auto-reordering', nexus: 98, sap: 45, oracle: 40, microsoft: 45 },
    { capability: 'Visual Analytics', nexus: 100, sap: 50, oracle: 45, microsoft: 55 },
    { capability: 'Mobile Access', nexus: 100, sap: 40, oracle: 35, microsoft: 60 },
    { capability: 'Integration Speed', nexus: 95, sap: 30, oracle: 25, microsoft: 35 }
  ]

  // Cost of manual processes
  const manualCosts = [
    { month: 'Jan', traditional: 45000, nexus: 3000 },
    { month: 'Feb', traditional: 48000, nexus: 2800 },
    { month: 'Mar', traditional: 52000, nexus: 2900 },
    { month: 'Apr', traditional: 49000, nexus: 2700 },
    { month: 'May', traditional: 51000, nexus: 2600 },
    { month: 'Jun', traditional: 53000, nexus: 2500 }
  ]

  // Real-time inventory levels (simulated)
  const [inventoryLevels, setInventoryLevels] = useState([
    { item: 'Steel Coils', current: 450, min: 100, max: 500, reorder: 200, trend: 'stable' },
    { item: 'Aluminum Sheets', current: 85, min: 100, max: 400, reorder: 150, trend: 'critical' },
    { item: 'Fasteners', current: 12500, min: 5000, max: 20000, reorder: 8000, trend: 'decreasing' },
    { item: 'Hydraulic Oil', current: 380, min: 200, max: 600, reorder: 300, trend: 'stable' },
    { item: 'Welding Wire', current: 145, min: 100, max: 300, reorder: 150, trend: 'increasing' }
  ])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection 
        page="inventory"
        title="Inventory Intelligence vs Traditional ERPs"
        subtitle="Stop counting. Start predicting. Save 432 hours monthly."
        height="large"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Value Proposition */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">The Hidden Cost of Manual Inventory</h2>
              <p className="text-purple-100 mb-4">
                Traditional ERPs turn your managers into data entry clerks. While they're counting stock 
                and building Excel reports, your competitors are using AI to predict needs before they happen.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <XCircle className="h-5 w-5 mr-2 text-red-300" />
                  <span>SAP/Oracle: 460 hours/month on inventory tasks</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                  <span>Nexus: 28 hours/month (94% reduction)</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Monthly Time Savings</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Time Recovered</span>
                    <span className="font-bold">432 hours</span>
                  </div>
                  <div className="w-full bg-purple-800 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '94%' }} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-center pt-2">
                  = 2.7 Full-Time Employees
                </div>
                <p className="text-sm text-purple-200 text-center">
                  Freed to focus on strategic planning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* View Selector */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setSelectedView('comparison')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              selectedView === 'comparison'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Time Waste Comparison
          </button>
          <button
            onClick={() => setSelectedView('capabilities')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              selectedView === 'capabilities'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            AI Capabilities
          </button>
          <button
            onClick={() => setSelectedView('realtime')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              selectedView === 'realtime'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Live Demo
          </button>
        </div>

        {/* Comparison View */}
        {selectedView === 'comparison' && (
          <div className="space-y-8">
            {/* Time Waste Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-6 w-6 text-red-600 mr-2" />
                  Monthly Hours Wasted on Inventory Management
                </CardTitle>
                <CardDescription>
                  Comparing time spent on manual inventory tasks across major ERP systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={timeWasteComparison}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="task" angle={-45} textAnchor="end" height={100} />
                    <YAxis label={{ value: 'Hours per Month', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sap" fill="#ef4444" name="SAP" />
                    <Bar dataKey="oracle" fill="#f97316" name="Oracle" />
                    <Bar dataKey="microsoft" fill="#eab308" name="Microsoft" />
                    <Bar dataKey="nexus" fill="#10b981" name="Nexus" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Total Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="border-red-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">SAP Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">{totalHours.sap} hrs/mo</div>
                  <p className="text-xs text-gray-700 mt-1">≈ 3 full-time employees</p>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Oracle Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600">{totalHours.oracle} hrs/mo</div>
                  <p className="text-xs text-gray-700 mt-1">≈ 2.8 full-time employees</p>
                </CardContent>
              </Card>
              
              <Card className="border-yellow-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Microsoft Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-600">{totalHours.microsoft} hrs/mo</div>
                  <p className="text-xs text-gray-700 mt-1">≈ 2.6 full-time employees</p>
                </CardContent>
              </Card>
              
              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Nexus Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">{totalHours.nexus} hrs/mo</div>
                  <p className="text-xs text-green-600 mt-1">94% time reduction!</p>
                </CardContent>
              </Card>
            </div>

            {/* Cost Impact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-6 w-6 text-green-600 mr-2" />
                  Labor Cost of Manual Inventory Management
                </CardTitle>
                <CardDescription>
                  Monthly cost assuming $65/hour fully loaded labor rate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={manualCosts}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis label={{ value: 'Monthly Cost ($)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    <Legend />
                    <Line type="monotone" dataKey="traditional" stroke="#ef4444" strokeWidth={2} name="Traditional ERPs" />
                    <Line type="monotone" dataKey="nexus" stroke="#10b981" strokeWidth={2} name="Nexus" />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-900">
                    <strong>Annual Savings with Nexus:</strong> ${((53000 - 2500) * 12).toLocaleString()} 
                    <span className="text-xs ml-2">(Based on June figures)</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Capabilities View */}
        {selectedView === 'capabilities' && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-6 w-6 text-purple-600 mr-2" />
                  AI-Powered Inventory Capabilities
                </CardTitle>
                <CardDescription>
                  Comparing intelligent features across platforms (100 = Best in Class)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={capabilityComparison}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="capability" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar name="Nexus" dataKey="nexus" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                    <Radar name="SAP" dataKey="sap" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                    <Radar name="Oracle" dataKey="oracle" stroke="#f97316" fill="#f97316" fillOpacity={0.3} />
                    <Radar name="Microsoft" dataKey="microsoft" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Feature Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700">What Nexus Does (Automatically)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <strong>Predictive Reordering:</strong> AI predicts needs 30 days out
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <strong>Real-time Tracking:</strong> RFID/barcode integration updates instantly
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <strong>Anomaly Detection:</strong> Catches discrepancies before audits
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <strong>Supplier Integration:</strong> Direct EDI with auto-confirmation
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <strong>Mobile Alerts:</strong> Push notifications for critical levels
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-700">What Traditional ERPs Make You Do</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <div>
                        <strong>Manual Counts:</strong> Physical inventory every month
                      </div>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <div>
                        <strong>Excel Reports:</strong> Export data and build custom reports
                      </div>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <div>
                        <strong>Manual Reordering:</strong> Review levels and create POs
                      </div>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <div>
                        <strong>Variance Research:</strong> Investigate every discrepancy
                      </div>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <div>
                        <strong>Email Chains:</strong> Back-and-forth with suppliers
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Real-time Demo View */}
        {selectedView === 'realtime' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold flex items-center">
                    <Zap className="h-8 w-8 mr-2" />
                    Live Nexus Inventory Intelligence
                  </h3>
                  <p className="text-green-100 mt-1">
                    This is what your team sees. No Excel. No manual counts. Just intelligence.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">0</div>
                  <div className="text-sm text-green-100">Manual entries today</div>
                </div>
              </div>
            </div>

            {/* Real-time Inventory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {inventoryLevels.map((item) => (
                <Card key={item.item} className={
                  item.trend === 'critical' ? 'border-red-500 bg-red-50' :
                  item.trend === 'decreasing' ? 'border-yellow-500 bg-yellow-50' :
                  'border-gray-200'
                }>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base">{item.item}</CardTitle>
                      {item.trend === 'critical' && (
                        <AlertTriangle className="h-5 w-5 text-red-600 animate-pulse" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Current Stock</span>
                          <span className="font-bold">{item.current}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              item.current < item.min ? 'bg-red-600' :
                              item.current < item.reorder ? 'bg-yellow-600' :
                              'bg-green-600'
                            }`}
                            style={{ width: `${(item.current / item.max) * 100}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">
                        <div className="flex justify-between">
                          <span>Min: {item.min}</span>
                          <span>Reorder: {item.reorder}</span>
                          <span>Max: {item.max}</span>
                        </div>
                      </div>
                      {item.trend === 'critical' && (
                        <div className="text-xs text-red-600 font-medium">
                          AI: Auto-reorder initiated. ETA: 2 days
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI Insights Panel */}
            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-6 w-6 text-purple-600 mr-2" />
                  AI Inventory Insights (Last 24 Hours)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-l-4 border-purple-500">
                    <div className="font-semibold text-purple-900">Predictive Alert</div>
                    <p className="text-sm text-gray-700 mt-1">
                      Based on production schedules, steel coil consumption will increase 35% next week. 
                      Recommend increasing safety stock to 250 units.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border-l-4 border-green-500">
                    <div className="font-semibold text-green-900">Cost Optimization</div>
                    <p className="text-sm text-gray-700 mt-1">
                      Bulk ordering aluminum sheets now would save $12,400 based on price trends. 
                      Storage capacity available.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border-l-4 border-blue-500">
                    <div className="font-semibold text-blue-900">Efficiency Gain</div>
                    <p className="text-sm text-gray-700 mt-1">
                      Automated 47 reorder decisions this week. Time saved: 8.5 hours. 
                      Accuracy: 99.2% vs 94% manual.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stop Managing Inventory. Start Managing Strategy.
            </h2>
            <p className="text-purple-100 mb-6 max-w-3xl mx-auto">
              Your competitors using traditional ERPs waste 460 hours monthly on inventory tasks. 
              With Nexus, you'll spend 28 hours. That's 432 hours to outmaneuver them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://aimpactnexus.ai/contact" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-700 rounded-lg font-semibold hover:bg-purple-50 transition-all"
              >
                See Your Time Savings
                <ChevronRight className="h-5 w-5 ml-2" />
              </a>
              <button className="inline-flex items-center px-8 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-400 transition-all">
                <FileSpreadsheet className="h-5 w-5 mr-2" />
                Download Comparison Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}