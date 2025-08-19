'use client'

import { useState } from 'react'
import Navigation from '../components/Navigation'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Building2, Users, Zap, Brain } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    erpSystem: '',
    message: ''
  })
  
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to an API
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        erpSystem: '',
        message: ''
      })
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get Your Personalized Demo
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            See how Nexus can transform your ERP data into actionable intelligence in just 30 days
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Demo</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    We've received your request and will contact you within 24 hours to schedule your personalized demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="erpSystem" className="block text-sm font-medium text-gray-700 mb-2">
                      Current ERP System
                    </label>
                    <select
                      id="erpSystem"
                      name="erpSystem"
                      value={formData.erpSystem}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    >
                      <option value="">Select your ERP system</option>
                      <option value="SAP">SAP</option>
                      <option value="Oracle">Oracle</option>
                      <option value="Microsoft Dynamics">Microsoft Dynamics</option>
                      <option value="NetSuite">NetSuite</option>
                      <option value="Infor">Infor</option>
                      <option value="Epicor">Epicor</option>
                      <option value="Plex">Plex</option>
                      <option value="HubSpot">HubSpot</option>
                      <option value="Other">Other</option>
                      <option value="None">No ERP System</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your manufacturing challenges
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                      placeholder="What specific insights are you looking to get from your data? What reporting challenges do you face?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-700 hover:to-teal-700 transition-all flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Request Demo
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <a href="tel:1-800-639-8724" className="flex items-center text-gray-600 hover:text-cyan-600">
                  <Phone className="h-5 w-5 mr-3 text-cyan-600" />
                  1-800-NEXUS-AI
                </a>
                <a href="mailto:demo@nexusprecision.com" className="flex items-center text-gray-600 hover:text-cyan-600">
                  <Mail className="h-5 w-5 mr-3 text-cyan-600" />
                  demo@nexusprecision.com
                </a>
                <div className="flex items-start text-gray-600">
                  <MapPin className="h-5 w-5 mr-3 text-cyan-600 mt-1" />
                  <div>
                    <p>Nexus Precision Industries</p>
                    <p>500 Innovation Drive</p>
                    <p>Manufacturing District</p>
                    <p>Detroit, MI 48201</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-3 text-cyan-600" />
                  Mon-Fri: 8:00 AM - 6:00 PM EST
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What to Expect</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Discovery Call (15 min)</p>
                    <p className="text-sm text-gray-600">Understand your ERP setup and challenges</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Live Demo (45 min)</p>
                    <p className="text-sm text-gray-600">See Nexus in action with your use cases</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">ROI Analysis</p>
                    <p className="text-sm text-gray-600">Calculate your expected savings and efficiency gains</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    4
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Implementation Plan</p>
                    <p className="text-sm text-gray-600">30-day roadmap to go live</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Nexus */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Nexus?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-gray-700">30-day implementation</span>
                </div>
                <div className="flex items-center">
                  <Brain className="h-5 w-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">AI-powered insights</span>
                </div>
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 text-blue-500 mr-3" />
                  <span className="text-gray-700">Works with any ERP</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">24/7 support included</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-600">50%</div>
              <div className="text-gray-600">Faster Reporting</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600">30 Days</div>
              <div className="text-gray-600">To Implementation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600">3x ROI</div>
              <div className="text-gray-600">Guaranteed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}