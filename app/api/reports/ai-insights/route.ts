import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const insights = {
      findings: [
        {
          id: '1',
          title: 'Efficiency Optimization Opportunity',
          description: 'Machine performance analysis shows Tuesday shifts consistently outperform others by 15%. Implementing Tuesday shift patterns across all days could increase overall efficiency.',
          impact: 'Potential 8% efficiency gain',
          confidence: 92,
          category: 'efficiency',
          priority: 'high'
        },
        {
          id: '2',
          title: 'Predictive Maintenance Alert',
          description: '600 Ton Press showing early signs of bearing wear based on vibration patterns. Schedule maintenance within 72 hours to prevent unplanned downtime.',
          impact: 'Avoid 16 hours downtime ($24,000)',
          confidence: 87,
          category: 'maintenance',
          priority: 'critical'
        },
        {
          id: '3',
          title: 'Quality Pattern Detected',
          description: 'Parts produced after 6+ continuous hours show 23% higher defect rate. Recommend implementing hourly quality checks and operator rotation.',
          impact: 'Reduce scrap by $8,500/month',
          confidence: 89,
          category: 'quality',
          priority: 'high'
        },
        {
          id: '4',
          title: 'Shift Performance Insight',
          description: 'Night shift efficiency drops 18% on Thursdays. Root cause: maintenance activities overlapping with production. Reschedule maintenance to weekend windows.',
          impact: 'Recover 120 production hours/month',
          confidence: 94,
          category: 'scheduling',
          priority: 'medium'
        }
      ],
      metrics: {
        totalInsights: 12,
        criticalAlerts: 2,
        opportunities: 7,
        implemented: 3
      },
      trends: {
        efficiency: [
          { month: 'Jan', value: 85 },
          { month: 'Feb', value: 87 },
          { month: 'Mar', value: 86 },
          { month: 'Apr', value: 89 },
          { month: 'May', value: 91 },
          { month: 'Jun', value: 92 }
        ],
        quality: [
          { month: 'Jan', value: 96.5 },
          { month: 'Feb', value: 97.1 },
          { month: 'Mar', value: 96.8 },
          { month: 'Apr', value: 97.4 },
          { month: 'May', value: 98.1 },
          { month: 'Jun', value: 98.5 }
        ]
      }
    }

    return NextResponse.json(insights)
  } catch (error) {
    console.error('Error generating AI insights:', error)
    return NextResponse.json(
      { error: 'Failed to generate insights' },
      { status: 500 }
    )
  }
}