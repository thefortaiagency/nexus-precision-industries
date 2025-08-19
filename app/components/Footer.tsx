'use client'

import Link from 'next/link'
import { Brain, Zap, Shield, ArrowRight, Star } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white mt-auto">
      {/* Nexus Advertising Section */}
      <div className="border-t border-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 backdrop-blur rounded-xl p-6 border border-purple-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Nexus Branding */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <Brain className="h-8 w-8 text-purple-400 mr-2" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    NEXUS AI Platform
                  </h3>
                </div>
                <p className="text-purple-200 text-sm">
                  Powered by AImpact Nexus Intelligence
                </p>
              </div>

              {/* Key Benefits */}
              <div className="text-center">
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-sm">94% Time Reduction</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-400 mr-1" />
                    <span className="text-sm">Zero Rip & Replace</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-orange-400 mr-1" />
                    <span className="text-sm">AI-Powered Insights</span>
                  </div>
                </div>
                <p className="text-xs text-purple-300 mt-2">
                  Transform your ERP from burden to breakthrough
                </p>
              </div>

              {/* CTA */}
              <div className="text-center md:text-right">
                <a
                  href="https://aimpactnexus.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/25"
                >
                  Experience NEXUS
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
                <p className="text-xs text-purple-300 mt-2">
                  See the future of manufacturing intelligence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Links Section */}
      <div className="bg-black/30 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Company Info */}
            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-3">NEXUS PRECISION INDUSTRIES</h4>
              <p className="text-xs text-purple-200">
                AI-powered manufacturing intelligence that transforms your existing ERP into a competitive advantage.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-3">PLATFORM</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/erp-comparison" className="text-purple-200 hover:text-purple-400 transition-colors">
                    ERP Integration
                  </Link>
                </li>
                <li>
                  <Link href="/reports" className="text-purple-200 hover:text-purple-400 transition-colors">
                    AI Reports
                  </Link>
                </li>
                <li>
                  <Link href="/entry" className="text-purple-200 hover:text-purple-400 transition-colors">
                    Data Hub
                  </Link>
                </li>
                <li>
                  <a href="https://aimpactnexus.ai/contact" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-purple-400 transition-colors">
                    Schedule Demo
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-3">LEGAL</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/terms" className="text-purple-200 hover:text-purple-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-purple-200 hover:text-purple-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/privacy#cookies" className="text-purple-200 hover:text-purple-400 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <a href="mailto:support@aimpactnexus.ai" className="text-purple-200 hover:text-purple-400 transition-colors">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-purple-800 mt-6 pt-6 text-center">
            <p className="text-xs text-purple-300">
              © {new Date().getFullYear()} Nexus Precision Industries · Powered by{' '}
              <a href="https://aimpactnexus.ai" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                AImpact Nexus
              </a>
              {' '} · Built by{' '}
              <a href="https://thefortaiagency.ai" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                The Fort AI Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}