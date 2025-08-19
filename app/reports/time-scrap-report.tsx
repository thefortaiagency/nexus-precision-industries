'use client'

import React from 'react'
import { Clock, TrendingDown, AlertCircle, Coffee, Calendar, FileText, Calculator, Search } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default function TimeScrapReport() {
  // Data showing management time wasted by traditional ERPs
  const timeWasteData = [
    { 
      activity: 'Building Excel Reports',
      sap: 45,
      oracle: 42,
      microsoft: 38,
      nexus: 2,
      color: '#ef4444'
    },
    { 
      activity: 'Waiting for IT Tickets',
      sap: 28,
      oracle: 25,
      microsoft: 22,
      nexus: 0,
      color: '#f97316'
    },
    { 
      activity: 'Data Reconciliation',
      sap: 35,
      oracle: 33,
      microsoft: 30,
      nexus: 0,
      color: '#eab308'
    },
    { 
      activity: 'Finding Information',
      sap: 22,
      oracle: 20,
      microsoft: 18,
      nexus: 1,
      color: '#84cc16'
    },
    { 
      activity: 'Meeting Prep',
      sap: 18,
      oracle: 16,
      microsoft: 15,
      nexus: 3,
      color: '#22c55e'
    },
    { 
      activity: 'Report Distribution',
      sap: 12,
      oracle: 11,
      microsoft: 10,
      nexus: 0,
      color: '#10b981'
    }
  ]

  const monthlyScrapHours = [
    { name: 'Production Manager', traditional: 82, nexus: 8 },
    { name: 'Quality Lead', traditional: 64, nexus: 5 },
    { name: 'Plant Manager', traditional: 96, nexus: 12 },
    { name: 'Shift Supervisor', traditional: 58, nexus: 4 },
    { name: 'Operations Director', traditional: 120, nexus: 15 }
  ]

  const pieData = [
    { name: 'Reports & Analysis', value: 35, color: '#ef4444' },
    { name: 'Data Gathering', value: 25, color: '#f97316' },
    { name: 'System Navigation', value: 20, color: '#eab308' },
    { name: 'Waiting/Delays', value: 15, color: '#6b7280' },
    { name: 'Actual Decision Making', value: 5, color: '#10b981' }
  ]

  const totalMonthlyWaste = monthlyScrapHours.reduce((sum, role) => sum + role.traditional, 0)
  const totalMonthlySavings = monthlyScrapHours.reduce((sum, role) => sum + (role.traditional - role.nexus), 0)
  const costPerHour = 75 // Average manager hourly cost
  const monthlyCostWaste = totalMonthlyWaste * costPerHour
  const yearlyCostWaste = monthlyCostWaste * 12

  return (
    <div className="space-y-6">
      {/* Header Alert */}
      <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center mb-3">
          <AlertCircle className="h-8 w-8 mr-3 animate-pulse" />
          <h2 className="text-2xl font-bold">CRITICAL: Time Scrap Alert</h2>
        </div>
        <p className="text-lg mb-2">
          Your ERP is scrapping <span className="font-bold text-2xl">{totalMonthlyWaste}</span> management hours every month
        </p>
        <p className="text-white/90">
          That's <span className="font-bold">${monthlyCostWaste.toLocaleString()}/month</span> or <span className="font-bold text-yellow-300">${yearlyCostWaste.toLocaleString()}/year</span> in wasted productivity
        </p>
      </div>

      {/* Time Waste by Activity */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Clock className="mr-2 text-red-600" />
          Management Hours Scrapped Per Month (by Activity)
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={timeWasteData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="activity" angle={-45} textAnchor="end" height={100} />
            <YAxis label={{ value: 'Hours/Month', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="sap" fill="#ef4444" name="SAP" />
            <Bar dataKey="oracle" fill="#f97316" name="Oracle" />
            <Bar dataKey="microsoft" fill="#eab308" name="Microsoft" />
            <Bar dataKey="nexus" fill="#10b981" name="Nexus" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Role-based Time Waste */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Hours Scrapped by Role</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyScrapHours} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={120} />
              <Tooltip />
              <Legend />
              <Bar dataKey="traditional" fill="#ef4444" name="Traditional ERP" />
              <Bar dataKey="nexus" fill="#10b981" name="Nexus" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Where Manager Time Actually Goes</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Coffee className="h-6 w-6 text-red-600 mr-2" />
            <h4 className="font-bold text-gray-900">Coffee Break Reality</h4>
          </div>
          <p className="text-sm text-gray-700">
            Managers spend more time building reports than taking breaks. 
            <span className="font-bold text-red-600"> 3x more time in Excel than with their teams.</span>
          </p>
        </div>

        <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Calendar className="h-6 w-6 text-orange-600 mr-2" />
            <h4 className="font-bold text-gray-900">Weekly Reality Check</h4>
          </div>
          <p className="text-sm text-gray-700">
            Every manager loses <span className="font-bold text-orange-600">2 full days per week</span> to report generation. 
            That's 104 days per year of scrapped productivity.
          </p>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <TrendingDown className="h-6 w-6 text-green-600 mr-2" />
            <h4 className="font-bold text-gray-900">Nexus Recovery Rate</h4>
          </div>
          <p className="text-sm text-gray-700">
            Switch to Nexus and recover <span className="font-bold text-green-600">91% of scrapped time</span>. 
            Turn report builders back into leaders.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl shadow-lg p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-3">Stop Scrapping Time. Start Leading.</h3>
        <p className="text-lg mb-4">
          Nexus saves {totalMonthlySavings} management hours per month across your organization
        </p>
        <div className="flex justify-center gap-4">
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <div className="text-3xl font-bold">${(totalMonthlySavings * costPerHour).toLocaleString()}</div>
            <div className="text-sm">Monthly Savings</div>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <div className="text-3xl font-bold">91%</div>
            <div className="text-sm">Time Recovered</div>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <div className="text-3xl font-bold">2 Days</div>
            <div className="text-sm">Back Per Week</div>
          </div>
        </div>
      </div>
    </div>
  )
}