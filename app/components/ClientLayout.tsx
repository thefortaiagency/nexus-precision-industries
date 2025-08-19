'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import ResizableChatSidebar from './ResizableChatSidebar'
import { createClient } from '@/lib/supabase/browser-client'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<any>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isChatCollapsed, setIsChatCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nexus-chat-collapsed')
      return saved === 'true'
    }
    return false
  })
  
  const [chatWidth, setChatWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nexus-chat-width')
      return saved ? parseInt(saved) : 380
    }
    return 380
  })

  // Check for user session
  useEffect(() => {
    const supabase = createClient()
    
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user || null)
    }
    checkUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })

    return () => subscription.unsubscribe()
  }, [])

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Save state to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('nexus-chat-collapsed', String(isChatCollapsed))
    }
  }, [isChatCollapsed])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('nexus-chat-width', String(chatWidth))
    }
  }, [chatWidth])

  // If on login page, render without layout
  if (pathname === '/login') {
    return children
  }

  return (
    <div className="min-h-screen flex relative">
      {/* Main Content Area - adjusts margin based on chat state */}
      <main 
        className="flex-1 bg-white transition-all duration-300"
        style={{ 
          marginRight: isChatCollapsed ? 0 : chatWidth,
          width: isChatCollapsed ? '100%' : `calc(100% - ${chatWidth}px)`
        }}
      >
        {children}
      </main>

      {/* AI Assistant Sidebar */}
      <div 
        className={`fixed right-0 top-0 h-screen z-50 transition-all duration-300`}
        style={{ width: isChatCollapsed ? 0 : chatWidth }}
      >
        <ResizableChatSidebar 
          isCollapsed={isChatCollapsed}
          onCollapsedChange={setIsChatCollapsed}
          width={chatWidth}
          onWidthChange={setChatWidth}
          isMobile={isMobile}
        />
      </div>

      {/* Floating Chat Button when collapsed */}
      {isChatCollapsed && (
        <button
          onClick={() => setIsChatCollapsed(false)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-600 to-teal-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          title="Open AI Assistant (⌘/)"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  )
}