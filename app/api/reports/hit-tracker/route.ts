import { NextRequest, NextResponse } from 'next/server'

// Generate demo data for hit tracker
function generateDemoData() {
  const machines = [
    '600 Ton Press',
    '400 Ton Press', 
    '250 Ton Press',
    'CNC Mill #1',
    'CNC Mill #2',
    'CNC Mill #3',
    'Lathe #1',
    'Lathe #2'
  ]

  const startDate = new Date('2025-01-06') // Start from January 6, 2025
  const machineData = machines.map(machine => {
    const target = machine.includes('600') ? 450 : 
                   machine.includes('400') ? 380 :
                   machine.includes('250') ? 320 :
                   machine.includes('CNC') ? 280 :
                   250

    const weeks = []
    for (let w = 0; w < 4; w++) {
      const weekStart = new Date(startDate)
      weekStart.setDate(startDate.getDate() + (w * 7))
      
      const days = []
      let weeklyHits = 0
      let weeklyHours = 0

      for (let d = 0; d < 7; d++) {
        const currentDate = new Date(weekStart)
        currentDate.setDate(weekStart.getDate() + d)
        
        const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDate.getDay()]
        const isWeekend = dayName === 'Saturday' || dayName === 'Sunday'
        
        const shifts = []
        let dailyHits = 0
        let dailyHours = 0

        // Generate 3 shifts per day
        for (let s = 1; s <= 3; s++) {
          // Lower production on weekends and night shifts
          const baseHits = isWeekend ? target * 0.5 : target
          const shiftMultiplier = s === 1 ? 1.1 : s === 2 ? 1.05 : 0.85
          const variance = (Math.random() - 0.5) * 0.2 // ±10% variance
          
          const hits = Math.floor(baseHits * shiftMultiplier * (1 + variance))
          const hours = isWeekend && s === 3 ? 0 : 8 // No night shift on weekends
          const efficiency = hours > 0 ? Math.min(100, (hits / target) * 100) : 0

          shifts.push({
            shift: s,
            hits,
            hours,
            efficiency: Math.round(efficiency)
          })

          dailyHits += hits
          dailyHours += hours
        }

        const dailyEfficiency = dailyHours > 0 ? Math.min(100, (dailyHits / (target * 3)) * 100) : 0

        days.push({
          date: currentDate.toISOString().split('T')[0],
          dayName,
          shifts,
          dailyHits,
          dailyHours,
          dailyEfficiency: Math.round(dailyEfficiency)
        })

        weeklyHits += dailyHits
        weeklyHours += dailyHours
      }

      const weeklyPerformance = weeklyHours > 0 ? Math.min(100, (weeklyHits / (target * 21)) * 100) : 0

      weeks.push({
        weekStart: weekStart.toISOString().split('T')[0],
        days,
        weeklyHits,
        weeklyHours,
        weeklyPerformance: Math.round(weeklyPerformance)
      })
    }

    return {
      machine,
      target,
      weeks
    }
  })

  // Generate chart data for visualization
  const chartData: any[] = []
  const dates: string[] = []
  
  for (let i = 0; i < 30; i++) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)
    dates.push(date.toISOString().split('T')[0])
  }

  dates.forEach(date => {
    const dayData: any = {
      date,
      total: 0
    }

    machines.forEach(machine => {
      const variance = (Math.random() - 0.5) * 0.3
      const baseValue = machine.includes('600') ? 1350 :
                       machine.includes('400') ? 1140 :
                       machine.includes('250') ? 960 :
                       machine.includes('CNC') ? 840 :
                       750
      const value = Math.floor(baseValue * (1 + variance))
      dayData[machine] = value
      dayData.total += value
    })

    chartData.push(dayData)
  })

  // Generate stats
  const totalHits = machineData.reduce((sum, m) => 
    sum + m.weeks.reduce((wSum, w) => wSum + w.weeklyHits, 0), 0)
  const totalHours = machineData.reduce((sum, m) => 
    sum + m.weeks.reduce((wSum, w) => wSum + w.weeklyHours, 0), 0)
  const avgEfficiency = Math.round(
    machineData.reduce((sum, m) => 
      sum + m.weeks.reduce((wSum, w) => wSum + w.weeklyPerformance, 0) / m.weeks.length, 0
    ) / machineData.length
  )

  const stats = {
    totalProduction: totalHits,
    totalHours: totalHours,
    averageEfficiency: avgEfficiency,
    topPerformer: '600 Ton Press',
    improvement: '+12.3%'
  }

  return {
    machineData,
    chartData,
    stats
  }
}

export async function GET(req: NextRequest) {
  try {
    const data = generateDemoData()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error generating hit tracker data:', error)
    return NextResponse.json(
      { error: 'Failed to generate data' },
      { status: 500 }
    )
  }
}