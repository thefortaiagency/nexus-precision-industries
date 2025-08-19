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
    <div className="min-h-screen flex">
      {/* Main Content Area */}
      <main className="flex-1 bg-gray-50">
        {children}
      </main>

      {/* AI Assistant Sidebar */}
      <ResizableChatSidebar 
        isCollapsed={isChatCollapsed}
        onCollapsedChange={() => setIsChatCollapsed(!isChatCollapsed)}
        width={chatWidth}
        onWidthChange={setChatWidth}
        isMobile={isMobile}
      />
    </div>
  )
}