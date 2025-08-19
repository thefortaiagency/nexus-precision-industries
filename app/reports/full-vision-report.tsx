'use client'

import React from 'react'
import { Eye, EyeOff, Zap, Search, Lightbulb, Radar, Camera, Monitor } from 'lucide-react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar as RechartsRadar, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts'

export default function FullVisionReport() {
  // Complete visibility comparison across all operational dimensions
  const visionComparison = [
    { dimension: 'Real-Time Status', erp: 15, nexus: 100 },
    { dimension: 'Predictive Insights', erp: 5, nexus: 95 },
    { dimension: 'Cross-Process Correlation', erp: 10, nexus: 98 },
    { dimension: 'Anomaly Detection', erp: 0, nexus: 92 },
    { dimension: 'Root Cause Analysis', erp: 20, nexus: 96 },
    { dimension: 'Performance Forecasting', erp: 8, nexus: 89 },
    { dimension: 'Resource Optimization', erp: 25, nexus: 94 },
    { dimension: 'Quality Prediction', erp: 12, nexus: 91 }
  ]

  // What Nexus sees that ERPs miss
  const nexusAdvantages = [
    { 
      category: 'Micro-Downtime Events',
      erpVisibility: 0,
      nexusVisibility: 100,
      impact: 'Critical',
      monthlyCost: 45000,
      description: '2-4 minute stops that ERPs completely ignore'
    },
    {
      category: 'Quality Pre-indicators',
      erpVisibility: 15,
      nexusVisibility: 94,
      impact: 'High',
      monthlyCost: 67000,
      description: 'Patterns that predict quality issues 6 hours in advance'
    },
    {
      category: 'Operator Insights',
      erpVisibility: 5,
      nexusVisibility: 98,
      impact: 'High',
      monthlyCost: 34000,
      description: 'Real-time feedback and tribal knowledge capture'
    },
    {
      category: 'Supply Chain Ripples',
      erpVisibility: 30,
      nexusVisibility: 96,
      impact: 'Critical',
      monthlyCost: 89000,
      description: 'Upstream delays affecting downstream processes'
    },
    {
      category: 'Energy Inefficiencies',
      erpVisibility: 20,
      nexusVisibility: 93,
      impact: 'Medium',
      monthlyCost: 23000,
      description: 'Power consumption patterns and optimization opportunities'
    },
    {
      category: 'Maintenance Predictors',
      erpVisibility: 10,
      nexusVisibility: 97,
      impact: 'Critical',
      monthlyCost: 78000,
      description: 'Equipment degradation signatures before failure'
    }
  ]

  // Vision improvement over time
  const visionEvolution = [
    { week: 'Week 1', erpClarity: 25, nexusClarity: 85 },
    { week: 'Week 2', erpClarity: 23, nexusClarity: 89 },
    { week: 'Week 4', erpClarity: 27, nexusClarity: 92 },
    { week: 'Week 8', erpClarity: 24, nexusClarity: 95 },
    { week: 'Week 12', erpClarity: 26, nexusClarity: 97 },
    { week: 'Week 16', erpClarity: 25, nexusClarity: 99 }
  ]

  // Different types of visibility
  const visionCategories = [
    { name: 'Historical View', erp: 80, nexus: 100 },
    { name: 'Current State', erp: 45, nexus: 100 },
    { name: 'Predictive View', erp: 8, nexus: 95 },
    { name: 'Prescriptive Actions', erp: 2, nexus: 88 }
  ]

  const totalHiddenCost = nexusAdvantages.reduce((sum, item) => sum + item.monthlyCost, 0)
  const averageERPVisibility = visionComparison.reduce((sum, item) => sum + item.erp, 0) / visionComparison.length
  const averageNexusVisibility = visionComparison.reduce((sum, item) => sum + item.nexus, 0) / visionComparison.length

  return (
    <div className="space-y-6">
      {/* Header - Using blue theme */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center mb-3">
          <Eye className="h-8 w-8 mr-3 animate-pulse" />
          <h2 className="text-2xl font-bold">Full Vision: See Everything, Miss Nothing</h2>
        </div>
        <p className="text-lg mb-2">
          Nexus provides <span className="font-bold text-2xl">{Math.round(averageNexusVisibility)}%</span> operational visibility vs ERP's <span className="font-bold text-2xl">{Math.round(averageERPVisibility)}%</span>
        </p>
        <p className="text-white/90">
          The hidden costs of ERP blindness: <span className="font-bold text-yellow-300">${totalHiddenCost.toLocaleString()}/month</span> in missed opportunities
        </p>
      </div>

      {/* Complete Vision Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Radar className="mr-2 text-blue-600" />
            360° Operational Visibility Comparison
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={visionComparison}>
              <PolarGrid strokeDasharray="3 3" />
              <PolarAngleAxis dataKey="dimension" className="text-xs" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} className="text-xs" />
              <RechartsRadar name="ERP Vision" dataKey="erp" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} strokeWidth={2} />
              <RechartsRadar name="Nexus Vision" dataKey="nexus" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} strokeWidth={2} />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Monitor className="mr-2 text-cyan-600" />
            Vision Evolution Over Time
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={visionEvolution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="erpClarity" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} name="ERP Clarity %" />
              <Area type="monotone" dataKey="nexusClarity" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="Nexus Clarity %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Vision Categories Breakdown */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Camera className="mr-2 text-blue-600" />
          Types of Vision: Past, Present, and Future
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={visionCategories}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="erp" fill="#ef4444" name="ERP Capability %" />
            <Bar dataKey="nexus" fill="#3b82f6" name="Nexus Capability %" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Visibility Advantages */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Lightbulb className="mr-2 text-cyan-600" />
          What Nexus Sees That Your ERP Misses (And What It's Costing You)
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Visibility Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ERP Vision %
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nexus Vision %
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Monthly Cost of Blindness
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Impact Level
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {nexusAdvantages.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{item.category}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="text-red-600 font-bold text-lg">{item.erpVisibility}%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="text-blue-600 font-bold text-lg">{item.nexusVisibility}%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="text-red-600 font-bold">${item.monthlyCost.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.impact === 'Critical' ? 'bg-red-100 text-red-800' :
                      item.impact === 'High' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.impact}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Vision Benefits Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Eye className="h-6 w-6 text-blue-600 mr-2" />
            <h4 className="font-bold text-gray-900">Total Visibility</h4>
          </div>
          <p className="text-2xl font-bold text-blue-600 mb-1">99%</p>
          <p className="text-xs text-gray-700">
            Operational clarity across all dimensions
          </p>
        </div>

        <div className="bg-cyan-50 border-2 border-cyan-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Search className="h-6 w-6 text-cyan-600 mr-2" />
            <h4 className="font-bold text-gray-900">Blind Spot Elimination</h4>
          </div>
          <p className="text-2xl font-bold text-cyan-600 mb-1">94%</p>
          <p className="text-xs text-gray-700">
            Reduction in hidden operational issues
          </p>
        </div>

        <div className="bg-sky-50 border-2 border-sky-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Zap className="h-6 w-6 text-sky-600 mr-2" />
            <h4 className="font-bold text-gray-900">Response Time</h4>
          </div>
          <p className="text-2xl font-bold text-sky-600 mb-1">-87%</p>
          <p className="text-xs text-gray-700">
            Faster issue detection and resolution
          </p>
        </div>

        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Lightbulb className="h-6 w-6 text-indigo-600 mr-2" />
            <h4 className="font-bold text-gray-900">Predictive Power</h4>
          </div>
          <p className="text-2xl font-bold text-indigo-600 mb-1">95%</p>
          <p className="text-xs text-gray-700">
            Issues predicted before they occur
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-3">Open Your Eyes to Full Operational Vision</h3>
        <p className="text-lg mb-4">
          Stop operating blind. See everything your ERP hides.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/20 rounded-lg p-4">
            <div className="text-3xl font-bold">99%</div>
            <div className="text-sm">Complete Visibility</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <div className="text-3xl font-bold">${totalHiddenCost.toLocaleString()}</div>
            <div className="text-sm">Monthly Recovery</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <div className="text-3xl font-bold">-87%</div>
            <div className="text-sm">Response Time</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <div className="text-3xl font-bold">0</div>
            <div className="text-sm">Blind Spots</div>
          </div>
        </div>
      </div>
    </div>
  )
}