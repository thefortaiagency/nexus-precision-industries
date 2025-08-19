'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, Send, X, Loader2, Factory, TrendingUp, AlertCircle, HelpCircle, BarChart3, AlertTriangle, Shield, ClipboardList, Activity, Users, Settings } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
  data?: any
  links?: string[]
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

// Convert markdown links to HTML
const renderContent = (content: string) => {
  // Replace markdown links [text](url) with HTML links
  const withLinks = content.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-orange-600 hover:text-orange-700 underline">$1</a>'
  )
  
  // Strip other markdown but keep the HTML links
  const stripped = withLinks
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-gray-200 px-1 rounded">$1</code>')
    .replace(/#{1,6}\s/g, '')
  
  return stripped
}

interface ProductionChatbotProps {
  isNavbar?: boolean
}

export default function ProductionChatbot({ isNavbar = false }: ProductionChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `👋 Welcome to Nexus Precision Industries!

I'm here to help you discover how Nexus transforms your existing ERP into an intelligent system without replacing it.

Ask me about:
• How we enhance SAP, Oracle, or Microsoft Dynamics
• 70% time savings on reporting
• 30-day implementation (vs 18 months for new ERP)
• ROI calculator and pricing
• Schedule your personalized demo`,
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (customMessage?: string) => {
    const messageToSend = customMessage || input
    if (!messageToSend.trim() || loading) return

    const userMessage: Message = {
      role: 'user',
      content: messageToSend,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageToSend,
          history: messages.slice(-10) // Send last 10 messages for context
        })
      })

      const data = await response.json()

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
        data: data.data,
        links: data.links
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Connection error. Please check if the service is configured correctly.',
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

  // Enhanced suggestion cards with new features
  const suggestionCards = [
    {
      icon: <BarChart3 className="w-4 h-4 md:w-5 md:h-5" />,
      title: "ERP Enhancement",
      subtitle: "Works with your system",
      query: "How does Nexus enhance my existing ERP without replacing it?",
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600"
    },
    {
      icon: <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />,
      title: "70% Time Savings",
      subtitle: "Automated reporting",
      query: "How does Nexus achieve 70% time savings on reports?",
      color: "bg-gradient-to-br from-teal-500 to-teal-600"
    },
    {
      icon: <Factory className="w-4 h-4 md:w-5 md:h-5" />,
      title: "ROI Calculator",
      subtitle: "See your savings",
      query: "Calculate my ROI with the time savings calculator",
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" />,
      title: "AI Capabilities",
      subtitle: "Predictive analytics",
      query: "What AI features does Nexus add to my ERP?",
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      icon: <Settings className="w-4 h-4 md:w-5 md:h-5" />,
      title: "30-Day Setup",
      subtitle: "Fast implementation",
      query: "How can Nexus be implemented in just 30 days?",
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: <HelpCircle className="w-4 h-4 md:w-5 md:h-5" />,
      title: "Get Pricing",
      subtitle: "Transparent costs",
      query: "What's the pricing for Nexus platform?",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    }
  ]

  // Quick questions for first-time users
  const quickQuestions = [
    "Compare Nexus vs new ERP",
    "Works with SAP/Oracle?",
    "See pricing tiers",
    "Why 30 days vs 18 months?",
    "View demo reports"
  ]

  return (
    <>
      {/* Chat Button */}
      {isNavbar ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-cyan-600 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors hover:bg-cyan-700"
        >
          <MessageCircle className="w-4 h-4 mr-1" />
          <span>AI Assistant</span>
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-cyan-600 text-white rounded-full p-3 md:p-4 shadow-lg hover:bg-cyan-700 transition-all duration-300 z-40 flex items-center space-x-2"
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
          <span className="hidden md:inline text-sm">AI Assistant</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:top-20 md:right-4 md:w-[480px] md:h-[700px] bg-white md:rounded-xl shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-600 to-teal-700 text-white p-4 md:rounded-t-xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Factory className="w-5 h-5" />
              <div>
                <h3 className="font-bold text-base">AI Assistant</h3>
                <p className="text-xs text-cyan-100">Nexus Precision</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-cyan-700/50 rounded-lg p-1.5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3 text-sm ${
                    msg.role === 'user'
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.role === 'assistant' && (
                    <div className="flex items-center space-x-2 mb-1">
                      <Factory className="w-3 h-3 text-cyan-600" />
                      <span className="text-xs font-semibold text-cyan-600">AI Assistant</span>
                    </div>
                  )}
                  <div 
                    className="whitespace-pre-wrap break-words"
                    dangerouslySetInnerHTML={{ __html: renderContent(msg.content) }}
                  />
                  <div className={`text-xs mt-1 opacity-70`}>
                    {msg.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin text-cyan-600" />
                  <span className="text-sm text-gray-600">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion Cards - Show when conversation is just starting */}
          {messages.length <= 2 && !loading && (
            <div className="px-4 pb-3 max-h-[40vh] overflow-y-auto">
              <p className="text-xs text-gray-700 mb-2 font-semibold">Popular Queries:</p>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {suggestionCards.slice(0, 4).map((card, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(card.query)}
                    className={`${card.color} text-white rounded-lg p-2.5 text-left hover:opacity-90 transition-opacity`}
                  >
                    <div className="flex items-start space-x-1.5">
                      <div className="mt-0.5 flex-shrink-0">{card.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-xs truncate">{card.title}</div>
                        <div className="text-[10px] opacity-90 truncate">{card.subtitle}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Quick Questions */}
              <p className="text-xs text-gray-700 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.slice(0, 3).map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(question)}
                    className="text-[11px] bg-gray-100 hover:bg-gray-200 text-gray-700 px-2.5 py-1 rounded-lg transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t p-4 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Nexus..."
                className="flex-1 px-3 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                disabled={loading}
              />
              <button
                onClick={() => handleSend()}
                disabled={loading || !input.trim()}
                className="bg-cyan-600 text-white px-4 py-2.5 rounded-lg hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-gray-500 mt-2 text-center">
              Powered by Nexus AI • Type your question above
            </p>
          </div>
        </div>
      )}
    </>
  )
}