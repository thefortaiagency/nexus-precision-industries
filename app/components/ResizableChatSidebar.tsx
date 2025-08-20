'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { 
  MessageCircle, Send, X, Loader2, Factory, ChevronLeft, ChevronRight, 
  GripVertical, Trash2, TrendingUp, AlertCircle, BarChart3, Brain
} from 'lucide-react'

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
  data?: any
}

// Simple function to strip markdown formatting
const stripMarkdown = (text: string) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove **bold**
    .replace(/\*(.*?)\*/g, '$1')     // Remove *italic*
    .replace(/__(.*?)__/g, '$1')   // Remove __underline__
    .replace(/_(.*?)_/g, '$1')     // Remove _italic_
    .replace(/`(.*?)`/g, '$1')     // Remove `code`
    .replace(/#{1,6}\s/g, '')      // Remove # headers
}

interface ResizableChatSidebarProps {
  isCollapsed: boolean
  onCollapsedChange: (collapsed: boolean) => void
  width: number
  onWidthChange: (width: number) => void
  isMobile?: boolean
}

export default function ResizableChatSidebar({ 
  isCollapsed,
  onCollapsedChange,
  width,
  onWidthChange,
  isMobile = false
}: ResizableChatSidebarProps) {
  const [messages, setMessages] = useState<Message[]>(() => {
    // Load messages from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nexus-chat-messages')
      if (saved) {
        try {
          const parsed = JSON.parse(saved)
          return parsed.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          }))
        } catch (e) {
          console.error('Failed to parse saved messages:', e)
        }
      }
    }
    return [
      {
        role: 'assistant',
        content: "👋 Hi! I'm your Nexus AI assistant. I help organizations save 220+ hours of management time monthly by adding intelligence to existing ERP systems.\n\nI can help you with:\n• How Nexus enhances your current ERP (SAP, Oracle, Microsoft)\n• Calculate your potential ROI and time savings\n• Our 30-day implementation process\n• Pricing and deployment options\n• See how we're 98% faster than traditional reporting\n\nWhat would you like to know about transforming your ERP with AI?",
        timestamp: new Date()
      }
    ]
  })
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const resizeRef = useRef<HTMLDivElement>(null)

  // Save messages to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('nexus-chat-messages', JSON.stringify(messages))
    }
  }, [messages])

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === '/') {
        e.preventDefault()
        onCollapsedChange(!isCollapsed)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isCollapsed, onCollapsedChange])

  // Handle resize
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsResizing(true)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing) return
    
    const newWidth = window.innerWidth - e.clientX
    if (newWidth >= 320 && newWidth <= 600) {
      onWidthChange(newWidth)
    }
  }, [isResizing, onWidthChange])

  const handleMouseUp = useCallback(() => {
    setIsResizing(false)
  }, [])

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = 'col-resize'
      document.body.style.userSelect = 'none'
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.body.style.cursor = ''
        document.body.style.userSelect = ''
      }
    }
  }, [isResizing, handleMouseMove, handleMouseUp])

  // Dynamic suggestions based on context
  const getSuggestions = (lastMessageContent?: string) => {
    const lastMessage = lastMessageContent || messages[messages.length - 1]?.content?.toLowerCase() || ''
    
    // Context-aware suggestions
    if (lastMessage.includes('erp') || lastMessage.includes('sap') || lastMessage.includes('oracle')) {
      return [
        "Which ERPs are compatible?",
        "How does integration work?",
        "Will it disrupt my current ERP?",
        "What data does Nexus extract?",
        "Can I keep my existing workflows?",
        "Show integration timeline"
      ]
    }
    
    if (lastMessage.includes('time') || lastMessage.includes('save') || lastMessage.includes('hour')) {
      return [
        "Calculate my time savings",
        "How do you achieve 220 hours saved?",
        "Show ROI calculator",
        "What tasks are automated?",
        "Compare manual vs Nexus reporting",
        "Management time breakdown"
      ]
    }
    
    if (lastMessage.includes('cost') || lastMessage.includes('price') || lastMessage.includes('roi')) {
      return [
        "What's the pricing structure?",
        "Calculate my ROI",
        "Compare costs vs new ERP",
        "What's included in pricing?",
        "Show payment options",
        "Get a custom quote"
      ]
    }
    
    if (lastMessage.includes('report') || lastMessage.includes('analytic')) {
      return [
        "What reports can Nexus generate?",
        "How fast is report generation?",
        "Can I customize reports?",
        "Show sample reports",
        "Natural language queries explained",
        "Export options available"
      ]
    }

    if (lastMessage.includes('implement') || lastMessage.includes('deploy')) {
      return [
        "How long is implementation?",
        "What's the deployment process?",
        "Do you provide training?",
        "Will there be downtime?",
        "What support is included?",
        "Implementation requirements"
      ]
    }
    
    // Default suggestions
    return [
      "How does Nexus integrate with my ERP?",
      "What's the ROI timeline?",
      "Show me pricing options",
      "How much time will managers save?",
      "Compare Nexus vs new ERP",
      "Schedule a personalized demo"
    ]
  }

  const handleSend = async (customMessage?: string) => {
    const messageToSend = customMessage || input
    if (!messageToSend.trim() || loading) return

    let userMessage: Message | null = null
    
    // Only add message if not already added (when using custom message)
    if (!customMessage) {
      userMessage = {
        role: 'user',
        content: messageToSend,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, userMessage!])
      setInput('')
    }
    
    setLoading(true)

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageToSend,
          history: messages.slice(-10)
        })
      })

      const data = await response.json()

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
        data: data.data
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      }])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    const userMessage: Message = {
      role: 'user',
      content: suggestion,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    handleSend(suggestion)
  }

  // Collapsed state - return null, button will be in main layout
  if (isCollapsed) {
    return null
  }

  return (
    <div 
      className="h-screen bg-white flex flex-col relative border-l border-gray-200 pointer-events-auto"
      style={{ width: `${width}px`, flexShrink: 0 }}
    >
      {/* Resize Handle - Hide on mobile */}
      {!isMobile && (
        <div
          ref={resizeRef}
          onMouseDown={handleMouseDown}
          className="absolute left-0 top-0 bottom-0 w-1 hover:w-2 bg-transparent hover:bg-cyan-500/50 cursor-col-resize transition-all z-10 flex items-center justify-center"
        >
          <div className="w-4 h-8 rounded bg-gray-400/50 opacity-0 hover:opacity-100 flex items-center justify-center">
            <GripVertical className="h-4 w-4 text-gray-600" />
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Brain className="w-6 h-6" />
          <div>
            <h3 className="font-bold">AI Manufacturing Intelligence</h3>
            <p className="text-xs text-cyan-100">Nexus Precision Industries</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              setMessages([{
                role: 'assistant',
                content: "👋 Hi! I'm your Nexus AI assistant. How can I help you save time and money with intelligent ERP enhancement?",
                timestamp: new Date()
              }])
              localStorage.removeItem('nexus-chat-messages')
            }}
            className="p-1.5 hover:bg-cyan-700/50 rounded-lg transition-colors"
            title="Clear conversation"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onCollapsedChange(true)}
            className="p-1.5 hover:bg-cyan-700/50 rounded-lg transition-colors"
            title="Collapse (⌘/)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollAreaRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx}>
            <div
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  msg.role === 'user'
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {msg.role === 'assistant' && (
                  <div className="flex items-center space-x-2 mb-1">
                    <Brain className="w-4 h-4 text-cyan-600" />
                    <span className="text-xs font-semibold text-cyan-600">AI Assistant</span>
                  </div>
                )}
                <div className="whitespace-pre-wrap">{stripMarkdown(msg.content)}</div>
                <div className={`text-xs mt-1 ${msg.role === 'user' ? 'text-cyan-100' : 'text-gray-700'}`}>
                  {msg.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
            
            {/* Show suggestions after assistant messages */}
            {msg.role === 'assistant' && idx === messages.length - 1 && !loading && (
              <div className="mt-3 pl-4">
                <p className="text-xs text-gray-700 mb-2">Related questions:</p>
                <div className="flex flex-wrap gap-1.5">
                  {getSuggestions(msg.content).slice(0, 4).map((suggestion, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-xs bg-white hover:bg-cyan-50 text-gray-600 hover:text-cyan-700 px-2.5 py-1.5 rounded-md transition-all border border-gray-200 hover:border-cyan-300 hover:shadow-sm"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3 flex items-center space-x-2">
              <Loader2 className="w-4 h-4 animate-spin text-cyan-600" />
              <span className="text-gray-600">Analyzing manufacturing intelligence...</span>
            </div>
          </div>
        )}
      </div>

      {/* Quick Questions - Show at bottom when it's the first message */}
      {messages.length === 1 && !loading && (
        <div className="px-4 pb-2 border-t pt-3">
          <p className="text-xs text-gray-700 mb-2">Quick questions to get started:</p>
          <div className="flex flex-wrap gap-1.5">
            {getSuggestions().map((question, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggestionClick(question)}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2.5 py-1.5 rounded-lg transition-colors border border-gray-200 hover:border-cyan-300"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="border-t p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about manufacturing intelligence..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            disabled={loading}
          />
          <button
            onClick={() => handleSend()}
            disabled={loading || !input.trim()}
            className="bg-cyan-600 text-white p-2 rounded-lg hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-gray-700 mt-2">
          Press Enter to send • Shift+Enter for new line • ⌘/ to toggle
        </p>
      </div>
    </div>
  )
}