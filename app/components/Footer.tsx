'use client'

import Link from 'next/link'
import { Brain } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Simple Nexus Branding */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-2">
            <Brain className="h-6 w-6 text-teal-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Nexus Precision Industries</h3>
          </div>
          <p className="text-sm text-gray-400">
            Transform your ERP data into actionable intelligence
          </p>
        </div>

        {/* Simplified Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6">
          <Link href="/reports" className="text-gray-400 hover:text-teal-400 transition-colors text-center">
            Reports
          </Link>
          <Link href="/erp-comparison" className="text-gray-400 hover:text-teal-400 transition-colors text-center">
            ERP Integration
          </Link>
          <Link href="/terms" className="text-gray-400 hover:text-teal-400 transition-colors text-center">
            Terms
          </Link>
          <Link href="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors text-center">
            Privacy
          </Link>
        </div>

        {/* Simple Copyright */}
        <div className="border-t border-gray-800 pt-4 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Nexus Precision Industries. 
            Powered by <a href="https://aimpactnexus.ai" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">AImpact Nexus</a>
          </p>
        </div>
      </div>
    </footer>
  )
}