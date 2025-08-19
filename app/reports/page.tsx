'use client'

import { useState, useEffect } from 'react'
import { Clock, TrendingDown, TrendingUp, Calendar, AlertCircle, Target, Activity, Users, Package, Trash2, BarChart3, MessageSquare, Brain, Eye, EyeOff, Factory, PieChart as PieChartIcon, Search, Wrench, FileText, DollarSign, Upload, Timer, XCircle } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import HitTrackerTable from './hit-tracker-table'
import HitTrackerAccurate from './hit-tracker-accurate'
import dynamic from 'next/dynamic'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'

// Import new clever report components
const TimeScrapReport = dynamic(() => import('./time-scrap-report'), { ssr: false })
const BlindSpotsReport = dynamic(() => import('./blind-spots-report'), { ssr: false })
const ExcelHellReport = dynamic(() => import('./excel-hell-report'), { ssr: false })
const HitRateReport = dynamic(() => import('./hit-rate-report'), { ssr: false })
const FullVisionReport = dynamic(() => import('./full-vision-report'), { ssr: false })
const NexusScrapAnalysis = dynamic(() => import('./nexus-scrap/page'), { ssr: false })
const ExecutiveDashboard = dynamic(() => import('./executive-dashboard'), { ssr: false })
const QualityPerformance = dynamic(() => import('./quality-performance'), { ssr: false })
const MachineDowntime = dynamic(() => import('./machine-downtime'), { ssr: false })
const QuarterlyReview = dynamic(() => import('./quarterly-review'), { ssr: false })
const OEEDashboard = dynamic(() => import('./oee-dashboard'), { ssr: false })
const ManningReport = dynamic(() => import('./manning/page'), { ssr: false })

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState('time-scrap')
  const [aiInsights, setAiInsights] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [visibilityData, setVisibilityData] = useState<any[]>([])
  const [efficiencyStats, setEfficiencyStats] = useState<any>(null)
  const [blindSpots, setBlindSpots] = useState<any[]>([])
  const [wastedHours, setWastedHours] = useState<any[]>([])
  const [totalWaste, setTotalWaste] = useState(0)

  // Fetch Hit Tracker Data
  const fetchHitTrackerData = async () => {
    try {
      const response = await fetch('/api/reports/hit-tracker')
      const data = await response.json()
      
      // If no data, use demo data
      if (!data.chartData || data.chartData.length === 0) {
        const demoData = [
          { date: 'Mon', shift1: 94, shift2: 91, shift3: 88, target: 90 },
          { date: 'Tue', shift1: 92, shift2: 93, shift3: 90, target: 90 },
          { date: 'Wed', shift1: 95, shift2: 89, shift3: 91, target: 90 },
          { date: 'Thu', shift1: 93, shift2: 92, shift3: 87, target: 90 },
          { date: 'Fri', shift1: 96, shift2: 94, shift3: 89, target: 90 },
          { date: 'Sat', shift1: 91, shift2: 90, shift3: 92, target: 90 },
          { date: 'Sun', shift1: 94, shift2: 88, shift3: 90, target: 90 }
        ]
        
        const demoStats = {
          weeklyAverage: 91.2,
          bestShift: { name: 'Shift 1', avg: 93.5 },
          totalHits: 145782,
          targetAchievement: 88
        }
        
        setVisibilityData(demoData)
        setEfficiencyStats(demoStats)
      } else {
        setVisibilityData(data.chartData)
        setEfficiencyStats(data.stats || null)
      }
    } catch (error) {
      console.error('Error fetching hit tracker data:', error)
      // Use demo data on error
      const demoData = [
        { date: 'Mon', shift1: 94, shift2: 91, shift3: 88, target: 90 },
        { date: 'Tue', shift1: 92, shift2: 93, shift3: 90, target: 90 },
        { date: 'Wed', shift1: 95, shift2: 89, shift3: 91, target: 90 },
        { date: 'Thu', shift1: 93, shift2: 92, shift3: 87, target: 90 },
        { date: 'Fri', shift1: 96, shift2: 94, shift3: 89, target: 90 },
        { date: 'Sat', shift1: 91, shift2: 90, shift3: 92, target: 90 },
        { date: 'Sun', shift1: 94, shift2: 88, shift3: 90, target: 90 }
      ]
      
      const demoStats = {
        weeklyAverage: 91.2,
        bestShift: { name: 'Shift 1', avg: 93.5 },
        totalHits: 145782,
        targetAchievement: 88
      }
      
      setVisibilityData(demoData)
      setEfficiencyStats(demoStats)
    }
  }

  // Fetch AI Insights
  const fetchAIInsights = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/reports/ai-insights')
      const data = await response.json()
      
      // Map icon strings to actual icon components
      const iconMap: any = {
        'AlertCircle': AlertCircle,
        'TrendingUp': TrendingUp,
        'Package': Package,
        'Users': Users
      }
      
      if (data.insights && data.insights.keyFindings) {
        const mappedInsights = {
          ...data.insights,
          keyFindings: data.insights.keyFindings.map((finding: any) => ({
            ...finding,
            icon: iconMap[finding.icon] || AlertCircle
          }))
        }
        
        setAiInsights(mappedInsights)
        setBlindSpots(data.commentPatterns || [])
        setWastedHours(data.recentComments || [])
        setTotalWaste(data.totalComments || 0)
      } else {
        // Use demo data
        const demoInsights = {
          summary: "AI analysis shows 15% time reduction opportunity in die configuration processes. Pattern recognition identified recurring issues during shift changes that could save 45 hours per month.",
          keyFindings: [
            {
              icon: AlertCircle,
              color: 'text-red-600',
              title: 'Die Configuration Delays',
              description: 'Die changes taking 23% longer than standard. Root cause: Inconsistent documentation.',
              action: 'Standardize die setup procedures across all shifts'
            },
            {
              icon: TrendingUp,
              color: 'text-green-600',
              title: 'Shift 1 Excellence',
              description: 'Shift 1 consistently outperforms by 4.2%. Their practices should be documented.',
              action: 'Document and replicate Shift 1 best practices'
            },
            {
              icon: Package,
              color: 'text-blue-600',
              title: 'Material Flow Optimization',
              description: 'AI detected bottlenecks in material staging reducing efficiency by 8%.',
              action: 'Reorganize staging area based on usage patterns'
            },
            {
              icon: Users,
              color: 'text-purple-600',
              title: 'Training Opportunity',
              description: 'New operators show 18% lower efficiency in first 30 days.',
              action: 'Implement mentorship program for new hires'
            }
          ],
          predictions: {
            efficiency: '+12%',
            cost: '$45K/month',
            timeline: '30 days'
          }
        }
        
        const demoPatterns = [
          { category: 'Die Configuration', count: 234, percentage: 38, trend: 'up' },
          { category: 'Material Issues', count: 156, percentage: 25, trend: 'stable' },
          { category: 'Machine Setup', count: 124, percentage: 20, trend: 'down' },
          { category: 'Quality Concerns', count: 100, percentage: 17, trend: 'down' }
        ]
        
        const demoComments = [
          {
            operator: 'John Smith',
            line: 3,
            partNumber: 'A-2847',
            date: new Date().toISOString(),
            comment: 'Die needs adjustment, parts running .002 over spec',
            efficiency: 82
          },
          {
            operator: 'Maria Garcia',
            line: 1,
            partNumber: 'B-9182',
            date: new Date(Date.now() - 3600000).toISOString(),
            comment: 'Material quality excellent, running smooth',
            efficiency: 96
          },
          {
            operator: 'Bob Johnson',
            line: 2,
            partNumber: 'C-4521',
            date: new Date(Date.now() - 7200000).toISOString(),
            comment: 'Minor die wear detected, scheduled for maintenance',
            efficiency: 88
          }
        ]
        
        setAiInsights(demoInsights)
        setBlindSpots(demoPatterns)
        setWastedHours(demoComments)
        setTotalWaste(614)
      }
    } catch (error) {
      console.error('Error fetching AI insights:', error)
      // Use demo data on error
      const demoInsights = {
        summary: "AI analysis shows 15% time reduction opportunity in die configuration processes. Pattern recognition identified recurring issues during shift changes that could save 45 hours per month.",
        keyFindings: [
          {
            icon: AlertCircle,
            color: 'text-red-600',
            title: 'Die Configuration Delays',
            description: 'Die changes taking 23% longer than standard. Root cause: Inconsistent documentation.',
            action: 'Standardize die setup procedures across all shifts'
          },
          {
            icon: TrendingUp,
            color: 'text-green-600',
            title: 'Shift 1 Excellence',
            description: 'Shift 1 consistently outperforms by 4.2%. Their practices should be documented.',
            action: 'Document and replicate Shift 1 best practices'
          },
          {
            icon: Package,
            color: 'text-blue-600',
            title: 'Material Flow Optimization',
            description: 'AI detected bottlenecks in material staging reducing efficiency by 8%.',
            action: 'Reorganize staging area based on usage patterns'
          },
          {
            icon: Users,
            color: 'text-purple-600',
            title: 'Training Opportunity',
            description: 'New operators show 18% lower efficiency in first 30 days.',
            action: 'Implement mentorship program for new hires'
          }
        ],
        predictions: {
          efficiency: '+12%',
          cost: '$45K/month',
          timeline: '30 days'
        }
      }
      
      const demoPatterns = [
        { category: 'Die Configuration', count: 234, percentage: 38, trend: 'up' },
        { category: 'Material Issues', count: 156, percentage: 25, trend: 'stable' },
        { category: 'Machine Setup', count: 124, percentage: 20, trend: 'down' },
        { category: 'Quality Concerns', count: 100, percentage: 17, trend: 'down' }
      ]
      
      setAiInsights(demoInsights)
      setBlindSpots(demoPatterns)
      setTotalWaste(614)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchHitTrackerData()
    fetchAIInsights()
  }, [])

  const COLORS = ['#f97316', '#10b981', '#3b82f6', '#8b5cf6']

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection 
        page="reports"
        title="Stop Managing Reports. Start Managing Production."
        subtitle="Your ERP hides 73% of actionable insights. We reveal 100% in real-time."
        height="large"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      {/* Header */}
      <div className="mb-4 sm:mb-6 md:mb-8">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">The Hidden Cost of ERP Blindness</h1>
          <p className="text-sm sm:text-base text-gray-600">Traditional ERPs waste {totalWaste > 0 ? `${totalWaste} management hours monthly` : '220 hours monthly'} on reports instead of leadership</p>
        </div>
      </div>

      {/* Report Selector - Clever ERP-bashing categories */}
      <div className="mb-4 sm:mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
          <button
            onClick={() => setSelectedReport('time-scrap')}
            className={`px-2 sm:px-3 py-3 sm:py-2.5 rounded-lg font-medium transition-colors flex flex-col items-center justify-center text-xs sm:text-sm min-h-[80px] sm:min-h-[90px] ${
              selectedReport === 'time-scrap' 
                ? 'bg-red-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Trash2 className="w-5 h-5 sm:w-6 sm:h-6 mb-1 animate-pulse" />
            <span className="text-center font-bold text-xs sm:text-sm">Time Scrap</span>
            <span className="text-[9px] sm:text-[10px] opacity-75 hidden sm:block">Hours Wasted</span>
          </button>
          <button
            onClick={() => setSelectedReport('blind-spots')}
            className={`px-2 sm:px-3 py-3 sm:py-2.5 rounded-lg font-medium transition-colors flex flex-col items-center justify-center text-xs sm:text-sm min-h-[80px] sm:min-h-[90px] ${
              selectedReport === 'blind-spots' 
                ? 'bg-yellow-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <EyeOff className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
            <span className="text-center font-bold text-xs sm:text-sm">Blind Spots</span>
            <span className="text-[9px] sm:text-[10px] opacity-75 hidden sm:block">What ERP Hides</span>
          </button>
          <button
            onClick={() => setSelectedReport('hitting-targets')}
            className={`px-2 sm:px-3 py-3 sm:py-2.5 rounded-lg font-medium transition-colors flex flex-col items-center justify-center text-xs sm:text-sm min-h-[80px] sm:min-h-[90px] ${
              selectedReport === 'hitting-targets' 
                ? 'bg-green-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Target className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
            <span className="text-center font-bold text-xs sm:text-sm">Hit Rate</span>
            <span className="text-[9px] sm:text-[10px] opacity-75 hidden sm:block">vs Missing Targets</span>
          </button>
          <button
            onClick={() => setSelectedReport('excel-hell')}
            className={`px-2 sm:px-3 py-3 sm:py-2.5 rounded-lg font-medium transition-colors flex flex-col items-center justify-center text-xs sm:text-sm min-h-[80px] sm:min-h-[90px] ${
              selectedReport === 'excel-hell' 
                ? 'bg-orange-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <XCircle className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
            <span className="text-center font-bold text-xs sm:text-sm">Excel Hell</span>
            <span className="text-[9px] sm:text-[10px] opacity-75 hidden sm:block">Manual Madness</span>
          </button>
          <button
            onClick={() => setSelectedReport('full-vision')}
            className={`px-2 sm:px-3 py-3 sm:py-2.5 rounded-lg font-medium transition-colors flex flex-col items-center justify-center text-xs sm:text-sm min-h-[80px] sm:min-h-[90px] ${
              selectedReport === 'full-vision' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Eye className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
            <span className="text-center font-bold text-xs sm:text-sm">Full Vision</span>
            <span className="text-[9px] sm:text-[10px] opacity-75 hidden sm:block">Nexus Clarity</span>
          </button>
        </div>
      </div>

      {/* Time Scrap Report - Wasted Management Hours */}
      {selectedReport === 'time-scrap' && (
        <TimeScrapReport />
      )}

      {/* Blind Spots Report - What ERPs Can't See */}
      {selectedReport === 'blind-spots' && (
        <BlindSpotsReport />
      )}

      {/* Excel Hell Report - Spreadsheet Nightmare */}
      {selectedReport === 'excel-hell' && (
        <ExcelHellReport />
      )}

      {/* Hit Rate Report - Target Achievement */}
      {selectedReport === 'hitting-targets' && (
        <HitRateReport />
      )}

      {/* Full Vision Report - Complete Visibility */}
      {selectedReport === 'full-vision' && (
        <FullVisionReport />
      )}

      {/* Hit Tracker Table Report */}
      {selectedReport === 'hit-tracker-table' && (
        <HitTrackerAccurate />
      )}

      {/* Hit Tracker Chart Report */}
      {selectedReport === 'hit-tracker' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Activity className="mr-2 text-orange-600" />
              Daily Hit Tracker - Shift Efficiency Comparison
            </h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={visibilityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[80, 100]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="shift1" stroke="#f97316" name="Shift 1" strokeWidth={2} />
                <Line type="monotone" dataKey="shift2" stroke="#10b981" name="Shift 2" strokeWidth={2} />
                <Line type="monotone" dataKey="shift3" stroke="#3b82f6" name="Shift 3" strokeWidth={2} />
                <Line type="monotone" dataKey="target" stroke="#ef4444" name="Target" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Quick Stats */}
          {efficiencyStats && (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white rounded-lg shadow p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-gray-600">Weekly Average</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{efficiencyStats.weeklyAverage}%</div>
                <div className="text-xs text-green-600">↑ 2.3% from last week</div>
              </div>
              <div className="bg-white rounded-lg shadow p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-gray-600">Best Performer</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{efficiencyStats.bestShift.name}</div>
                <div className="text-xs text-blue-600">{efficiencyStats.bestShift.avg}% average efficiency</div>
              </div>
              <div className="bg-white rounded-lg shadow p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-gray-600">Total Hits</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{efficiencyStats.totalHits.toLocaleString()}</div>
                <div className="text-xs text-gray-600">This week</div>
              </div>
              <div className="bg-white rounded-lg shadow p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-gray-600">Target Achievement</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{efficiencyStats.targetAchievement}%</div>
                <div className="text-xs text-orange-600">Room for improvement</div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* AI Insights Report */}
      {selectedReport === 'ai-insights' && (
        <div className="space-y-6">
          {loading ? (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <Brain className="h-16 w-16 text-orange-600 mx-auto mb-4 animate-pulse" />
              <p className="text-gray-600">AI analyzing 614 comments and production patterns...</p>
            </div>
          ) : aiInsights && (
            <>
              {/* AI Summary */}
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl shadow-lg p-6 text-white">
                <h2 className="text-xl font-bold mb-2 flex items-center">
                  <Brain className="mr-2" />
                  AI Intelligence Summary
                </h2>
                <p className="text-orange-100">{aiInsights.summary}</p>
              </div>

              {/* Key Findings */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {aiInsights.keyFindings.map((finding: any, index: number) => {
                  const Icon = finding.icon
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                      <div className="flex items-start">
                        <Icon className={`h-6 sm:h-8 w-6 sm:w-8 ${finding.color} mr-2 sm:mr-3 flex-shrink-0`} />
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{finding.title}</h3>
                          <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">{finding.description}</p>
                          <div className="bg-blue-50 text-blue-700 text-xs p-1.5 sm:p-2 rounded">
                            <strong>Action:</strong> {finding.action}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Predictions */}
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-900">AI Predictions & ROI</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center p-3 sm:p-4 bg-green-50 rounded-lg">
                    <TrendingUp className="h-6 sm:h-8 w-6 sm:w-8 text-green-600 mx-auto mb-1 sm:mb-2" />
                    <div className="text-xs sm:text-sm text-gray-600">Efficiency Gain</div>
                    <div className="text-base sm:text-xl font-bold text-gray-900">{aiInsights.predictions.efficiency}</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-lg">
                    <BarChart3 className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600 mx-auto mb-1 sm:mb-2" />
                    <div className="text-xs sm:text-sm text-gray-600">Cost Savings</div>
                    <div className="text-base sm:text-xl font-bold text-gray-900">{aiInsights.predictions.cost}</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-purple-50 rounded-lg">
                    <Calendar className="h-6 sm:h-8 w-6 sm:w-8 text-purple-600 mx-auto mb-1 sm:mb-2" />
                    <div className="text-xs sm:text-sm text-gray-600">Implementation</div>
                    <div className="text-base sm:text-xl font-bold text-gray-900">{aiInsights.predictions.timeline}</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Comment Analysis Report */}
      {selectedReport === 'comments' && (
        <div className="space-y-4 sm:space-y-6">
          {/* View All Comments Button */}
          <div className="flex justify-end mb-4">
            <a
              href="/reports/comments"
              className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium text-sm"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              View All Comments
            </a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Comment Categories */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h2 className="text-base sm:text-xl font-bold mb-3 sm:mb-4 flex items-center">
                <MessageSquare className="mr-1 sm:mr-2 text-orange-600 h-5 sm:h-6 w-5 sm:w-6" />
                Comment Pattern Analysis
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={blindSpots}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.category}: ${entry.percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {blindSpots.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Pattern Trends */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h2 className="text-base sm:text-xl font-bold mb-3 sm:mb-4">Issue Trends</h2>
              <div className="space-y-3 sm:space-y-4">
                {blindSpots.map((pattern, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full mr-3" 
                        style={{ backgroundColor: COLORS[index] }}
                      />
                      <div>
                        <div className="font-medium text-gray-900 text-sm sm:text-base">{pattern.category}</div>
                        <div className="text-xs sm:text-sm text-gray-600">{pattern.count} occurrences</div>
                      </div>
                    </div>
                    <div className={`flex items-center text-sm font-medium ${
                      pattern.trend === 'up' ? 'text-red-600' : 
                      pattern.trend === 'down' ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      {pattern.trend === 'up' ? '↑' : pattern.trend === 'down' ? '↓' : '→'}
                      {pattern.trend}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Comments */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <h2 className="text-base sm:text-xl font-bold mb-3 sm:mb-4">Recent Operator Comments Requiring Action</h2>
            <div className="space-y-2 sm:space-y-3">
              {wastedHours.length > 0 ? (
                wastedHours.map((comment, index) => {
                  const urgency = comment.efficiency < 85 ? 'border-red-500' : 
                                  comment.efficiency < 90 ? 'border-yellow-500' : 'border-green-500'
                  return (
                    <div key={index} className={`border-l-4 ${urgency} pl-3 sm:pl-4 py-2`}>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <div>
                          <span className="font-medium text-gray-900 text-sm sm:text-base">{comment.operator}</span>
                          <span className="text-gray-600 text-xs sm:text-sm ml-1 sm:ml-2">
                            Line {comment.line} - Part #{comment.partNumber}
                          </span>
                        </div>
                        <span className="text-xs text-gray-700 mt-1 sm:mt-0">
                          {new Date(comment.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700 mt-1 text-xs sm:text-sm">"{comment.comment}"</p>
                      <p className="text-xs text-gray-700 mt-1">Efficiency: {comment.efficiency}%</p>
                    </div>
                  )
                })
              ) : (
                <div className="text-center py-4 text-gray-700">
                  No recent comments to display
                </div>
              )}
              <div className="border-l-4 border-blue-500 pl-3 sm:pl-4 py-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">System AI</span>
                    <span className="text-gray-600 text-xs sm:text-sm ml-1 sm:ml-2">Pattern Detection</span>
                  </div>
                  <span className="text-xs text-gray-700 mt-1 sm:mt-0">Just now</span>
                </div>
                <p className="text-gray-700 mt-1 text-xs sm:text-sm">
                  "AI detected: {blindSpots[0]?.category || 'Die configuration'} issues represent {blindSpots[0]?.percentage || 38}% of comments. Recommend immediate maintenance schedule review."
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scrap Analysis - Redirects to dedicated page */}

      {/* Nexus Scrap Analysis Report */}
      {selectedReport === 'nexus-scrap' && (
        <NexusScrapAnalysis />
      )}

      {/* Executive Dashboard */}
      {selectedReport === 'executive' && (
        <ExecutiveDashboard />
      )}

      {/* Quality Performance Report */}
      {selectedReport === 'quality' && (
        <QualityPerformance />
      )}

      {/* Machine Downtime Analysis */}
      {selectedReport === 'downtime' && (
        <MachineDowntime />
      )}

      {/* Quarterly Business Review */}
      {selectedReport === 'quarterly' && (
        <QuarterlyReview />
      )}

      {/* OEE Dashboard */}
      {selectedReport === 'oee' && (
        <OEEDashboard />
      )}

      {/* Manning Report */}
      {selectedReport === 'manning' && (
        <ManningReport />
      )}
      </div>
    </div>
  )
}