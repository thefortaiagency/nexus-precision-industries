'use client'

import React from 'react'
import { EyeOff, Eye, AlertTriangle, Search, HelpCircle, Zap, TrendingDown, BarChart3 } from 'lucide-react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

export default function BlindSpotsReport() {
  // What traditional ERPs can't see
  const visibilityComparison = [
    { metric: 'Real-time Status', traditional: 15, nexus: 100 },
    { metric: 'Operator Insights', traditional: 5, nexus: 95 },
    { metric: 'Predictive Alerts', traditional: 10, nexus: 90 },
    { metric: 'Cross-shift Patterns', traditional: 20, nexus: 100 },
    { metric: 'Micro-downtimes', traditional: 0, nexus: 100 },
    { metric: 'Quality Correlations', traditional: 25, nexus: 95 }
  ]

  const hiddenProblems = [
    { 
      problem: '3-5 Minute Stops',
      occurrences: 47,
      costPerMonth: 28500,
      visibility: 'Invisible in ERP',
      impact: 'High'
    },
    { 
      problem: 'Shift Handoff Issues',
      occurrences: 31,
      costPerMonth: 18200,
      visibility: 'Never Captured',
      impact: 'High'
    },
    { 
      problem: 'Material Flow Delays',
      occurrences: 62,
      costPerMonth: 34100,
      visibility: 'Lost in Averages',
      impact: 'Critical'
    },
    { 
      problem: 'Operator Workarounds',
      occurrences: 89,
      costPerMonth: 15600,
      visibility: 'Completely Hidden',
      impact: 'Medium'
    },
    { 
      problem: 'Quality Pre-cursors',
      occurrences: 23,
      costPerMonth: 52000,
      visibility: 'Too Late to See',
      impact: 'Critical'
    }
  ]

  const erpBlindness = [
    { system: 'SAP', visibility: 27, blind: 73 },
    { system: 'Oracle', visibility: 31, blind: 69 },
    { system: 'Microsoft', visibility: 35, blind: 65 },
    { system: 'NetSuite', visibility: 29, blind: 71 },
    { system: 'Nexus', visibility: 96, blind: 4 }
  ]

  const totalHiddenCost = hiddenProblems.reduce((sum, p) => sum + p.costPerMonth, 0)
  const yearlyHiddenCost = totalHiddenCost * 12

  return (
    <div className="space-y-6">
      {/* Header Warning */}
      <div className="bg-gradient-to-r from-yellow-600 to-amber-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center mb-3">
          <EyeOff className="h-8 w-8 mr-3 animate-pulse" />
          <h2 className="text-2xl font-bold">WARNING: ERP Blind Spots Detected</h2>
        </div>
        <p className="text-lg mb-2">
          Your current system is blind to <span className="font-bold text-2xl">73%</span> of operational issues
        </p>
        <p className="text-white/90">
          Hidden problems are costing you <span className="font-bold text-yellow-300">${totalHiddenCost.toLocaleString()}/month</span> that you can't even see
        </p>
      </div>

      {/* Visibility Radar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Eye className="mr-2 text-yellow-600" />
            Visibility Comparison: Traditional ERP vs Nexus
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={visibilityComparison}>
              <PolarGrid strokeDasharray="3 3" />
              <PolarAngleAxis dataKey="metric" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="Traditional ERP" dataKey="traditional" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
              <Radar name="Nexus" dataKey="nexus" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <EyeOff className="mr-2 text-red-600" />
            System Blindness Percentage
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={erpBlindness}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="system" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="visibility" stackId="a" fill="#10b981" name="Visible %" />
              <Bar dataKey="blind" stackId="a" fill="#ef4444" name="Blind Spots %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Hidden Problems Table */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <AlertTriangle className="mr-2 text-orange-600" />
          Problems Your ERP Can't See (But Are Happening Right Now)
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Hidden Problem
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Monthly Occurrences
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Cost Impact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  ERP Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Severity
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {hiddenProblems.map((problem, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {problem.problem}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <span className="text-red-600 font-bold">{problem.occurrences}</span> times
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <span className="text-red-600 font-bold">${problem.costPerMonth.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      {problem.visibility}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      problem.impact === 'Critical' ? 'bg-red-100 text-red-800' :
                      problem.impact === 'High' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {problem.impact}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Blind Spot Examples */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <HelpCircle className="h-6 w-6 text-red-600 mr-2" />
            <h4 className="font-bold text-gray-900">The 3-Minute Mystery</h4>
          </div>
          <p className="text-sm text-gray-700">
            Your ERP ignores stops under 5 minutes. 
            <span className="font-bold text-red-600"> That's 47 hidden stops costing $28K monthly.</span>
          </p>
        </div>

        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Search className="h-6 w-6 text-yellow-600 mr-2" />
            <h4 className="font-bold text-gray-900">Lost in Translation</h4>
          </div>
          <p className="text-sm text-gray-700">
            Shift handoff problems? <span className="font-bold text-yellow-600">100% invisible</span> to your ERP. 
            Nexus captures every transition issue.
          </p>
        </div>

        <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Zap className="h-6 w-6 text-orange-600 mr-2" />
            <h4 className="font-bold text-gray-900">Predictive Blindness</h4>
          </div>
          <p className="text-sm text-gray-700">
            ERPs see problems after they happen. 
            <span className="font-bold text-orange-600"> Nexus predicts them 4 hours in advance.</span>
          </p>
        </div>
      </div>

      {/* Financial Impact */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl shadow-lg p-6 text-white">
        <h3 className="text-2xl font-bold mb-4">The True Cost of Blindness</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/20 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold">${totalHiddenCost.toLocaleString()}</div>
            <div className="text-sm">Monthly Hidden Losses</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold">${yearlyHiddenCost.toLocaleString()}</div>
            <div className="text-sm">Yearly Blind Spot Cost</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold">73%</div>
            <div className="text-sm">Issues Invisible to ERP</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold">96%</div>
            <div className="text-sm">Nexus Visibility Rate</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-3">See Everything. Fix Everything. Save Everything.</h3>
        <p className="text-lg mb-4">
          Nexus illuminates the 73% of your operation that's currently invisible
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
          Illuminate Your Blind Spots →
        </button>
      </div>
    </div>
  )
}