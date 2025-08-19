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

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Transform Your Data Entry Process
            </h2>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              See how Nexus can integrate with your existing ERP to eliminate manual data entry errors and provide real-time validation.
            </p>
            <a 
              href="https://aimpactnexus.ai/contact" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white text-teal-700 rounded-lg font-semibold hover:bg-teal-50 transition-all"
            >
              Schedule Live Integration Demo
              <ChevronRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}