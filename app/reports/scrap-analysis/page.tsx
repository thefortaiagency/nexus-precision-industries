'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import Navigation from '../../components/Navigation'
import HeroSection from '../../components/HeroSection'
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
  ChevronRight,
  Briefcase,
  Activity,
  Home
} from 'lucide-react'

export default function ScrapAnalysisPage() {
  const [selectedView, setSelectedView] = useState('weekly')
  
  // Management Time "Scrap" Data - Hours wasted on non-value activities
  const managementScrap = [
    { activity: 'Building Excel Reports', hoursWasted: 320, monthlyCost: 32000, impact: 'critical' },
    { activity: 'Data Reconciliation', hoursWasted: 180, monthlyCost: 18000, impact: 'high' },
    { activity: 'Fixing Report Errors', hoursWasted: 140, monthlyCost: 14000, impact: 'high' },
    { activity: 'Waiting for IT Support', hoursWasted: 120, monthlyCost: 12000, impact: 'medium' },
    { activity: 'Manual Data Entry', hoursWasted: 100, monthlyCost: 10000, impact: 'medium' },
    { activity: 'Report Formatting', hoursWasted: 80, monthlyCost: 8000, impact: 'low' },
    { activity: 'Email Report Distribution', hoursWasted: 60, monthlyCost: 6000, impact: 'low' }
  ]

  // Working IN vs ON the Business
  const workFocus = [
    { category: 'Working IN the Business', traditional: 85, nexus: 15, color: '#ef4444' },
    { category: 'Working ON the Business', traditional: 15, nexus: 85, color: '#10b981' }
  ]

  // Weekly Management Time Breakdown
  const weeklyBreakdown = [
    { 
      day: 'Monday', 
      reportHours: 12, 
      meetingPrepHours: 4, 
      actualManagementHours: 2,
      totalHours: 18,
      afterHours: 8
    },
    { 
      day: 'Tuesday', 
      reportHours: 8, 
      meetingPrepHours: 3, 
      actualManagementHours: 5,
      totalHours: 16,
      afterHours: 4
    },
    { 
      day: 'Wednesday', 
      reportHours: 10, 
      meetingPrepHours: 2, 
      actualManagementHours: 4,
      totalHours: 16,
      afterHours: 6
    },
    { 
      day: 'Thursday', 
      reportHours: 11, 
      meetingPrepHours: 3, 
      actualManagementHours: 2,
      totalHours: 16,
      afterHours: 7
    },
    { 
      day: 'Friday', 
      reportHours: 14, 
      meetingPrepHours: 5, 
      actualManagementHours: 1,
      totalHours: 20,
      afterHours: 10
    },
    { 
      day: 'Saturday', 
      reportHours: 8, 
      meetingPrepHours: 2, 
      actualManagementHours: 0,
      totalHours: 10,
      afterHours: 10
    },
    { 
      day: 'Sunday', 
      reportHours: 7, 
      meetingPrepHours: 1, 
      actualManagementHours: 0,
      totalHours: 8,
      afterHours: 8
    }
  ]

  // Cost Analysis by Company Size
  const companyCostAnalysis = [
    { 
      size: 'Small (5 managers)', 
      traditionalHours: 1000, 
      nexusHours: 100,
      annualWaste: 108000,
      nexusSavings: 97200
    },
    { 
      size: 'Medium (15 managers)', 
      traditionalHours: 3000, 
      nexusHours: 300,
      annualWaste: 324000,
      nexusSavings: 291600
    },
    { 
      size: 'Large (50 managers)', 
      traditionalHours: 10000, 
      nexusHours: 1000,
      annualWaste: 1080000,
      nexusSavings: 972000
    },
    { 
      size: 'Enterprise (200+ managers)', 
      traditionalHours: 40000, 
      nexusHours: 4000,
      annualWaste: 4320000,
      nexusSavings: 3888000
    }
  ]

  // What Managers Could Be Doing Instead
  const betterUseOfTime = [
    { activity: 'Strategic Planning', percentage: 25, icon: Target },
    { activity: 'Team Development', percentage: 20, icon: Users },
    { activity: 'Process Improvement', percentage: 20, icon: Activity },
    { activity: 'Customer Engagement', percentage: 15, icon: Briefcase },
    { activity: 'Innovation Projects', percentage: 10, icon: Brain },
    { activity: 'Supplier Relations', percentage: 10, icon: CheckCircle }
  ]

  // Monthly Trend of Wasted Hours
  const monthlyTrend = [
    { month: 'Jan', wastedHours: 980, recoveredHours: 20 },
    { month: 'Feb', wastedHours: 960, recoveredHours: 40 },
    { month: 'Mar', wastedHours: 920, recoveredHours: 80 },
    { month: 'Apr', wastedHours: 880, recoveredHours: 120 },
    { month: 'May', wastedHours: 840, recoveredHours: 160 },
    { month: 'Jun', wastedHours: 200, recoveredHours: 800 }
  ]

  const COLORS = ['#ef4444', '#f97316', '#eab308', '#84cc16', '#10b981', '#0ea5e9', '#8b5cf6']

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <HeroSection
        page="scrapAnalysis"
        title={
          <span className="flex items-center justify-center">
            <Clock className="h-10 w-10 mr-3" />
            Management Time "Scrap" Analysis
          </span>
        }
        subtitle="Every hour building reports is an hour NOT managing your team"
        height="medium"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Shocking Stats */}
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600">1,000</div>
              <div className="text-sm text-gray-700">Hours/Month</div>
              <div className="text-xs text-gray-500">Wasted on Reports</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600">$100K</div>
              <div className="text-sm text-gray-700">Monthly Cost</div>
              <div className="text-xs text-gray-500">In Wasted Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600">85%</div>
              <div className="text-sm text-gray-700">Working IN</div>
              <div className="text-xs text-gray-500">Not ON Business</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600">53</div>
              <div className="text-sm text-gray-700">Weekend Hours</div>
              <div className="text-xs text-gray-500">Building Reports</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">90%</div>
              <div className="text-sm text-gray-700">Time Saved</div>
              <div className="text-xs text-gray-500">With Nexus</div>
            </div>
          </div>
        </div>

        {/* Management Time Scrap Categories */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
              Where Management Time Gets "Scrapped"
            </CardTitle>
            <CardDescription>
              Hours wasted on non-value activities per month (across 10 managers)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={managementScrap} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="activity" type="category" width={150} />
                <Tooltip formatter={(value: any) => `${value} hours`} />
                <Bar dataKey="hoursWasted" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-red-50 rounded-lg">
              <p className="text-sm text-red-800">
                <strong>Total Management Time Scrap:</strong> 1,000 hours/month = 6.25 FTEs doing non-productive work
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Working IN vs ON the Business */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="h-5 w-5 text-blue-600 mr-2" />
                Working IN vs ON the Business
              </CardTitle>
              <CardDescription>
                Where managers spend their time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Traditional ERP Users</h4>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Working IN (Reports, Data, Excel)</span>
                        <span className="text-sm font-bold text-red-600">85%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-4">
                        <div className="h-4 rounded-full bg-red-500" style={{ width: '85%' }} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Working ON (Strategy, Leadership)</span>
                        <span className="text-sm font-bold text-green-600">15%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-4">
                        <div className="h-4 rounded-full bg-green-500" style={{ width: '15%' }} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Nexus Users</h4>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Working IN (Reports, Data, Excel)</span>
                        <span className="text-sm font-bold text-red-600">15%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-4">
                        <div className="h-4 rounded-full bg-red-500" style={{ width: '15%' }} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Working ON (Strategy, Leadership)</span>
                        <span className="text-sm font-bold text-green-600">85%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-4">
                        <div className="h-4 rounded-full bg-green-500" style={{ width: '85%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                Typical Manager's Week
              </CardTitle>
              <CardDescription>
                Hours spent on reports vs actual management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={weeklyBreakdown}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="reportHours" stackId="a" fill="#ef4444" name="Building Reports" />
                  <Bar dataKey="meetingPrepHours" stackId="a" fill="#f97316" name="Meeting Prep" />
                  <Bar dataKey="actualManagementHours" stackId="a" fill="#10b981" name="Actual Management" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-3 p-3 bg-yellow-50 rounded-lg">
                <p className="text-xs text-yellow-800">
                  <strong>Weekend Alert:</strong> 15 hours of weekend work just for Monday reports!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What Managers Should Be Doing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 text-green-600 mr-2" />
              What Managers SHOULD Be Doing With Their Time
            </CardTitle>
            <CardDescription>
              High-value activities that actually drive business growth
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {betterUseOfTime.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-start">
                      <Icon className="h-6 w-6 text-green-600 mr-3 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{item.activity}</h4>
                        <div className="mt-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Time allocation</span>
                            <span className="font-bold text-green-600">{item.percentage}%</span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-2">
                            <div 
                              className="h-2 rounded-full bg-green-500" 
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>The Nexus Difference:</strong> Natural language requests mean managers spend time analyzing insights and making decisions, not building reports. "Show me production efficiency trends" takes 5 seconds, not 5 hours.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Cost Analysis by Company Size */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="h-5 w-5 text-green-600 mr-2" />
              Annual Cost of Management Time Scrap
            </CardTitle>
            <CardDescription>
              Based on $120K average management salary
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={companyCostAnalysis}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="size" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip formatter={(value: any) => `$${value.toLocaleString()}`} />
                <Legend />
                <Bar dataKey="annualWaste" fill="#ef4444" name="Current Waste" />
                <Bar dataKey="nexusSavings" fill="#10b981" name="Nexus Savings" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <Coffee className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-red-600">$1.2M</p>
                <p className="text-sm text-gray-700">Average Annual Waste</p>
                <p className="text-xs text-gray-500">For 50-manager company</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">90%</p>
                <p className="text-sm text-gray-700">Time Recovered</p>
                <p className="text-xs text-gray-500">With Nexus AI</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">6.25</p>
                <p className="text-sm text-gray-700">FTEs Recovered</p>
                <p className="text-xs text-gray-500">Per 50 managers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Recovery Trend */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 text-blue-600 mr-2" />
              Nexus Implementation: Time Recovery Journey
            </CardTitle>
            <CardDescription>
              Watch management time get reclaimed month by month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="wastedHours" stroke="#ef4444" strokeWidth={2} name="Hours Wasted" />
                <Line type="monotone" dataKey="recoveredHours" stroke="#10b981" strokeWidth={2} name="Hours Recovered" />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>June Achievement:</strong> 800 hours recovered = 5 FTEs now focused on strategic initiatives instead of Excel manipulation
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Real Manager Quotes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
              The Human Cost of Report Building
            </CardTitle>
            <CardDescription>
              What managers are really saying about their "scrapped" time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-sm text-gray-700 italic mb-2">
                  "I have an MBA from Wharton and I spend 80% of my time as a glorified Excel operator. This isn't what leadership looks like."
                </p>
                <p className="text-xs text-gray-500">- Operations Director, Fortune 500</p>
                <div className="mt-2 flex items-center">
                  <Moon className="h-4 w-4 text-red-600 mr-2" />
                  <span className="text-xs text-red-700">Average 12 weekend hours on reports</span>
                </div>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-sm text-gray-700 italic mb-2">
                  "My team needs coaching and development, but I'm too busy formatting pivot tables for the Monday meeting."
                </p>
                <p className="text-xs text-gray-500">- Plant Manager, Automotive</p>
                <div className="mt-2 flex items-center">
                  <Clock className="h-4 w-4 text-orange-600 mr-2" />
                  <span className="text-xs text-orange-700">240 hours/month on reports</span>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="text-sm text-gray-700 italic mb-2">
                  "I haven't had dinner with my family on a Sunday in 6 months. Always preparing Monday's reports."
                </p>
                <p className="text-xs text-gray-500">- Production Manager, Manufacturing</p>
                <div className="mt-2 flex items-center">
                  <Home className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="text-xs text-yellow-700">Every Sunday lost to Excel</span>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-sm text-gray-700 italic mb-2">
                  "We have 3 continuous improvement projects ready to go, but no time to implement because we're always reporting on the past."
                </p>
                <p className="text-xs text-gray-500">- Quality Manager, Electronics</p>
                <div className="mt-2 flex items-center">
                  <XCircle className="h-4 w-4 text-purple-600 mr-2" />
                  <span className="text-xs text-purple-700">0 hours for innovation</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Bottom Line CTA */}
        <div className="bg-gradient-to-r from-green-500 to-cyan-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Stop Scrapping Management Time. Start Leading.
            </h2>
            <p className="text-xl text-green-100">
              Your managers didn't get MBAs to become Excel technicians
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <Target className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Strategic Focus</h3>
              <p className="text-sm text-green-100">Work ON the business</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <Users className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Team Development</h3>
              <p className="text-sm text-green-100">Coach, don't crunch numbers</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <Home className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-sm text-green-100">Weekends are for family</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <Brain className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Innovation Time</h3>
              <p className="text-sm text-green-100">Create the future</p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://aimpactnexus.ai/contact" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-green-700 rounded-lg font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105"
            >
              Calculate Your Management Time Scrap
              <ChevronRight className="h-6 w-6 ml-2" />
            </a>
            <p className="text-sm text-green-100 mt-4">
              See how many FTEs you can recover from Excel hell
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}