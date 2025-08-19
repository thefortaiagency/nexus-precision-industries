'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X, Shield } from 'lucide-react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl shadow-2xl border border-purple-700 p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <Cookie className="h-6 w-6 text-purple-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Cookie Preferences</h3>
              </div>
              <p className="text-sm text-purple-200 mb-2">
                We use cookies to enhance your experience, analyze site traffic, and provide personalized manufacturing insights. 
                By clicking "Accept All", you consent to our use of cookies.
              </p>
              <div className="flex items-center gap-4 text-xs">
                <Link 
                  href="/privacy#cookies" 
                  className="text-purple-400 hover:text-purple-300 underline flex items-center"
                >
                  <Shield className="h-3 w-3 mr-1" />
                  Cookie Policy
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={declineCookies}
                className="px-4 py-2 text-sm font-medium text-purple-300 hover:text-white border border-purple-600 rounded-lg hover:bg-purple-800/50 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/25"
              >
                Accept All
              </button>
              <button
                onClick={() => setShowBanner(false)}
                className="ml-2 text-purple-400 hover:text-purple-300"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Add animation styles to globals.css
const animationStyles = `
@keyframes slide-up {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out forwards;
}
`