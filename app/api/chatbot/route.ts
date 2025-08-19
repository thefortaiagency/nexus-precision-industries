import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { knowledgeBase } from '@/lib/knowledge-base'

// Initialize OpenAI client conditionally
const openai = process.env.OPENAI_API_KEY ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
}) : null

// Demo chatbot responses for Nexus Precision Industries (fallback)
const demoResponses: Record<string, string> = {
  // Greetings
  'hello': `Hello! I'm your Nexus AI assistant. I can help you understand how our manufacturing intelligence platform can enhance your existing ERP system. 

This is a demo version showing example capabilities. For a personalized demo with your actual data, please visit our [Contact Page](https://aimpactnexus.ai/contact) to schedule a consultation.`,

  'hi': `Hi there! Welcome to Nexus Precision Industries. I'm here to show you how we can add AI-powered intelligence to your existing ERP system.

This is a demo environment with sample data. For a real demonstration tailored to your manufacturing needs, please [contact us](https://aimpactnexus.ai/contact).`,

  // Production questions
  'efficiency': `Based on our demo data, here's a sample efficiency analysis:

📊 **Current Efficiency Metrics:**
- Overall Equipment Effectiveness (OEE): 94.3%
- Machine Utilization: 87.2%
- Quality Rate: 98.5%
- Performance Rate: 92.1%

🎯 **AI-Powered Insights:**
- Predicted 3% efficiency improvement possible through optimized changeovers
- Maintenance window optimization could save 4.2 hours/week
- Pattern detected: Tuesday shifts consistently outperform by 7%

This is demo data showing our analytics capabilities. To see insights from YOUR actual ERP data, please [schedule a demo](https://aimpactnexus.ai/contact) with our team.`,

  'production': `Here's a sample production report from our demo system:

📈 **Production Overview (Demo Data):**
- Daily Output: 2,847 units
- Target Achievement: 102.3%
- Active Production Lines: 12
- Current Uptime: 99.2%

🔮 **Predictive Analytics:**
- Next maintenance needed: Machine #7 in 72 hours
- Optimal batch size recommendation: 450 units
- Quality alert: Part #A-123 showing deviation trend

Want to see these insights with your real production data? [Contact us](/contact) for a personalized demonstration.`,

  'scrap': `Here's our demo scrap analysis showing potential savings:

💰 **Scrap Reduction Opportunities (Demo):**
- Identified Waste: $284,000 annually
- Top Issue: Die wear on 600 Ton press
- Recommended Action: Preventive die maintenance schedule
- Projected Savings: $142,000/year with AI optimization

📊 **Pattern Recognition:**
- Scrap increases 23% during shift changes
- Quality issues spike after 6+ hour runs
- Material waste highest on Mondays

This demo shows how we identify waste patterns in your ERP data. For actual analysis of your operations, please [get in touch](/contact).`,

  'maintenance': `Our AI predicts maintenance needs before failures occur:

🔧 **Predictive Maintenance Demo:**
- Machine #3: Oil change needed in 48 hours
- Machine #7: Bearing wear detected - schedule replacement
- Machine #11: Optimal for next PM cycle

⚡ **Cost Avoidance:**
- Prevented downtime: 127 hours YTD
- Avoided emergency repairs: $450,000
- Reduced maintenance costs: 31%

These are demo predictions. To implement predictive maintenance for your actual equipment, [schedule a consultation](/contact).`,

  // ERP questions
  'erp': `Nexus enhances your existing ERP system without replacing it:

✨ **How We Complement Your ERP:**
- Extract insights your ERP can't provide
- Add AI-powered predictions and recommendations
- Create custom reports in seconds, not days
- Enable natural language queries of your data

🔗 **We integrate with:**
- SAP, Oracle, Microsoft Dynamics
- NetSuite, Infor, Epicor
- Plex, HubSpot, and more

Implementation takes just 30 days, not 18 months like traditional ERP projects. [Contact us](/contact) to discuss your specific ERP integration.`,

  'cost': `Here's our transparent pricing model:

💲 **Nexus Platform Pricing (Starting at):**
- Reporting Module: $50/user/month
- AI Analytics: $75/user/month  
- Predictive Maintenance: $100/user/month
- Full Platform: $150/user/month

Compare this to:
- SAP Analytics: $150,000+/year
- Oracle BI: $120,000+/year
- Traditional consulting: $250-500/hour

📈 **ROI Guarantee:**
We guarantee 3x ROI within 6 months or your money back.

For detailed pricing based on your needs, please [schedule a demo](https://aimpactnexus.ai/contact).`,

  'demo': `I'd be happy to arrange a personalized demo for you!

🎯 **What You'll See in a Live Demo:**
- Your actual ERP data transformed into insights
- Custom reports built in real-time
- AI predictions specific to your operations
- ROI calculation for your business

📅 **Schedule Your Demo:**
Please visit our [Contact Page](https://aimpactnexus.ai/contact) or call us at 1-800-NEXUS-AI

Our team will:
1. Understand your current ERP setup
2. Show relevant use cases for your industry
3. Provide a custom implementation plan
4. Calculate your expected ROI

Looking forward to showing you the full power of Nexus!`,

  // Default response
  'default': `I can help you explore our manufacturing intelligence capabilities. Try asking about:

🏭 **Manufacturing Intelligence:**
- "Show me efficiency metrics"
- "What's our production status?"
- "Analyze scrap patterns"
- "Predict maintenance needs"

💡 **ERP Enhancement:**
- "How does Nexus work with SAP?"
- "What's the implementation time?"
- "Show me pricing options"

📊 **This is a demo system with sample data.**

For a personalized demonstration with your actual ERP data and specific use cases, please [contact our team](https://aimpactnexus.ai/contact) or call 1-800-NEXUS-AI.`
}

export async function POST(req: NextRequest) {
  let userMessage = ''
  
  try {
    const { message, history }: { message: string; history: any[] } = await req.json()
    userMessage = message

    // Check if OpenAI is available
    if (!openai) {
      console.log('OpenAI not available, using fallback responses')
      return getFallbackResponse(userMessage)
    }

    // Build system prompt with comprehensive knowledge base
    const systemPrompt = `You are the AI assistant for Nexus Precision Industries, a manufacturing intelligence platform. Your role is to help visitors understand how Nexus enhances their existing ERP systems with AI-powered insights.

KEY INFORMATION ABOUT NEXUS:
${JSON.stringify(knowledgeBase, null, 2)}

IMPORTANT GUIDELINES:
1. Always emphasize that Nexus ENHANCES existing ERP systems, doesn't replace them
2. Mention specific ERP compatibility (SAP, Oracle, Microsoft, NetSuite, etc.)
3. Highlight the 30-day implementation timeline vs 18+ months for ERP replacement
4. Reference the time savings calculator at /time-savings-calculator for ROI discussions
5. For demos/pricing, direct users to https://aimpactnexus.ai/contact
6. Be enthusiastic about the platform's capabilities but professional
7. If asked about specific technical details not in the knowledge base, acknowledge limitations and offer to connect with our technical team
8. Always end responses with a relevant call-to-action

TONE: Professional, knowledgeable, helpful, and enthusiastic about manufacturing intelligence solutions.

Keep responses concise but informative. Use emojis sparingly for visual appeal.`

    // Build conversation history for context
    const messages = [
      { role: 'system', content: systemPrompt },
      // Include recent history for context (last 5 messages)
      ...history.slice(-5).map((msg: any) => ({
        role: msg.role === 'assistant' ? 'assistant' : 'user',
        content: msg.content
      })),
      { role: 'user', content: userMessage }
    ]

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages as any,
      max_tokens: 500,
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content || 'I apologize, but I encountered an issue generating a response. Please try again or [contact our team](https://aimpactnexus.ai/contact) for assistance.'

    return NextResponse.json({
      message: response,
      data: {
        isAI: true,
        model: 'gpt-3.5-turbo',
        timestamp: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Chatbot error:', error)
    
    // Fall back to demo responses if OpenAI fails
    if (error instanceof Error && error.message.includes('OpenAI')) {
      console.log('OpenAI error, falling back to demo responses')
      return getFallbackResponse(userMessage || '')
    }

    return NextResponse.json(
      { 
        message: 'I apologize, but I encountered an error. Please try again or [contact our team](https://aimpactnexus.ai/contact) directly for assistance.',
        error: true 
      },
      { status: 500 }
    )
  }
}

// Fallback function using demo responses
function getFallbackResponse(message: string) {
  const lowerMessage = message.toLowerCase()
  
  // Find the best matching response
  let response = demoResponses.default
  
  // Check for keyword matches
  for (const [keyword, resp] of Object.entries(demoResponses)) {
    if (keyword !== 'default' && lowerMessage.includes(keyword)) {
      response = resp
      break
    }
  }

  // Check for specific question patterns
  if (lowerMessage.includes('efficiency') || lowerMessage.includes('oee')) {
    response = demoResponses.efficiency
  } else if (lowerMessage.includes('erp') || lowerMessage.includes('sap') || lowerMessage.includes('oracle')) {
    response = demoResponses.erp
  } else if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('pricing')) {
    response = demoResponses.cost
  } else if (lowerMessage.includes('demo') || lowerMessage.includes('contact') || lowerMessage.includes('schedule')) {
    response = demoResponses.demo
  }

  return NextResponse.json({
    message: response,
    data: {
      isDemo: true,
      timestamp: new Date().toISOString()
    }
  })
}