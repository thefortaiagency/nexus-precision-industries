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
      <HeroSection 
        page="dataEntry"
        title="Seamless ERP Integration Hub"
        subtitle="Connect your existing ERP to Nexus AI intelligence. No rip and replace."
        height="large"
      />

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

        {/* ERP Integration Capabilities Section */}
        <div className="space-y-8">
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

          {/* Top 10 ERP Systems Integration Details */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Integration Support for Top 10 Manufacturing ERPs</h3>
          </div>
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

            {/* Plex Manufacturing Cloud */}
            <Card className="border-2 border-gray-200">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <CardTitle className="text-xl">Plex Manufacturing Cloud</CardTitle>
                <CardDescription className="text-purple-100">
                  Cloud-native MES and ERP platform
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Connection Methods:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Plex API:</strong> RESTful web services for all modules</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>EDI Gateway:</strong> Electronic data interchange</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Web Services:</strong> SOAP-based integration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Database Views:</strong> Read-only SQL access</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data We Can Access:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Production Tracking</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Quality Management</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Inventory Control</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Tool Management</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Scheduling</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Maintenance</span>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="text-xs text-purple-900">
                      <strong>Setup Time:</strong> 2-3 days with Plex admin access
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Epicor */}
            <Card className="border-2 border-gray-200">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                <CardTitle className="text-xl">Epicor Integration</CardTitle>
                <CardDescription className="text-indigo-100">
                  Kinetic (ERP 10/11) and Prophet 21
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Connection Methods:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>REST Services:</strong> Epicor REST API v2</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Business Objects:</strong> .NET integration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Service Connect:</strong> Workflow automation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>DMT:</strong> Data migration tool</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data We Can Access:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">Jobs</span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">Operations</span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">Materials</span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">Labor</span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">Scheduling</span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">Quality</span>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-3 rounded">
                    <p className="text-xs text-indigo-900">
                      <strong>Setup Time:</strong> 2-3 days with system admin rights
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Infor */}
            <Card className="border-2 border-gray-200">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <CardTitle className="text-xl">Infor Integration</CardTitle>
                <CardDescription className="text-orange-100">
                  CloudSuite Industrial (SyteLine) & M3
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Connection Methods:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>ION API:</strong> Infor OS platform integration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Mongoose:</strong> Application framework APIs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>BODs:</strong> Business Object Documents</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Data Lake:</strong> Analytics integration</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data We Can Access:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">Work Centers</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">Shop Orders</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">Items</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">Resources</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">Schedules</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">Metrics</span>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <p className="text-xs text-orange-900">
                      <strong>Setup Time:</strong> 3-4 days with ION desk access
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* IFS */}
            <Card className="border-2 border-gray-200">
              <CardHeader className="bg-gradient-to-r from-teal-600 to-green-600 text-white">
                <CardTitle className="text-xl">IFS Integration</CardTitle>
                <CardDescription className="text-teal-100">
                  IFS Cloud and Applications 10
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Connection Methods:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>OData Services:</strong> RESTful API access</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>IFS Connect:</strong> Message routing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>PL/SQL Access:</strong> Database APIs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Web Services:</strong> SOAP integration</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data We Can Access:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded text-xs">Shop Orders</span>
                      <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded text-xs">Operations</span>
                      <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded text-xs">Inventory Parts</span>
                      <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded text-xs">Work Centers</span>
                      <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded text-xs">Quality Control</span>
                      <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded text-xs">Maintenance</span>
                    </div>
                  </div>
                  <div className="bg-teal-50 p-3 rounded">
                    <p className="text-xs text-teal-900">
                      <strong>Setup Time:</strong> 2-4 days depending on modules
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* QAD */}
            <Card className="border-2 border-gray-200">
              <CardHeader className="bg-gradient-to-r from-gray-600 to-gray-800 text-white">
                <CardTitle className="text-xl">QAD Integration</CardTitle>
                <CardDescription className="text-gray-300">
                  Adaptive ERP and DynaSys
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Connection Methods:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>QXtend:</strong> REST API framework</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>QAD EDI:</strong> Electronic data interchange</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Progress 4GL:</strong> Database procedures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Enterprise Platform:</strong> Service-oriented architecture</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data We Can Access:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Work Orders</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Bills of Material</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Item Master</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Production</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Quality</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Inventory</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-xs text-gray-700">
                      <strong>Setup Time:</strong> 3-5 days with QAD administrator
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