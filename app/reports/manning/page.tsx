'use client'

import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation'
import HeroSection from '../../components/HeroSection'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Users, UserCheck, UserX, Clock, TrendingUp, Calendar, AlertCircle, CheckCircle, Timer, ChevronRight } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function ManningReport() {
  const [dateRange, setDateRange] = useState('7')
  const [selectedShift, setSelectedShift] = useState('all')

  // Demo data for manning analysis
  const currentWeekManning = [
    { day: 'Monday', scheduled: 45, present: 43, absent: 2, temp: 3, attendance: 95.6 },
    { day: 'Tuesday', scheduled: 45, present: 44, absent: 1, temp: 2, attendance: 97.8 },
    { day: 'Wednesday', scheduled: 45, present: 42, absent: 3, temp: 4, attendance: 93.3 },
    { day: 'Thursday', scheduled: 45, present: 41, absent: 4, temp: 5, attendance: 91.1 },
    { day: 'Friday', scheduled: 45, present: 40, absent: 5, temp: 6, attendance: 88.9 },
    { day: 'Saturday', scheduled: 30, present: 28, absent: 2, temp: 3, attendance: 93.3 },
    { day: 'Sunday', scheduled: 30, present: 27, absent: 3, temp: 4, attendance: 90.0 }
  ]

  const shiftPerformance = [
    { shift: 'First Shift', attendance: 96.5, efficiency: 92.3, overtime: 12 },
    { shift: 'Second Shift', attendance: 94.2, efficiency: 89.7, overtime: 18 },
    { shift: 'Third Shift', attendance: 91.8, efficiency: 85.4, overtime: 24 },
    { shift: 'Weekend', attendance: 92.1, efficiency: 87.2, overtime: 8 }
  ]

  const departmentManning = [
    { dept: 'Stamping', required: 12, actual: 11, gap: -1 },
    { dept: 'Welding', required: 8, actual: 8, gap: 0 },
    { dept: 'Assembly', required: 15, actual: 13, gap: -2 },
    { dept: 'Quality', required: 6, actual: 6, gap: 0 },
    { dept: 'Packaging', required: 4, actual: 4, gap: 0 }
  ]

  const absenteeismTrend = [
    { month: 'Jan', rate: 3.2, target: 3.0 },
    { month: 'Feb', rate: 3.5, target: 3.0 },
    { month: 'Mar', rate: 4.1, target: 3.0 },
    { month: 'Apr', rate: 4.8, target: 3.0 },
    { month: 'May', rate: 5.2, target: 3.0 },
    { month: 'Jun', rate: 4.9, target: 3.0 }
  ]

  const tempWorkerCost = [
    { category: 'Regular Wages', amount: 185000 },
    { category: 'Overtime', amount: 42000 },
    { category: 'Temp Workers', amount: 68000 },
    { category: 'Training', amount: 12000 }
  ]

  const keyMetrics = {
    currentAttendance: 93.2,
    targetAttendance: 96.0,
    tempWorkers: 20,
    overtimeHours: 340,
    manningGap: -3,
    turnoverRate: 8.5
  }

  const COLORS = ['#10b981', '#f59e0b', '#ef4444', '#3b82f6', '#8b5cf6']

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Background Image */}
      <HeroSection
        page="manning"
        title={
          <span className="flex items-center justify-center">
            <Users className="h-10 w-10 mr-3" />
            Manning & Attendance Report
          </span>
        }
        subtitle="Real-time workforce analytics and optimization"
        height="medium"
      />

      {/* Key Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{keyMetrics.currentAttendance}%</div>
              <p className="text-xs text-gray-500">Target: {keyMetrics.targetAttendance}%</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Temp Workers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{keyMetrics.tempWorkers}</div>
              <p className="text-xs text-gray-500">+5 from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Overtime Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{keyMetrics.overtimeHours}</div>
              <p className="text-xs text-gray-500">This week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Manning Gap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{keyMetrics.manningGap}</div>
              <p className="text-xs text-gray-500">Positions to fill</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Turnover Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{keyMetrics.turnoverRate}%</div>
              <p className="text-xs text-gray-500">Annual</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Cost Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">$307K</div>
              <p className="text-xs text-gray-500">Monthly labor cost</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Weekly Attendance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                Weekly Attendance Pattern
              </CardTitle>
              <CardDescription>
                Scheduled vs Present employees by day
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={currentWeekManning}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="scheduled" fill="#94a3b8" name="Scheduled" />
                  <Bar dataKey="present" fill="#10b981" name="Present" />
                  <Bar dataKey="temp" fill="#f59e0b" name="Temp Workers" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Absenteeism Trend */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 text-orange-600 mr-2" />
                Absenteeism Trend
              </CardTitle>
              <CardDescription>
                Monthly absence rate vs target
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={absenteeismTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="rate" stroke="#ef4444" strokeWidth={2} name="Absence Rate %" />
                  <Line type="monotone" dataKey="target" stroke="#10b981" strokeDasharray="5 5" name="Target %" />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-2 p-2 bg-red-50 rounded">
                <p className="text-xs text-red-700">
                  ⚠️ Absenteeism trending above target - consider retention initiatives
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Manning & Shift Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Department Manning Gaps */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                Department Manning Status
              </CardTitle>
              <CardDescription>
                Current staffing gaps by department
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {departmentManning.map((dept, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{dept.dept}</p>
                      <p className="text-sm text-gray-600">
                        {dept.actual} / {dept.required} positions
                      </p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                      dept.gap === 0 ? 'bg-green-100 text-green-700' :
                      dept.gap > 0 ? 'bg-blue-100 text-blue-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {dept.gap === 0 ? 'Fully Staffed' :
                       dept.gap > 0 ? `+${dept.gap} Over` :
                       `${dept.gap} Short`}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Shift Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 text-purple-600 mr-2" />
                Shift Performance Metrics
              </CardTitle>
              <CardDescription>
                Attendance, efficiency, and overtime by shift
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {shiftPerformance.map((shift, idx) => (
                  <div key={idx} className="border-b pb-3">
                    <p className="font-medium text-gray-900 mb-2">{shift.shift}</p>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <p className="text-gray-600">Attendance</p>
                        <p className="font-bold text-green-600">{shift.attendance}%</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Efficiency</p>
                        <p className="font-bold text-blue-600">{shift.efficiency}%</p>
                      </div>
                      <div>
                        <p className="text-gray-600">OT Hours</p>
                        <p className="font-bold text-orange-600">{shift.overtime}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cost Analysis */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
              Monthly Labor Cost Breakdown
            </CardTitle>
            <CardDescription>
              Impact of attendance issues on labor costs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={tempWorkerCost}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ category, amount }: any) => `${category}: $${(amount/1000).toFixed(0)}K`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="amount"
                  >
                    {tempWorkerCost.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: any) => `$${(value/1000).toFixed(0)}K`} />
                </PieChart>
              </ResponsiveContainer>
              
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Total Monthly Cost</span>
                    <span className="text-lg font-bold text-yellow-700">$307K</span>
                  </div>
                  <p className="text-xs text-gray-600">22% over budget due to temp workers & OT</p>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Cost Drivers</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Temp worker premium: +40% vs regular</li>
                    <li>• Overtime rate: 1.5x regular hours</li>
                    <li>• Training inefficiency: -15% productivity</li>
                    <li>• Quality issues from undertrained temps</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="h-5 w-5 text-purple-600 mr-2" />
              AI-Powered Manning Insights
            </CardTitle>
            <CardDescription>
              Predictive analytics and recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <div className="flex items-start">
                  <UserX className="h-5 w-5 text-red-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">High Absence Risk - Thursday</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      Historical data shows 18% higher absence rate on Thursdays. Schedule 2 additional temp workers.
                    </p>
                    <p className="text-xs text-red-600 mt-2">Confidence: 87%</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Overtime Pattern Detected</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      Assembly department averaging 24 OT hours/week. Consider adding 1 FTE to reduce costs by $8K/month.
                    </p>
                    <p className="text-xs text-yellow-600 mt-2">Confidence: 92%</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start">
                  <UserCheck className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cross-Training Opportunity</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      5 operators in Packaging can cover Stamping gaps. Implement cross-training to reduce temp needs.
                    </p>
                    <p className="text-xs text-green-600 mt-2">Savings: $12K/month</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Retention Focus: 2nd Shift</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      2nd shift turnover 3x higher than 1st. Exit interviews cite schedule flexibility as key issue.
                    </p>
                    <p className="text-xs text-blue-600 mt-2">Action: Implement flex scheduling</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Optimize Your Workforce with AI-Powered Manning Analytics
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Reduce overtime costs by 40%, improve attendance by 15%, and eliminate manning gaps with predictive workforce planning.
            </p>
            <a 
              href="https://aimpactnexus.ai/contact" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Get Your Manning Analysis
              <ChevronRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}