'use client'

import React from 'react'
import { Target, TrendingUp, TrendingDown, Zap, AlertCircle, Trophy, XCircle, CheckCircle } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'

export default function HitRateReport() {
  // Target achievement data - ERP vs Nexus
  const targetHitRates = [
    { department: 'Production Planning', erp: 23, nexus: 94, target: 85 },
    { department: 'Quality Targets', erp: 31, nexus: 97, target: 90 },
    { department: 'Cost Reduction Goals', erp: 18, nexus: 89, target: 75 },
    { department: 'Efficiency Metrics', erp: 27, nexus: 93, target: 80 },
    { department: 'Delivery Performance', erp: 34, nexus: 96, target: 85 },
    { department: 'Safety Milestones', erp: 41, nexus: 99, target: 95 }
  ]

  // Monthly target performance trend
  const monthlyPerformance = [
    { month: 'Jan', erpHits: 12, nexusHits: 42, targets: 45 },
    { month: 'Feb', erpHits: 15, nexusHits: 44, targets: 45 },
    { month: 'Mar', erpHits: 11, nexusHits: 43, targets: 45 },
    { month: 'Apr', erpHits: 18, nexusHits: 45, targets: 45 },
    { month: 'May', erpHits: 14, nexusHits: 44, targets: 45 },
    { month: 'Jun', erpHits: 16, nexusHits: 45, targets: 45 }
  ]

  // Missed targets impact
  const missedTargetCosts = [
    { category: 'Production Delays', erpMisses: 23, cost: 145000 },
    { category: 'Quality Issues', erpMisses: 31, cost: 289000 },
    { category: 'Overtime Costs', erpMisses: 18, cost: 67000 },
    { category: 'Rework Expenses', erpMisses: 27, cost: 156000 },
    { category: 'Customer Penalties', erpMisses: 12, cost: 98000 }
  ]

  // Success rate comparison
  const successRates = [
    { name: 'ERP Hit Rate', value: 24, fill: '#ef4444' },
    { name: 'Missed Targets', value: 76, fill: '#fca5a5' }
  ]

  const nexusRates = [
    { name: 'Nexus Hit Rate', value: 94, fill: '#10b981' },
    { name: 'Missed Targets', value: 6, fill: '#86efac' }
  ]

  const totalErpMisses = missedTargetCosts.reduce((sum, item) => sum + item.erpMisses, 0)
  const totalMissedCosts = missedTargetCosts.reduce((sum, item) => sum + item.cost, 0)
  const averageErpHitRate = targetHitRates.reduce((sum, item) => sum + item.erp, 0) / targetHitRates.length
  const averageNexusHitRate = targetHitRates.reduce((sum, item) => sum + item.nexus, 0) / targetHitRates.length

  return (
    <div className="space-y-6">
      {/* Header Alert */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center mb-3">
          <Target className="h-8 w-8 mr-3" />
          <h2 className="text-2xl font-bold">Hit Rate Analysis: Targets vs Reality</h2>
        </div>
        <p className="text-lg mb-2">
          Your ERP hits only <span className="font-bold text-2xl">{Math.round(averageErpHitRate)}%</span> of targets while Nexus achieves <span className="font-bold text-2xl">{Math.round(averageNexusHitRate)}%</span>
        </p>
        <p className="text-white/90">
          Missing targets costs you <span className="font-bold text-yellow-300">${totalMissedCosts.toLocaleString()}</span> monthly in penalties, delays, and rework
        </p>
      </div>

      {/* Target Hit Rates Comparison */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Trophy className="mr-2 text-green-600" />
          Target Achievement: ERP vs Nexus by Department
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={targetHitRates}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" angle={-45} textAnchor="end" height={120} />
            <YAxis label={{ value: 'Hit Rate %', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="target" fill="#6b7280" name="Target %" />
            <Bar dataKey="erp" fill="#ef4444" name="ERP Achievement %" />
            <Bar dataKey="nexus" fill="#10b981" name="Nexus Achievement %" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly Performance Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <TrendingUp className="mr-2 text-green-600" />
            Monthly Target Hits (Last 6 Months)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="targets" stroke="#6b7280" name="Total Targets" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="erpHits" stroke="#ef4444" name="ERP Hits" strokeWidth={2} />
              <Line type="monotone" dataKey="nexusHits" stroke="#10b981" name="Nexus Hits" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Success Rate Visualization</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-700 mb-2">ERP Performance</h4>
              <ResponsiveContainer width="100%" height={150}>
                <RadialBarChart data={successRates}>
                  <RadialBar dataKey="value" cornerRadius={4} fill="#ef4444" />
                  <Tooltip />
                </RadialBarChart>
              </ResponsiveContainer>
              <p className="text-2xl font-bold text-red-600">24%</p>
              <p className="text-xs text-gray-600">Hit Rate</p>
            </div>
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Nexus Performance</h4>
              <ResponsiveContainer width="100%" height={150}>
                <RadialBarChart data={nexusRates}>
                  <RadialBar dataKey="value" cornerRadius={4} fill="#10b981" />
                  <Tooltip />
                </RadialBarChart>
              </ResponsiveContainer>
              <p className="text-2xl font-bold text-green-600">94%</p>
              <p className="text-xs text-gray-600">Hit Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Missed Target Impact Analysis */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <XCircle className="mr-2 text-red-600" />
          Cost of Missing Targets (ERP Reality)
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Impact Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Targets Missed (Monthly)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Financial Impact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Status with ERP
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {missedTargetCosts.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <span className="text-red-600 font-bold">{item.erpMisses}</span> targets
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <span className="text-red-600 font-bold">${item.cost.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Chronic Miss
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Success Stories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
            <h4 className="font-bold text-gray-900">Nexus Precision</h4>
          </div>
          <p className="text-2xl font-bold text-green-600 mb-1">94%</p>
          <p className="text-xs text-gray-700">
            Average target achievement. Nexus predicts and prevents misses before they happen.
          </p>
        </div>

        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <XCircle className="h-6 w-6 text-red-600 mr-2" />
            <h4 className="font-bold text-gray-900">ERP Miss Rate</h4>
          </div>
          <p className="text-2xl font-bold text-red-600 mb-1">{totalErpMisses}</p>
          <p className="text-xs text-gray-700">
            Monthly missed targets. ERPs report failures after they've already cost you money.
          </p>
        </div>

        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Zap className="h-6 w-6 text-emerald-600 mr-2" />
            <h4 className="font-bold text-gray-900">Recovery Rate</h4>
          </div>
          <p className="text-2xl font-bold text-emerald-600 mb-1">+70%</p>
          <p className="text-xs text-gray-700">
            Improvement in target achievement when switching from ERP to Nexus.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-lg p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-3">Stop Missing. Start Hitting. Every Time.</h3>
        <p className="text-lg mb-4">
          Nexus turns your 24% ERP hit rate into 94% precision targeting
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/20 rounded-lg p-4">
            <div className="text-3xl font-bold">+70%</div>
            <div className="text-sm">Target Achievement</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <div className="text-3xl font-bold">${totalMissedCosts.toLocaleString()}</div>
            <div className="text-sm">Monthly Savings</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <div className="text-3xl font-bold">94%</div>
            <div className="text-sm">Nexus Hit Rate</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <div className="text-3xl font-bold">0</div>
            <div className="text-sm">Surprise Failures</div>
          </div>
        </div>
      </div>
    </div>
  )
}