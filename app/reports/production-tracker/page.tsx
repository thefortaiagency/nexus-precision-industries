'use client'

import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation'
import HeroSection from '../../components/HeroSection'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { 
  Factory, 
  Activity, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle,
  Gauge,
  Timer,
  Package,
  Zap,
  ChevronRight,
  Play,
  Pause,
  RefreshCw
} from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default function ProductionTrackerPage() {
  const [isLive, setIsLive] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [liveMetrics, setLiveMetrics] = useState({
    totalParts: 12847,
    efficiency: 94.3,
    activeLines: 11,
    downtimeMinutes: 23
  })

  // Simulate real-time updates
  useEffect(() => {
    if (!isLive) return
    
    const interval = setInterval(() => {
      setCurrentTime(new Date())
      setLiveMetrics(prev => ({
        totalParts: prev.totalParts + Math.floor(Math.random() * 5) + 1,
        efficiency: Math.min(100, Math.max(85, prev.efficiency + (Math.random() - 0.5) * 2)),
        activeLines: prev.activeLines,
        downtimeMinutes: prev.downtimeMinutes + (Math.random() > 0.95 ? 1 : 0)
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [isLive])

  // Machine status data
  const machineStatus = [
    { id: 'PRESS-001', name: '600 Ton Press', status: 'running', parts: 2847, efficiency: 97.2, speed: 42 },
    { id: 'PRESS-002', name: '400 Ton Press', status: 'running', parts: 2156, efficiency: 94.8, speed: 38 },
    { id: 'CNC-001', name: 'CNC Mill #1', status: 'running', parts: 1892, efficiency: 92.3, speed: 15 },
    { id: 'CNC-002', name: 'CNC Mill #2', status: 'maintenance', parts: 0, efficiency: 0, speed: 0 },
    { id: 'LATHE-001', name: 'Lathe #1', status: 'running', parts: 1445, efficiency: 88.9, speed: 22 },
    { id: 'LATHE-002', name: 'Lathe #2', status: 'running', parts: 1623, efficiency: 91.7, speed: 24 },
    { id: 'WELD-001', name: 'Welding Station 1', status: 'running', parts: 892, efficiency: 95.1, speed: 8 },
    { id: 'WELD-002', name: 'Welding Station 2', status: 'idle', parts: 445, efficiency: 0, speed: 0 }
  ]

  // Hourly production trend
  const hourlyTrend = [
    { hour: '6AM', target: 450, actual: 462, efficiency: 102.7 },
    { hour: '7AM', target: 450, actual: 448, efficiency: 99.6 },
    { hour: '8AM', target: 450, actual: 471, efficiency: 104.7 },
    { hour: '9AM', target: 450, actual: 438, efficiency: 97.3 },
    { hour: '10AM', target: 450, actual: 455, efficiency: 101.1 },
    { hour: '11AM', target: 450, actual: 442, efficiency: 98.2 },
    { hour: '12PM', target: 450, actual: 425, efficiency: 94.4 },
    { hour: '1PM', target: 450, actual: 468, efficiency: 104.0 }
  ]

  // Production by department
  const departmentProduction = [
    { name: 'Stamping', value: 4500, color: '#3b82f6' },
    { name: 'Machining', value: 3800, color: '#10b981' },
    { name: 'Welding', value: 1337, color: '#f59e0b' },
    { name: 'Assembly', value: 2210, color: '#8b5cf6' },
    { name: 'Finishing', value: 1000, color: '#ef4444' }
  ]

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'running': return 'text-green-600 bg-green-50'
      case 'idle': return 'text-yellow-600 bg-yellow-50'
      case 'maintenance': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'running': return <Play className="h-4 w-4" />
      case 'idle': return <Pause className="h-4 w-4" />
      case 'maintenance': return <AlertCircle className="h-4 w-4" />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center">
                <Factory className="h-8 w-8 mr-3" />
                Real-Time Production Tracker
              </h1>
              <p className="text-blue-100 mt-2">
                Live monitoring of all production lines and equipment
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-blue-100">Current Time</p>
                <p className="text-xl font-mono">{currentTime.toLocaleTimeString()}</p>
              </div>
              <button
                onClick={() => setIsLive(!isLive)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  isLive ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 hover:bg-gray-600'
                }`}
              >
                {isLive ? (
                  <>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    LIVE
                  </>
                ) : (
                  <>
                    <Pause className="h-4 w-4" />
                    PAUSED
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Notice */}
      <div className="bg-blue-50 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-blue-600 mr-3" />
            <p className="text-sm text-blue-800">
              <strong>Demo Mode:</strong> Showing simulated real-time production data. 
              <a href="https://aimpactnexus.ai/contact" target="_blank" rel="noopener noreferrer" className="underline font-semibold ml-1">
                Schedule a demo
              </a> to connect your actual production systems.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Live Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Parts Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{liveMetrics.totalParts.toLocaleString()}</div>
              <p className="text-xs text-gray-700">+15.2% vs yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Overall Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{liveMetrics.efficiency.toFixed(1)}%</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: `${liveMetrics.efficiency}%` }} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Lines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-cyan-600">{liveMetrics.activeLines}/12</div>
              <p className="text-xs text-gray-700">1 maintenance, 0 idle</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Downtime Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{liveMetrics.downtimeMinutes} min</div>
              <p className="text-xs text-gray-700">-42% vs average</p>
            </CardContent>
          </Card>
        </div>

        {/* Machine Status Grid */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 text-blue-600 mr-2" />
                  Live Machine Status
                </CardTitle>
                <CardDescription>Real-time performance monitoring</CardDescription>
              </div>
              <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors flex items-center">
                <RefreshCw className="h-4 w-4 mr-1" />
                Refresh
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {machineStatus.map((machine) => (
                <div key={machine.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{machine.name}</h4>
                      <p className="text-xs text-gray-700">{machine.id}</p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(machine.status)}`}>
                      {getStatusIcon(machine.status)}
                      {machine.status.toUpperCase()}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Parts:</span>
                      <span className="font-medium">{machine.parts.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Efficiency:</span>
                      <span className="font-medium">{machine.efficiency}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Speed:</span>
                      <span className="font-medium">{machine.speed} ppm</span>
                    </div>
                    
                    {machine.status === 'running' && (
                      <div className="pt-2">
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-green-600 h-1.5 rounded-full animate-pulse" 
                            style={{ width: `${machine.efficiency}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Hourly Trend */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                Hourly Production Trend
              </CardTitle>
              <CardDescription>Target vs Actual performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={hourlyTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeDasharray="5 5" name="Target" />
                  <Line type="monotone" dataKey="actual" stroke="#3b82f6" strokeWidth={2} name="Actual" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Department Production */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 text-purple-600 mr-2" />
                Production by Department
              </CardTitle>
              <CardDescription>Today&apos;s output distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={departmentProduction}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }: any) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {departmentProduction.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="h-5 w-5 text-yellow-600 mr-2" />
              AI Production Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Above Target Performance</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      Lines 1-3 are exceeding targets by 4.2%. Consider increasing targets to optimize capacity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Maintenance Prediction</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      PRESS-002 showing signs of wear. Schedule maintenance in next 48 hours to prevent downtime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Connect Your Production Systems
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              See real-time data from your actual production floor with AI-powered insights and predictive analytics.
            </p>
            <a 
              href="https://aimpactnexus.ai/contact" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all"
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