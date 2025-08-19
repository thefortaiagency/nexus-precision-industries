// Comprehensive knowledge base for Nexus Precision Industries
// This provides the AI chatbot with detailed information about our platform

export const knowledgeBase = {
  company: {
    name: "Nexus Precision Industries",
    tagline: "Beyond ERP - Manufacturing Intelligence",
    mission: "Transform your ERP data into actionable intelligence with AI-powered insights, predictive analytics, and intelligent reporting",
    value_proposition: "We enhance your existing ERP system without replacing it, adding AI capabilities that turn data into decisions"
  },

  platform_overview: {
    what_is_nexus: "Nexus is a manufacturing intelligence platform that sits on top of your existing ERP system, adding AI-powered analytics, predictive insights, and intelligent reporting capabilities without disrupting your current operations.",
    
    key_differentiators: [
      "Works WITH your existing ERP (SAP, Oracle, Microsoft, NetSuite, etc.)",
      "30-day implementation vs 18+ months for ERP replacement",
      "70% time savings on manual reporting tasks",
      "85% faster report generation",
      "Real-time AI insights and predictions",
      "Natural language querying of your data"
    ],

    core_capabilities: [
      "Real-time production monitoring and OEE tracking",
      "Predictive maintenance using AI algorithms",
      "Automated report generation and distribution",
      "Quality management and defect prediction",
      "Inventory optimization and demand forecasting",
      "Time and attendance analytics",
      "Energy consumption monitoring",
      "Safety incident tracking and prevention"
    ]
  },

  erp_integration: {
    compatible_systems: [
      "SAP (all versions)",
      "Oracle ERP Cloud and E-Business Suite",
      "Microsoft Dynamics 365",
      "NetSuite",
      "Infor",
      "Epicor",
      "Plex Manufacturing Cloud",
      "QAD",
      "IFS Applications"
    ],

    integration_approach: "We connect to your ERP through secure APIs, database connectors, or file exports. No modifications to your ERP system required. Data flows in real-time or on scheduled intervals based on your needs.",

    implementation_process: [
      "Week 1: ERP assessment and data mapping",
      "Week 2: Secure connection setup and initial data sync",
      "Week 3: Dashboard configuration and user training",
      "Week 4: Go-live with ongoing support"
    ]
  },

  features: {
    dashboards: {
      description: "Real-time manufacturing dashboards with customizable KPIs",
      capabilities: [
        "Production efficiency metrics (OEE, availability, performance)",
        "Machine status and utilization tracking",
        "Quality metrics and trend analysis",
        "Inventory levels and turnover rates",
        "Energy consumption monitoring",
        "Safety incident reporting"
      ]
    },

    ai_reports: {
      description: "AI-powered reports that generate insights automatically",
      capabilities: [
        "Automated report generation and distribution",
        "Natural language insights and recommendations",
        "Trend analysis and pattern recognition",
        "Exception reporting for outliers",
        "Predictive analytics for future performance",
        "Custom report building with drag-and-drop interface"
      ]
    },

    predictive_maintenance: {
      description: "AI algorithms predict equipment failures before they happen",
      capabilities: [
        "Machine learning models analyze historical patterns",
        "Early warning alerts for maintenance needs",
        "Optimal maintenance scheduling",
        "Parts inventory optimization",
        "Downtime reduction of 30-50%",
        "Maintenance cost reduction of 25-35%"
      ]
    },

    time_savings_calculator: {
      description: "Interactive calculator showing ROI and time savings",
      location: "/time-savings-calculator",
      benefits: [
        "Calculate exact time and cost savings for your operation",
        "Adjustable parameters for employees, hours, and salary",
        "Real-time ROI calculations",
        "70% time savings on manual tasks",
        "85% faster report generation"
      ]
    }
  },

  pricing: {
    model: "Per-user, per-month subscription with transparent pricing",
    tiers: [
      {
        name: "Reporting Module",
        price: "$50/user/month",
        features: ["Real-time dashboards", "Automated reporting", "Basic analytics"]
      },
      {
        name: "AI Analytics",
        price: "$75/user/month", 
        features: ["All Reporting features", "AI insights", "Trend analysis", "Exception reporting"]
      },
      {
        name: "Predictive Maintenance",
        price: "$100/user/month",
        features: ["All AI Analytics features", "Predictive maintenance", "Equipment monitoring", "Maintenance optimization"]
      },
      {
        name: "Full Platform",
        price: "$150/user/month",
        features: ["All features included", "Custom integrations", "Advanced AI", "Priority support"]
      }
    ],
    
    cost_comparison: {
      sap_analytics: "$150,000+/year",
      oracle_analytics: "$120,000+/year", 
      microsoft_power_bi: "$80,000+/year",
      traditional_consulting: "$250-500/hour",
      nexus_advantage: "59% cost savings vs traditional solutions"
    },

    roi_guarantee: "3x ROI within 6 months or money back guarantee"
  },

  implementation: {
    timeline: "30 days to full deployment",
    approach: "Non-disruptive implementation that enhances your existing ERP",
    requirements: [
      "Existing ERP system (any major platform)",
      "Database or API access for data extraction",
      "User accounts for team members",
      "Initial data mapping session"
    ],
    
    support: [
      "24/7 technical support",
      "Dedicated implementation specialist",
      "User training and onboarding",
      "Ongoing optimization consultations"
    ]
  },

  contact: {
    demo_link: "https://aimpactnexus.ai/contact",
    phone: "1-800-NEXUS-AI",
    scheduling: "Visit our contact page to schedule a personalized demo",
    demo_includes: [
      "Live demonstration with your ERP data",
      "Custom ROI calculation for your business",
      "Implementation roadmap",
      "Pricing tailored to your needs"
    ]
  },

  success_stories: {
    time_savings: "Customers typically see 70% reduction in manual reporting time",
    cost_savings: "Average annual savings of $200,000+ per manufacturing facility",
    roi_achievement: "Most customers achieve 3x ROI within 6 months",
    implementation_success: "99% successful implementation rate within 30 days"
  },

  technical_specs: {
    security: "Enterprise-grade security with SOC 2 compliance",
    deployment: "Cloud-hosted with 99.9% uptime SLA",
    integrations: "RESTful APIs, secure database connections, real-time data sync",
    scalability: "Scales from small shops to enterprise manufacturing operations"
  }
}

export default knowledgeBase