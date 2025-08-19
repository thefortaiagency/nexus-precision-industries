'use client'

import { useState } from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { 
  Database, 
  Factory, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp,
  Package,
  Clock,
  Users,
  ChevronRight,
  Save,
  RefreshCw,
  BarChart3,
  FileText
} from 'lucide-react'

export default function DataEntryPage() {
  const [formData, setFormData] = useState({
    machineId: '',
    shiftId: '',
    partsProduced: '',
    goodParts: '',
    scrapParts: '',
    downtimeMinutes: '',
    operatorId: '',
    qualityRating: '',
    notes: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        machineId: '',
        shiftId: '',
        partsProduced: '',
        goodParts: '',
        scrapParts: '',
        downtimeMinutes: '',
        operatorId: '',
        qualityRating: '',
        notes: ''
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold flex items-center justify-center">
              <Database className="h-8 w-8 mr-3" />
              Manufacturing Data Entry
            </h1>
            <p className="text-teal-100 mt-2">
              Real-time production data capture and validation
            </p>
          </div>
        </div>
      </div>

      {/* Demo Notice */}
      <div className="bg-blue-50 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-blue-600 mr-3" />
            <p className="text-sm text-blue-800">
              <strong>Demo Mode:</strong> This is a sample data entry interface. 
              <a href="https://aimpactnexus.ai/contact" target="_blank" rel="noopener noreferrer" className="underline font-semibold ml-1">
                Schedule a demo
              </a> to see how it integrates with your actual ERP system.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Today&apos;s Entries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-teal-600">127</div>
              <p className="text-xs text-gray-500">+15 from yesterday</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Data Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">99.2%</div>
              <p className="text-xs text-gray-500">Above target</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avg Entry Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">45 sec</div>
              <p className="text-xs text-gray-500">-15 sec vs manual</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Validation Errors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">3</div>
              <p className="text-xs text-gray-500">Auto-corrected</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Factory className="h-5 w-5 text-teal-600 mr-2" />
                  Production Data Entry
                </CardTitle>
                <CardDescription>
                  Enter real-time production metrics for instant analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Submitted Successfully!</h3>
                    <p className="text-gray-600">
                      Production data has been captured and is now being analyzed by AI.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Machine & Shift Section */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4">Machine & Shift Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Machine ID *
                          </label>
                          <select 
                            name="machineId"
                            value={formData.machineId}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                            required
                          >
                            <option value="">Select Machine</option>
                            <option value="PRESS-001">600 Ton Press</option>
                            <option value="PRESS-002">400 Ton Press</option>
                            <option value="CNC-001">CNC Mill #1</option>
                            <option value="CNC-002">CNC Mill #2</option>
                            <option value="LATHE-001">Lathe #1</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Shift *
                          </label>
                          <select 
                            name="shiftId"
                            value={formData.shiftId}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                            required
                          >
                            <option value="">Select Shift</option>
                            <option value="1">First Shift (6AM - 2PM)</option>
                            <option value="2">Second Shift (2PM - 10PM)</option>
                            <option value="3">Third Shift (10PM - 6AM)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Production Metrics Section */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4">Production Metrics</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Parts Produced *
                          </label>
                          <input 
                            type="number"
                            name="partsProduced"
                            value={formData.partsProduced}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                            placeholder="0"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Good Parts
                          </label>
                          <input 
                            type="number"
                            name="goodParts"
                            value={formData.goodParts}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                            placeholder="0"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Scrap Parts
                          </label>
                          <input 
                            type="number"
                            name="scrapParts"
                            value={formData.scrapParts}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                            placeholder="0"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Downtime & Quality Section */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4">Downtime & Quality</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Downtime (minutes)
                          </label>
                          <input 
                            type="number"
                            name="downtimeMinutes"
                            value={formData.downtimeMinutes}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                            placeholder="0"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Quality Rating
                          </label>
                          <select 
                            name="qualityRating"
                            value={formData.qualityRating}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                          >
                            <option value="">Select Rating</option>
                            <option value="excellent">Excellent</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>
                            <option value="poor">Poor</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Notes Section */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Notes
                      </label>
                      <textarea 
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                        placeholder="Enter any additional observations or issues..."
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all flex items-center justify-center"
                      >
                        <Save className="h-5 w-5 mr-2" />
                        Submit Data
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({
                          machineId: '',
                          shiftId: '',
                          partsProduced: '',
                          goodParts: '',
                          scrapParts: '',
                          downtimeMinutes: '',
                          operatorId: '',
                          qualityRating: '',
                          notes: ''
                        })}
                        className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all flex items-center"
                      >
                        <RefreshCw className="h-5 w-5 mr-2" />
                        Clear
                      </button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* AI Validation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  AI Validation Active
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                    <span className="text-gray-700">Anomaly detection enabled</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                    <span className="text-gray-700">Auto-correction active</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                    <span className="text-gray-700">Quality checks running</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Entries */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  Recent Entries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="pb-3 border-b">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">PRESS-001</span>
                      <span className="text-gray-500">2 min ago</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">1,247 parts • 98.2% quality</p>
                  </div>
                  <div className="pb-3 border-b">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">CNC-002</span>
                      <span className="text-gray-500">15 min ago</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">892 parts • 99.1% quality</p>
                  </div>
                  <div className="pb-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">LATHE-001</span>
                      <span className="text-gray-500">28 min ago</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">445 parts • 97.8% quality</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <BarChart3 className="h-5 w-5 text-purple-600 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center text-sm">
                    <FileText className="h-4 w-4 mr-2 text-gray-600" />
                    View Today&apos;s Report
                  </button>
                  <button className="w-full text-left px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 mr-2 text-gray-600" />
                    Check Efficiency Trends
                  </button>
                  <button className="w-full text-left px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center text-sm">
                    <Package className="h-4 w-4 mr-2 text-gray-600" />
                    Inventory Status
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ERP Integration Capabilities Section */}
        <div className="mt-12 space-y-8">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4 text-center">
              How Nexus Integrates With Your Existing ERP
            </h2>
            <p className="text-purple-100 text-center max-w-3xl mx-auto">
              No rip and replace. Nexus seamlessly connects to your current ERP system and enhances it with AI intelligence.
            </p>
          </div>

          {/* Integration Methods Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Database className="h-5 w-5 mr-2 text-blue-600" />
                  Direct API
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-700">Real-time bidirectional data sync</p>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 bg-green-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <RefreshCw className="h-5 w-5 mr-2 text-green-600" />
                  MCP Protocol
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-700">Model Context Protocol for AI integration</p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-orange-600" />
                  Excel/CSV
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-700">Automated import/export workflows</p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-purple-600" />
                  PDF Reports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-700">AI extraction from existing reports</p>
              </CardContent>
            </Card>
          </div>

          {/* ERP-Specific Integration Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* SAP Integration */}
            <Card className="border-2 border-gray-200">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-xl">SAP Integration</CardTitle>
                <CardDescription className="text-blue-100">
                  Complete S/4HANA and ECC connectivity
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Connection Methods:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>OData Services:</strong> Real-time REST API access to all SAP modules</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>RFC/BAPI:</strong> Direct function calls for custom integrations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>IDoc Exchange:</strong> Automated document processing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>SAP GUI Scripting:</strong> Legacy system automation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data We Can Access:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Production Orders</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Material Masters</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">BOMs</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Quality Data</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Inventory</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Cost Centers</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="text-xs text-blue-900">
                      <strong>Setup Time:</strong> 2-3 days with your SAP Basis team
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Oracle Integration */}
            <Card className="border-2 border-gray-200">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                <CardTitle className="text-xl">Oracle Integration</CardTitle>
                <CardDescription className="text-red-100">
                  Oracle Cloud ERP and E-Business Suite
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Connection Methods:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>REST APIs:</strong> Modern cloud-native integration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>SOAP Web Services:</strong> Legacy E-Business Suite access</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Oracle Integration Cloud:</strong> Pre-built adapters</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Database Links:</strong> Direct Oracle DB access</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data We Can Access:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Work Orders</span>
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Item Masters</span>
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Routings</span>
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">WIP Status</span>
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Resources</span>
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Costing</span>
                    </div>
                  </div>
                  <div className="bg-red-50 p-3 rounded">
                    <p className="text-xs text-red-900">
                      <strong>Setup Time:</strong> 3-4 days with Oracle admin access
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NetSuite Integration */}
            <Card className="border-2 border-gray-200">
              <CardHeader className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
                <CardTitle className="text-xl">NetSuite Integration</CardTitle>
                <CardDescription className="text-yellow-100">
                  Cloud ERP with native API support
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Connection Methods:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>SuiteTalk REST:</strong> Modern RESTful web services</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>SuiteScript:</strong> Server-side JavaScript automation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>SuiteFlow:</strong> Workflow automation engine</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>CSV Import:</strong> Scheduled data imports</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data We Can Access:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Manufacturing WOs</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Assembly Items</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Inventory</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Custom Records</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">KPIs</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Saved Searches</span>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded">
                    <p className="text-xs text-yellow-900">
                      <strong>Setup Time:</strong> 1-2 days with Administrator role
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Microsoft Dynamics Integration */}
            <Card className="border-2 border-gray-200">
              <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                <CardTitle className="text-xl">Microsoft Dynamics Integration</CardTitle>
                <CardDescription className="text-green-100">
                  365, Business Central, and NAV
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Connection Methods:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Dataverse API:</strong> Common Data Service access</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Power Platform:</strong> Power Automate workflows</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>OData v4:</strong> REST-based data access</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Azure Logic Apps:</strong> Cloud-based integration</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data We Can Access:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Production Orders</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Item Cards</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Resources</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Capacity</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Shop Floor</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Quality</span>
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-xs text-green-900">
                      <strong>Setup Time:</strong> 1-2 days with Azure AD permissions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Integration Options */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-6 w-6 text-purple-600 mr-2" />
                Alternative Integration Methods
              </CardTitle>
              <CardDescription>
                Don't have API access? No problem. Nexus can work with what you have.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <FileText className="h-5 w-5 text-orange-600 mr-2" />
                    Excel/CSV Upload
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Drag-and-drop Excel files</li>
                    <li>• Automated data validation</li>
                    <li>• Schedule regular imports</li>
                    <li>• Map columns to Nexus fields</li>
                    <li>• Error handling & correction</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <BarChart3 className="h-5 w-5 text-blue-600 mr-2" />
                    PDF Report Extraction
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• AI reads your ERP reports</li>
                    <li>• Extracts tables and data</li>
                    <li>• Handles scanned documents</li>
                    <li>• Multi-page processing</li>
                    <li>• 99.2% accuracy rate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Database className="h-5 w-5 text-green-600 mr-2" />
                    Direct Database
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Read-only SQL access</li>
                    <li>• Scheduled data sync</li>
                    <li>• Custom query builder</li>
                    <li>• Support all major DBs</li>
                    <li>• Encrypted connections</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security & Compliance */}
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2 text-green-400" />
              Enterprise Security & Compliance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                <h4 className="font-semibold mb-1">Data Security</h4>
                <p className="text-xs text-gray-300">256-bit encryption, SOC 2 Type II certified</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                <h4 className="font-semibold mb-1">Access Control</h4>
                <p className="text-xs text-gray-300">Role-based permissions, SSO support</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                <h4 className="font-semibold mb-1">Audit Trail</h4>
                <p className="text-xs text-gray-300">Complete logging of all data access</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                <h4 className="font-semibold mb-1">Compliance</h4>
                <p className="text-xs text-gray-300">GDPR, CCPA, ISO 27001 compliant</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Connect Nexus to Your ERP?
            </h2>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Our integration team will have you up and running in days, not months. No disruption to your existing systems.
            </p>
            <a 
              href="https://aimpactnexus.ai/contact" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white text-teal-700 rounded-lg font-semibold hover:bg-teal-50 transition-all"
            >
              Schedule Integration Assessment
              <ChevronRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}