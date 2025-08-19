import Link from 'next/link'
import Image from 'next/image'
import { Brain } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/nexus-industrial-logo.svg" 
                alt="Nexus Precision Industries" 
                width={40} 
                height={40}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Nexus Precision Industries</h1>
                <p className="text-xs text-cyan-600">Beyond ERP - Manufacturing Intelligence</p>
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
            <Link href="/contact" className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Get Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}