'use client'

import React from 'react'
import { FileText, XCircle, AlertTriangle, Calculator, Copy, Download, RefreshCw, Database } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default function ExcelHellReport() {
  // The Excel nightmare statistics
  const excelChaos = [
    { 
      task: 'Copy-Paste from ERP',
      hoursPerWeek: 12,
      errorRate: 23,
      frustrationLevel: 95
    },
    { 
      task: 'VLOOKUP Maintenance',
      hoursPerWeek: 8,
      errorRate: 31,
      frustrationLevel: 88
    },
    { 
      task: 'Pivot Table Rebuilds',
      hoursPerWeek: 6,
      errorRate: 15,
      frustrationLevel: 72
    },
    { 
      task: 'Manual Calculations',
      hoursPerWeek: 9,
      errorRate: 28,
      frustrationLevel: 85
    },
    { 
      task: 'Format & Email Reports',
      hoursPerWeek: 7,
      errorRate: 12,
      frustrationLevel: 68
    }
  ]

  const spreadsheetStats = [
    { metric: 'Average Spreadsheets per Manager', value: 47 },
    { metric: 'Version Control Nightmares', value: 183 },
    { metric: 'Broken Links per Month', value: 89 },
    { metric: '"Final_Final_v3.xlsx" Files', value: 234 },
    { metric: 'Hours Lost to Crashes', value: 18 }
  ]

  const errorCascade = [
    { hour: '8am', errors: 2, description: 'Morning data import' },
    { hour: '9am', errors: 5, description: 'First VLOOKUP breaks' },
    { hour: '10am', errors: 8, description: 'Formulas cascade fail' },
    { hour: '11am', errors: 12, description: 'Pivot table corrupts' },
    { hour: '12pm', errors: 18, description: 'Lunch report deadline missed' },
    { hour: '1pm', errors: 15, description: 'Afternoon rebuild starts' },
    { hour: '2pm', errors: 11, description: 'More copy-paste errors' },
    { hour: '3pm', errors: 14, description: 'Version conflicts arise' },
    { hour: '4pm', errors: 22, description: 'End of day panic mode' },
    { hour: '5pm', errors: 28, description: 'Overtime to fix everything' }
  ]

  const departments = [
    { name: 'Production', spreadsheets: 89, errors: 234, hoursWasted: 156 },
    { name: 'Quality', spreadsheets: 67, errors: 189, hoursWasted: 124 },
    { name: 'Maintenance', spreadsheets: 45, errors: 156, hoursWasted: 98 },
    { name: 'Logistics', spreadsheets: 78, errors: 201, hoursWasted: 142 },
    { name: 'Finance', spreadsheets: 102, errors: 287, hoursWasted: 189 }
  ]

  const totalWeeklyHours = excelChaos.reduce((sum, task) => sum + task.hoursPerWeek, 0)
  const totalMonthlyHours = totalWeeklyHours * 4.33
  const costPerHour = 75
  const monthlyCost = totalMonthlyHours * costPerHour * 5 // Assuming 5 managers

  return (
    <div className="space-y-6">
      {/* Header Alert */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center mb-3">
          <XCircle className="h-8 w-8 mr-3 animate-spin" />
          <h2 className="text-2xl font-bold">CRITICAL: Excel Hell Detected</h2>
        </div>
        <p className="text-lg mb-2">
          Your team is drowning in <span className="font-bold text-2xl">{totalWeeklyHours}</span> hours of spreadsheet chaos weekly
        </p>
        <p className="text-white/90">
          That's <span className="font-bold">{departments.reduce((sum, d) => sum + d.spreadsheets, 0)}</span> spreadsheets with 
          <span className="font-bold text-yellow-300"> {departments.reduce((sum, d) => sum + d.errors, 0)} errors</span> causing daily firefighting
        </p>
      </div>

      {/* Excel Task Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Calculator className="mr-2 text-orange-600" />
            Weekly Excel Torture Sessions
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={excelChaos}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="task" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hoursPerWeek" fill="#f97316" name="Hours/Week" />
              <Bar dataKey="errorRate" fill="#ef4444" name="Error %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <AlertTriangle className="mr-2 text-red-600" />
            Error Cascade Throughout the Day
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={errorCascade}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip content={({ active, payload }) => {
                if (active && payload && payload[0]) {
                  return (
                    <div className="bg-white p-2 border rounded shadow">
                      <p className="font-bold">{payload[0].payload.hour}</p>
                      <p className="text-red-600">{payload[0].value} errors</p>
                      <p className="text-xs text-gray-600">{payload[0].payload.description}</p>
                    </div>
                  )
                }
                return null
              }} />
              <Line type="monotone" dataKey="errors" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Spreadsheet Horror Stats */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">The Spreadsheet Apocalypse by Department</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Active Spreadsheets
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Monthly Errors
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hours Wasted
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cost Impact
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {departments.map((dept, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {dept.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="text-orange-600 font-bold">{dept.spreadsheets}</span> files
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="text-red-600 font-bold">{dept.errors}</span> errors
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="text-red-600 font-bold">{dept.hoursWasted}</span> hrs/month
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="text-red-600 font-bold">${(dept.hoursWasted * costPerHour).toLocaleString()}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Horror Story Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <FileText className="h-6 w-6 text-red-600 mr-2" />
            <h4 className="font-bold text-gray-900">Version Hell</h4>
          </div>
          <p className="text-2xl font-bold text-red-600 mb-1">234</p>
          <p className="text-xs text-gray-700">
            Files named "Final_Final_v3_REAL.xlsx"
          </p>
        </div>

        <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Copy className="h-6 w-6 text-orange-600 mr-2" />
            <h4 className="font-bold text-gray-900">Copy-Paste Errors</h4>
          </div>
          <p className="text-2xl font-bold text-orange-600 mb-1">31%</p>
          <p className="text-xs text-gray-700">
            Error rate in manual data transfer
          </p>
        </div>

        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <RefreshCw className="h-6 w-6 text-yellow-600 mr-2" />
            <h4 className="font-bold text-gray-900">Daily Rebuilds</h4>
          </div>
          <p className="text-2xl font-bold text-yellow-600 mb-1">3.2</p>
          <p className="text-xs text-gray-700">
            Times per day reports are rebuilt from scratch
          </p>
        </div>

        <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Database className="h-6 w-6 text-purple-600 mr-2" />
            <h4 className="font-bold text-gray-900">Broken Links</h4>
          </div>
          <p className="text-2xl font-bold text-purple-600 mb-1">89</p>
          <p className="text-xs text-gray-700">
            External references that break monthly
          </p>
        </div>
      </div>

      {/* The Solution */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg p-6 text-white">
        <h3 className="text-2xl font-bold mb-4">Escape Excel Hell Forever</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-2">Current Excel Nightmare:</h4>
            <ul className="space-y-1 text-white/90">
              <li>• {totalWeeklyHours} hours/week in spreadsheets</li>
              <li>• 31% error rate in data</li>
              <li>• 234 version control conflicts</li>
              <li>• ${ Math.round(monthlyCost).toLocaleString()}/month wasted</li>
              <li>• 100% frustration guaranteed</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Nexus Liberation:</h4>
            <ul className="space-y-1 text-white/90">
              <li>• 0 hours in Excel</li>
              <li>• 0% manual errors</li>
              <li>• Single source of truth</li>
              <li>• Real-time automated reports</li>
              <li>• 100% sanity restored</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
            Delete Excel. Deploy Nexus. →
          </button>
        </div>
      </div>
    </div>
  )
}