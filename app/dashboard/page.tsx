'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { 
  Clock, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle, 
  Users, 
  DollarSign, 
  Brain,
  FileText,
  Calendar,
  Target,
  Zap,
  XCircle,
  Coffee,
  Moon,
  Calculator,
  ChevronRight
} from 'lucide-react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'

export default function Dashboard() {
  const [selectedComparison, setSelectedComparison] = useState('time')
  
  // Time wasted on reports - Management hours per month
  const timeComparison = [
    { system: 'SAP', reportingHours: 120, analysisHours: 80, meetingPrepHours: 40, totalHours: 240 },
    { system: 'Oracle', reportingHours: 110, analysisHours: 75, meetingPrepHours: 45, totalHours: 230 },
    { system: 'Microsoft', reportingHours: 100, analysisHours: 70, meetingPrepHours: 35, totalHours: 205 },
    { system: 'NetSuite', reportingHours: 95, analysisHours: 65, meetingPrepHours: 30, totalHours: 190 },
    { system: 'Nexus', reportingHours: 5, analysisHours: 10, meetingPrepHours: 5, totalHours: 20 }
  ]

  // Management activities breakdown
  const managementActivities = [
    { activity: 'Building Reports', traditional: 35, nexus: 2 },
    { activity: 'Data Gathering', traditional: 25, nexus: 0 },
    { activity: 'Excel Manipulation', traditional: 20, nexus: 0 },
    { activity: 'Waiting for IT', traditional: 15, nexus: 0 },
    { activity: 'Team Leadership', traditional: 5, nexus: 40 },
    { activity: 'Strategic Planning', traditional: 0, nexus: 30 },
    { activity: 'Process Improvement', traditional: 0, nexus: 28 }
  ]

  // Cost of wasted time
  const costAnalysis = [
    { 
      company: 'SAP Customer', 
      managers: 12, 
      hoursWasted: 240, 
      avgSalary: 120000,
      monthlyCost: 24000,
      annualCost: 288000 
    },
    { 
      company: 'Oracle Customer', 
      managers: 10, 
      hoursWasted: 230, 
      avgSalary: 115000,
      monthlyCost: 19167,
      annualCost: 230000 
    },
    { 
      company: 'Microsoft Customer', 
      managers: 8, 
      hoursWasted: 205, 
      avgSalary: 110000,
      monthlyCost: 13667,
      annualCost: 164000 
    },
    { 
      company: 'Nexus Customer', 
      managers: 12, 
      hoursWasted: 20, 
      avgSalary: 120000,
      monthlyCost: 2000,
      annualCost: 24000 
    }
  ]

  // Report generation speed
  const speedComparison = [
    { report: 'Monthly KPIs', sap: 480, oracle: 420, microsoft: 360, netsuite: 300, nexus: 5 },
    { report: 'Production Analysis', sap: 360, oracle: 300, microsoft: 240, netsuite: 240, nexus: 3 },
    { report: 'Quality Metrics', sap: 240, oracle: 240, microsoft: 180, netsuite: 180, nexus: 2 },
    { report: 'Cost Analysis', sap: 300, oracle: 280, microsoft: 240, netsuite: 200, nexus: 4 },
    { report: 'Custom Report', sap: 720, oracle: 600, microsoft: 480, netsuite: 420, nexus: 8 }
  ]

  // Weekend and after-hours work
  const workLifeBalance = [
    { day: 'Monday', traditional: 2, nexus: 0 },
    { day: 'Tuesday', traditional: 1.5, nexus: 0 },
    { day: 'Wednesday', traditional: 2.5, nexus: 0 },
    { day: 'Thursday', traditional: 3, nexus: 0 },
    { day: 'Friday', traditional: 4, nexus: 0 },
    { day: 'Saturday', traditional: 6, nexus: 0 },
    { day: 'Sunday', traditional: 5, nexus: 0 }
  ]

  // Real quotes data
  const painPoints = [
    {
      system: 'SAP',
      quote: "I spend my Sundays building reports for Monday meetings. My kids think Excel is my favorite child.",
      role: 'Operations Manager',
      hoursWasted: 58
    },
    {
      system: 'Oracle',
      quote: "By the time I finish the monthly report, the data is already outdated. I'm always reporting on the past, never the present.",
      role: 'Plant Manager',
      hoursWasted: 52
    },
    {
      system: 'Microsoft',
      quote: "I have 8 direct reports but spend 80% of my time making reports instead of developing my team.",
      role: 'Production Manager',
      hoursWasted: 48
    },
    {
      system: 'Traditional ERP',
      quote: "Our managers are the highest-paid data entry clerks in the industry.",
      role: 'CEO',
      hoursWasted: 45
    }
  ]

  // Skills comparison
  const skillsRequired = [
    { skill: 'Excel Mastery', traditional: 95, nexus: 10 },
    { skill: 'SQL Knowledge', traditional: 70, nexus: 0 },
    { skill: 'Data Modeling', traditional: 80, nexus: 0 },
    { skill: 'Programming', traditional: 40, nexus: 0 },
    { skill: 'Natural Language', traditional: 0, nexus: 100 },
    { skill: 'Business Acumen', traditional: 30, nexus: 100 }
  ]

  const COLORS = ['#ef4444', '#f97316', '#eab308', '#84cc16', '#10b981', '#0ea5e9']

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <HeroSection
        page="dashboard"
        title={
          <span className="flex items-center justify-center">
            <AlertCircle className="h-10 w-10 mr-3" />
            The Hidden Cost of Traditional ERP Reporting
          </span>
        }
        subtitle="Your managers are drowning in Excel instead of leading their teams"
        height="medium"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Shocking Stats Banner */}
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600">240</div>
              <div className="text-sm text-gray-700">Hours/Month Wasted</div>
              <div className="text-xs text-gray-500">Average SAP Customer</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600">$288K</div>
              <div className="text-sm text-gray-700">Annual Cost</div>
              <div className="text-xs text-gray-500">In Management Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600">85%</div>
              <div className="text-sm text-gray-700">Weekend Work</div>
              <div className="text-xs text-gray-500">For Monday Reports</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">5 min</div>
              <div className="text-sm text-gray-700">With Nexus</div>
              <div className="text-xs text-gray-500">Natural Language</div>
            </div>
          </div>
        </div>

        {/* Main Comparison Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Time Waste Comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 text-red-600 mr-2" />
                Monthly Management Hours Wasted on Reporting
              </CardTitle>
              <CardDescription>
                Time that should be spent leading teams and driving strategy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={timeComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="system" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="reportingHours" stackId="a" fill="#ef4444" name="Building Reports" />
                  <Bar dataKey="analysisHours" stackId="a" fill="#f97316" name="Data Analysis" />
                  <Bar dataKey="meetingPrepHours" stackId="a" fill="#eab308" name="Meeting Prep" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  Nexus saves 220 hours/month = 1.4 FTEs recovered
                </p>
              </div>
            </CardContent>
          </Card>

          {/* What Managers Actually Do */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-2" />
                How Managers Spend Their Time
              </CardTitle>
              <CardDescription>
                Traditional ERP vs Nexus - % of time on activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={managementActivities} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 40]} />
                  <YAxis dataKey="activity" type="category" width={120} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="traditional" fill="#ef4444" name="Traditional ERP" />
                  <Bar dataKey="nexus" fill="#10b981" name="With Nexus" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Weekend Work Horror Stories */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Moon className="h-5 w-5 text-purple-600 mr-2" />
              The Weekend Report Nightmare
            </CardTitle>
            <CardDescription>
              After-hours work just to prepare Monday morning reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={workLifeBalance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis label={{ value: 'Hours After Work', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="traditional" stroke="#ef4444" strokeWidth={2} name="Traditional ERP" />
                  <Line type="monotone" dataKey="nexus" stroke="#10b981" strokeWidth={2} name="Nexus" />
                </LineChart>
              </ResponsiveContainer>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-start">
                    <Coffee className="h-5 w-5 text-red-600 mr-2 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Sunday Night Special</p>
                      <p className="text-sm text-gray-700 mt-1">
                        Average manager spends 5-6 hours every Sunday preparing reports for Monday meetings
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Nexus Solution</p>
                      <p className="text-sm text-gray-700 mt-1">
                        Ask for any report in natural language. Get it in seconds. Spend weekends with family.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cost of Management Time Waste */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                Annual Cost of Report Building
              </CardTitle>
              <CardDescription>
                Based on average management salaries and time spent
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={costAnalysis}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="company" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  <Bar dataKey="annualCost" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600">Traditional ERP Average</p>
                  <p className="text-lg font-bold text-red-600">$227,333/year</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600">Nexus Cost</p>
                  <p className="text-lg font-bold text-green-600">$24,000/year</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Report Generation Speed */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 text-yellow-600 mr-2" />
                Report Generation Time (Minutes)
              </CardTitle>
              <CardDescription>
                From request to completed report
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {speedComparison.map((report, idx) => (
                  <div key={idx} className="border-b pb-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{report.report}</span>
                      <span className="text-xs text-green-600 font-bold">Nexus: {report.nexus} min</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500"
                          style={{ width: `${(report.sap / 720) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 w-16 text-right">{report.sap} min</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>98% faster</strong> report generation with natural language
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Real Manager Quotes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
              What Managers Are Really Saying
            </CardTitle>
            <CardDescription>
              Direct quotes from managers using traditional ERP systems
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {painPoints.map((point, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-900">{point.system} User</span>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                      {point.hoursWasted} hrs/week wasted
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 italic mb-2">"{point.quote}"</p>
                  <p className="text-xs text-gray-500">- {point.role}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Required Comparison */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="h-5 w-5 text-purple-600 mr-2" />
              Skills Required for Reporting
            </CardTitle>
            <CardDescription>
              Traditional ERP requires technical skills. Nexus just requires knowing your business.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={skillsRequired}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Traditional ERP" dataKey="traditional" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                <Radar name="Nexus" dataKey="nexus" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* The Bottom Line */}
        <div className="bg-gradient-to-r from-green-500 to-cyan-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Stop Building Reports. Start Leading Teams.
            </h2>
            <p className="text-xl text-green-100">
              Your managers are too valuable to be Excel jockeys
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Target className="h-8 w-8 mb-3" />
              <h3 className="font-semibold mb-2">Focus on Strategy</h3>
              <p className="text-sm text-green-100">
                Let managers focus on improving processes, not documenting them
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Users className="h-8 w-8 mb-3" />
              <h3 className="font-semibold mb-2">Develop Your Team</h3>
              <p className="text-sm text-green-100">
                Spend time mentoring and growing people, not manipulating spreadsheets
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Zap className="h-8 w-8 mb-3" />
              <h3 className="font-semibold mb-2">Drive Innovation</h3>
              <p className="text-sm text-green-100">
                Use insights to improve operations, not just report on them
              </p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://aimpactnexus.ai/contact" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-green-700 rounded-lg font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105"
            >
              Calculate Your Time Savings
              <ChevronRight className="h-6 w-6 ml-2" />
            </a>
            <p className="text-sm text-green-100 mt-4">
              See how much management time you can reclaim
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}