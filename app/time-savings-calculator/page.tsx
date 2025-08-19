'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Calculator, 
  Clock, 
  TrendingUp, 
  DollarSign,
  Users,
  FileText,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Zap
} from 'lucide-react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'

export default function TimeSavingsCalculator() {
  // Input states
  const [employees, setEmployees] = useState(50)
  const [hoursPerWeek, setHoursPerWeek] = useState(8)
  const [avgSalary, setAvgSalary] = useState(75000)
  const [reportsPerMonth, setReportsPerMonth] = useState(12)
  const [hoursPerReport, setHoursPerReport] = useState(6)
  
  // Calculate hourly rate from salary (assuming 2080 hours per year)
  const avgHourlyRate = avgSalary / 2080

  // Calculated results
  const [results, setResults] = useState({
    weeklyTimeSaved: 0,
    monthlyTimeSaved: 0,
    yearlyTimeSaved: 0,
    weeklyCostSavings: 0,
    monthlyCostSavings: 0,
    yearlyCostSavings: 0,
    reportTimeSaved: 0,
    reportCostSavings: 0
  })

  useEffect(() => {
    // Time saved calculations (Nexus reduces manual work by 70%)
    const timeSavedPercentage = 0.70
    
    // Weekly manual work time saved
    const weeklyTimeSaved = employees * hoursPerWeek * timeSavedPercentage
    const monthlyTimeSaved = weeklyTimeSaved * 4.33 // Average weeks per month
    const yearlyTimeSaved = weeklyTimeSaved * 52
    
    // Cost savings calculations
    const weeklyCostSavings = weeklyTimeSaved * avgHourlyRate
    const monthlyCostSavings = monthlyTimeSaved * avgHourlyRate
    const yearlyCostSavings = yearlyTimeSaved * avgHourlyRate
    
    // Report-specific savings (Nexus reduces report time by 85%)
    const reportTimeSavedPercentage = 0.85
    const reportTimeSaved = reportsPerMonth * hoursPerReport * reportTimeSavedPercentage
    const reportCostSavings = reportTimeSaved * avgHourlyRate
    
    setResults({
      weeklyTimeSaved: Math.round(weeklyTimeSaved),
      monthlyTimeSaved: Math.round(monthlyTimeSaved),
      yearlyTimeSaved: Math.round(yearlyTimeSaved),
      weeklyCostSavings: Math.round(weeklyCostSavings),
      monthlyCostSavings: Math.round(monthlyCostSavings),
      yearlyCostSavings: Math.round(yearlyCostSavings),
      reportTimeSaved: Math.round(reportTimeSaved),
      reportCostSavings: Math.round(reportCostSavings)
    })
  }, [employees, hoursPerWeek, avgSalary, reportsPerMonth, hoursPerReport, avgHourlyRate])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection 
        page="calculator"
        title="Calculate Your Time & Cost Savings"
        subtitle="See exactly how much time and money Nexus can save your manufacturing operation"
        height="medium"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 px-4 sm:px-0">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 text-center">
            <div className="text-lg sm:text-2xl font-bold">70%</div>
            <div className="text-xs sm:text-sm">time saved</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 text-center">
            <div className="text-lg sm:text-2xl font-bold">85%</div>
            <div className="text-xs sm:text-sm">faster reports</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 text-center">
            <div className="text-lg sm:text-2xl font-bold">$200K+</div>
            <div className="text-xs sm:text-sm">avg savings</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 text-center">
            <div className="text-lg sm:text-2xl font-bold">30 days</div>
            <div className="text-xs sm:text-sm">to ROI</div>
          </div>
        </div>
      </HeroSection>

      {/* Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Input Panel */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Calculator className="h-8 w-8 text-cyan-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Your Current Operation</h2>
            </div>
            
            <div className="space-y-6">
              {/* Number of Employees */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="h-4 w-4 inline mr-1" />
                  Number of Manufacturing Employees
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10</span>
                  <span className="font-semibold text-cyan-600">{employees}</span>
                  <span>500+</span>
                </div>
              </div>

              {/* Hours per week spent on manual tasks */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="h-4 w-4 inline mr-1" />
                  Hours per week per employee on manual data tasks
                </label>
                <input
                  type="range"
                  min="2"
                  max="20"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>2</span>
                  <span className="font-semibold text-cyan-600">{hoursPerWeek}</span>
                  <span>20+</span>
                </div>
              </div>

              {/* Average salary */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="h-4 w-4 inline mr-1" />
                  Average annual salary (including benefits)
                </label>
                <input
                  type="range"
                  min="40000"
                  max="150000"
                  step="5000"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$40K</span>
                  <span className="font-semibold text-cyan-600">${(avgSalary/1000).toFixed(0)}K</span>
                  <span>$150K+</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Hourly equivalent: ${avgHourlyRate.toFixed(2)}/hour
                </div>
              </div>

              {/* Reports per month */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FileText className="h-4 w-4 inline mr-1" />
                  Reports generated per month
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={reportsPerMonth}
                  onChange={(e) => setReportsPerMonth(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>5</span>
                  <span className="font-semibold text-cyan-600">{reportsPerMonth}</span>
                  <span>50+</span>
                </div>
              </div>

              {/* Hours per report */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <BarChart3 className="h-4 w-4 inline mr-1" />
                  Hours spent per report (manual compilation)
                </label>
                <input
                  type="range"
                  min="2"
                  max="20"
                  value={hoursPerReport}
                  onChange={(e) => setHoursPerReport(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>2</span>
                  <span className="font-semibold text-cyan-600">{hoursPerReport}</span>
                  <span>20+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Your Savings with Nexus</h2>
            </div>

            <div className="space-y-6">
              {/* Time Savings */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-cyan-600 mr-2" />
                  Time Savings
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-600">{results.weeklyTimeSaved}h</div>
                    <div className="text-sm text-gray-600">per week</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-600">{results.monthlyTimeSaved}h</div>
                    <div className="text-sm text-gray-600">per month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-600">{results.yearlyTimeSaved}h</div>
                    <div className="text-sm text-gray-600">per year</div>
                  </div>
                </div>
              </div>

              {/* Cost Savings */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                  Cost Savings
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">${results.weeklyCostSavings.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">per week</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">${results.monthlyCostSavings.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">per month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">${results.yearlyCostSavings.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">per year</div>
                  </div>
                </div>
              </div>

              {/* Report Savings */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BarChart3 className="h-5 w-5 text-purple-600 mr-2" />
                  Report Generation Savings
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{results.reportTimeSaved}h</div>
                    <div className="text-sm text-gray-600">hours saved/month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">${results.reportCostSavings.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">cost saved/month</div>
                  </div>
                </div>
              </div>

              {/* ROI Summary */}
              <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  ROI Summary
                </h3>
                <div className="text-sm mb-2">
                  Total annual savings: <span className="font-bold text-xl">${results.yearlyCostSavings.toLocaleString()}</span>
                </div>
                <div className="text-sm">
                  With Nexus starting at $10K/year, your ROI is <span className="font-bold">{Math.round((results.yearlyCostSavings / 10000) * 100)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Calculate Section */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How We Calculate Your Savings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Zap className="h-5 w-5 text-cyan-600 mr-2" />
                Time Savings (70% reduction)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  Automated data collection eliminates manual entry
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  Real-time dashboards reduce time searching for information
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  AI-powered insights eliminate analysis time
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  Streamlined workflows reduce administrative overhead
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 text-purple-600 mr-2" />
                Report Generation (85% faster)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  Instant report generation from live data
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  Pre-built templates for common manufacturing reports
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  Automated scheduling and distribution
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  Natural language queries for custom reports
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-cyan-600 to-teal-700 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Saving Time and Money?
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            See how Nexus can transform your manufacturing operation in just 30 days
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://aimpactnexus.ai/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-cyan-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Get Your Custom Assessment
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
            <Link 
              href="/reports"
              className="px-8 py-3 bg-cyan-700 text-white rounded-lg font-semibold hover:bg-cyan-800 transition-colors border border-cyan-500 inline-flex items-center"
            >
              See Sample Reports
              <BarChart3 className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}