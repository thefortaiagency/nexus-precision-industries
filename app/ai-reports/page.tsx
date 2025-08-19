'use client'

import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import Link from 'next/link'
import { 
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Factory, 
  Users,
  Zap,
  FileText,
  Download,
  RefreshCw,
  ChevronRight,
  Lightbulb,
  Target,
  Shield,
  Activity
} from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'

export default function AIReportsPage() {
  const [loading, setLoading] = useState(true)
  const [selectedInsight, setSelectedInsight] = useState<string | null>(null)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1500)
  }, [])

  // Demo data for charts
  const efficiencyTrend = [
    { month: 'Jan', actual: 85, predicted: 87, optimal: 92 },
    { month: 'Feb', actual: 87, predicted: 89, optimal: 92 },
    { month: 'Mar', actual: 86, predicted: 90, optimal: 93 },
    { month: 'Apr', actual: 89, predicted: 91, optimal: 93 },
    { month: 'May', actual: 91, predicted: 93, optimal: 94 },
    { month: 'Jun', actual: 92, predicted: 94, optimal: 95 }
  ]

  const maintenancePredictions = [
    { machine: '600 Ton Press', risk: 85, daysUntil: 3, cost: 12000 },
    { machine: '400 Ton Press', risk: 65, daysUntil: 7, cost: 8000 },
    { machine: 'CNC Mill #3', risk: 45, daysUntil: 14, cost: 5000 },
    { machine: 'Lathe #2', risk: 30, daysUntil: 21, cost: 3000 },
    { machine: 'Grinder #1', risk: 20, daysUntil: 30, cost: 2000 }
  ]

  const qualityPredictions = [
    { part: 'A-123', defectRate: 2.3, trend: 'increasing', impact: 'high' },
    { part: 'B-456', defectRate: 1.1, trend: 'stable', impact: 'medium' },
    { part: 'C-789', defectRate: 0.8, trend: 'decreasing', impact: 'low' },
    { part: 'D-012', defectRate: 3.2, trend: 'increasing', impact: 'critical' }
  ]

  const costSavings = [
    { category: 'Energy', current: 45000, optimized: 38000, savings: 7000 },
    { category: 'Material', current: 120000, optimized: 105000, savings: 15000 },
    { category: 'Labor', current: 85000, optimized: 78000, savings: 7000 },
    { category: 'Maintenance', current: 35000, optimized: 28000, savings: 7000 },
    { category: 'Scrap', current: 28000, optimized: 18000, savings: 10000 }
  ]

  const insights = [
    {
      id: '1',
      type: 'warning',
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      title: 'Maintenance Alert: 600 Ton Press',
      description: 'Vibration patterns indicate bearing wear. Schedule maintenance within 72 hours to prevent unplanned downtime.',
      impact: 'Prevents 16 hours downtime ($24,000 loss)',
      confidence: 92,
      action: 'Schedule maintenance for weekend shift'
    },
    {
      id: '2',
      type: 'opportunity',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      title: 'Efficiency Optimization Opportunity',
      description: 'Shift pattern analysis shows 15% higher efficiency when operators rotate every 2 hours instead of 4.',
      impact: 'Increase daily output by 180 units',
      confidence: 87,
      action: 'Implement 2-hour rotation schedule'
    },
    {
      id: '3',
      type: 'cost',
      icon: DollarSign,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      title: 'Material Cost Reduction',
      description: 'AI identified optimal cutting patterns that reduce material waste by 12% on high-volume parts.',
      impact: 'Save $15,000/month in material costs',
      confidence: 94,
      action: 'Update CNC programs with new patterns'
    },
    {
      id: '4',
      type: 'quality',
      icon: Shield,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      title: 'Quality Prediction Alert',
      description: 'Part D-012 showing increasing defect trend. Root cause: tool wear acceleration in humid conditions.',
      impact: 'Prevent 500 defective parts',
      confidence: 89,
      action: 'Replace tooling and adjust environmental controls'
    }
  ]

  const COLORS = ['#0ea5e9', '#f97316', '#8b5cf6', '#10b981', '#f59e0b']

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Brain className="h-16 w-16 text-cyan-600 animate-pulse mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900">Generating AI Insights...</h2>
          <p className="text-gray-600 mt-2">Analyzing your manufacturing data patterns</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Background Image */}
      <HeroSection
        page="aiReports"
        title={
          <span className="flex items-center justify-center">
            <Brain className="h-10 w-10 mr-3" />
            AI-Powered Intelligence Hub
          </span>
        }
        subtitle="Predictive analytics and actionable insights from your manufacturing data"
        height="large"
      >
        <button 
          onClick={() => setLoading(true)}
          className="mt-6 px-6 py-3 bg-white/90 backdrop-blur text-purple-700 rounded-lg font-semibold hover:bg-white transition-all flex items-center mx-auto"
        >
          <RefreshCw className="h-5 w-5 mr-2" />
          Refresh Analysis
        </button>
      </HeroSection>

      {/* Demo Notice */}
      <div className="bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Lightbulb className="h-5 w-5 text-yellow-600 mr-3" />
            <p className="text-sm text-yellow-800">
              <strong>Demo Mode:</strong> This is sample data showing AI capabilities. 
              For insights from your actual ERP data, <Link href="https://aimpactnexus.ai/contact" className="underline font-semibold">schedule a personalized demo</Link>.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Insights Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Priority AI Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.map((insight) => {
              const Icon = insight.icon
              return (
                <div 
                  key={insight.id}
                  className={`${insight.bgColor} rounded-xl p-6 border-l-4 ${
                    insight.type === 'warning' ? 'border-orange-500' :
                    insight.type === 'opportunity' ? 'border-green-500' :
                    insight.type === 'cost' ? 'border-blue-500' :
                    'border-purple-500'
                  } cursor-pointer hover:shadow-lg transition-all`}
                  onClick={() => setSelectedInsight(insight.id)}
                >
                  <div className="flex items-start">
                    <Icon className={`h-8 w-8 ${insight.color} mr-4`} />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">{insight.title}</h3>
                      <p className="text-gray-700 mb-3">{insight.description}</p>
                      <div className="bg-white rounded-lg p-3 mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">Business Impact:</span>
                          <span className="text-sm font-bold text-gray-900">{insight.impact}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600">Confidence:</span>
                          <div className="flex items-center">
                            <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  insight.confidence >= 90 ? 'bg-green-500' :
                                  insight.confidence >= 80 ? 'bg-yellow-500' :
                                  'bg-orange-500'
                                }`}
                                style={{ width: `${insight.confidence}%` }}
                              />
                            </div>
                            <span className="text-sm font-bold">{insight.confidence}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-sm">
                        <Target className="h-4 w-4 mr-2 text-gray-600" />
                        <span className="font-medium text-gray-700">Recommended Action: </span>
                        <span className="ml-1 text-gray-900">{insight.action}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Predictive Analytics Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Efficiency Predictions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Activity className="h-5 w-5 text-cyan-600 mr-2" />
              Efficiency Forecast
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={efficiencyTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[80, 100]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="actual" stroke="#64748b" strokeWidth={2} name="Actual" />
                <Line type="monotone" dataKey="predicted" stroke="#0ea5e9" strokeWidth={2} strokeDasharray="5 5" name="AI Predicted" />
                <Line type="monotone" dataKey="optimal" stroke="#10b981" strokeWidth={2} strokeDasharray="3 3" name="Optimal Target" />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>AI Prediction:</strong> Efficiency will reach 94% by June with recommended optimizations
              </p>
            </div>
          </div>

          {/* Maintenance Predictions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Factory className="h-5 w-5 text-orange-600 mr-2" />
              Maintenance Risk Analysis
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={maintenancePredictions} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="machine" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="risk" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {maintenancePredictions.slice(0, 2).map((pred, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-orange-50 rounded">
                  <span className="text-sm font-medium">{pred.machine}</span>
                  <span className="text-sm text-orange-600">Action needed in {pred.daysUntil} days</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cost Optimization Analysis */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <DollarSign className="h-5 w-5 text-green-600 mr-2" />
            AI-Identified Cost Savings Opportunities
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={costSavings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="current" fill="#64748b" name="Current Cost" />
                <Bar dataKey="optimized" fill="#10b981" name="Optimized Cost" />
              </BarChart>
            </ResponsiveContainer>
            <div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Monthly Savings Potential</h4>
                {costSavings.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b">
                    <span className="text-gray-700">{item.category}</span>
                    <span className="font-semibold text-green-600">
                      ${item.savings.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-gray-900">Total Monthly Savings:</span>
                  <span className="text-2xl font-bold text-green-600">$46,000</span>
                </div>
                <p className="text-sm text-gray-600">Annual Impact: $552,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white mb-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Zap className="h-8 w-8 mr-3" />
            Top 3 AI Recommendations for Immediate Action
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <span className="font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Schedule Weekend Maintenance</h4>
              <p className="text-sm text-indigo-100">600 Ton Press showing critical wear patterns. Immediate action prevents $24K loss.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <span className="font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Implement Rotation Schedule</h4>
              <p className="text-sm text-indigo-100">2-hour operator rotations will increase efficiency by 15% starting next shift.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <span className="font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Update CNC Programs</h4>
              <p className="text-sm text-indigo-100">New cutting patterns save 12% material waste. Upload programs before Monday production.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <Brain className="h-16 w-16 text-purple-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want These Insights for Your Actual Manufacturing Data?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This demo shows just a fraction of what our AI can discover in your ERP data. 
            Get personalized predictions, cost savings opportunities, and actionable recommendations 
            specific to your operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="https://aimpactnexus.ai/contact" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all flex items-center"
            >
              <ChevronRight className="h-5 w-5 mr-2" />
              Schedule Your AI Demo
            </Link>
            <button className="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Download Sample Report
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • 30-day implementation • ROI guaranteed
          </p>
        </div>
      </div>
    </div>
  )
}