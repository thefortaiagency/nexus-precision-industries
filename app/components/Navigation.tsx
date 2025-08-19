'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Brain, Menu, X } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <Image 
                src="/nexus-logo.png" 
                alt="Nexus Precision Industries" 
                width={40} 
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <div>
                <h1 className="text-sm sm:text-xl font-bold text-gray-900">Nexus Precision</h1>
                <p className="text-[10px] sm:text-xs text-cyan-600 hidden sm:block">Beyond ERP - Manufacturing Intelligence</p>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-cyan-600 transition-colors">Home</Link>
            <Link href="/erp-comparison" className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-teal-600 transition-all">
              ERP Enhancements
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-cyan-600 transition-colors">Dashboard</Link>
            <Link href="/reports" className="text-gray-600 hover:text-cyan-600 transition-colors">Reports</Link>
            <Link href="/ai-reports" className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-teal-600 transition-all flex items-center">
              <Brain className="h-4 w-4 mr-1" />
              AI Insights
            </Link>
            <Link href="/entry" className="text-gray-600 hover:text-cyan-600 transition-colors">Data Entry</Link>
            <a href="https://aimpactnexus.ai/contact" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Get Demo
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-cyan-600 transition-colors px-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/erp-comparison" 
                className="text-gray-600 hover:text-cyan-600 transition-colors px-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ERP Enhancements
              </Link>
              <Link 
                href="/dashboard" 
                className="text-gray-600 hover:text-cyan-600 transition-colors px-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                href="/reports" 
                className="text-gray-600 hover:text-cyan-600 transition-colors px-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reports
              </Link>
              <Link 
                href="/ai-reports" 
                className="text-gray-600 hover:text-cyan-600 transition-colors px-3 py-2 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Brain className="h-4 w-4 mr-2" />
                AI Insights
              </Link>
              <Link 
                href="/entry" 
                className="text-gray-600 hover:text-cyan-600 transition-colors px-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Data Entry
              </Link>
              <a 
                href="https://aimpactnexus.ai/contact"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors px-3 py-2 text-center mx-3 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}