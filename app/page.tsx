import Link from 'next/link'
import Image from 'next/image'
import { 
  Factory, 
  BarChart3, 
  Activity, 
  Package, 
  TrendingUp, 
  Users, 
  Globe,
  Cpu,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Target
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <Image 
                  src="/nexus-logo.png" 
                  alt="Nexus" 
                  width={40} 
                  height={40}
                  className="brightness-0 invert"
                />
                <div>
                  <h1 className="text-xl font-bold text-white">Nexus Precision Industries</h1>
                  <p className="text-xs text-cyan-400">Where Innovation Meets Excellence</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#platform" className="text-gray-300 hover:text-cyan-400 transition-colors">Platform</Link>
              <Link href="#metrics" className="text-gray-300 hover:text-cyan-400 transition-colors">Metrics</Link>
              <Link href="#automation" className="text-gray-300 hover:text-cyan-400 transition-colors">Automation</Link>
              <Link href="#contact" className="px-4 py-2 bg-cyan-500 text-slate-950 rounded-lg font-semibold hover:bg-cyan-400 transition-all transform hover:scale-105">
                Get Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-teal-500/10"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
              <Zap className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Powered by Nexus Platform Automation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-white to-teal-400 bg-clip-text text-transparent">
              Advanced Manufacturing
              <br />Intelligence Platform
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Transforming legacy manufacturing operations into smart factories with real-time analytics, 
              AI-powered quality control, and complete digital twin visualization.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-6 py-4">
                <div className="text-3xl font-bold text-cyan-400">99.97%</div>
                <div className="text-sm text-gray-400">Quality Rating</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-6 py-4">
                <div className="text-3xl font-bold text-cyan-400">2,500+</div>
                <div className="text-sm text-gray-400">Components</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-6 py-4">
                <div className="text-3xl font-bold text-cyan-400">12</div>
                <div className="text-sm text-gray-400">Global Facilities</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-6 py-4">
                <div className="text-3xl font-bold text-cyan-400">$450M</div>
                <div className="text-sm text-gray-400">Annual Revenue</div>
              </div>
            </div>
          </div>

          {/* Platform Factory Transformation Image */}
          <div id="automation" className="relative mx-auto max-w-6xl">
            <div className="bg-gradient-to-r from-cyan-500/20 via-transparent to-teal-500/20 p-1 rounded-2xl">
              <div className="bg-slate-900/90 backdrop-blur-xl rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-4 text-center">
                  Complete Platform Automation Pipeline
                </h2>
                <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
                  From code to production in minutes: GitHub → Vercel → DNS Configuration → Live Platform
                </p>
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/images/hero-transformation.png" 
                    alt="Platform Factory Transformation" 
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center justify-center space-x-8 text-white">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>Automated Deployment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>Zero-Config Setup</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>Enterprise Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="platform" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry 4.0 Platform Capabilities
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Complete digital transformation delivered through intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Activity className="h-8 w-8" />,
                title: "Real-Time Production Dashboard",
                description: "Live OEE metrics, efficiency tracking, and production analytics across all facilities",
                stats: "250ms latency"
              },
              {
                icon: <Cpu className="h-8 w-8" />,
                title: "AI Quality Control",
                description: "Predictive maintenance, defect detection, and automated quality assurance",
                stats: "99.97% accuracy"
              },
              {
                icon: <Package className="h-8 w-8" />,
                title: "Supply Chain Intelligence",
                description: "Inventory optimization, vendor analytics, and automated procurement",
                stats: "35% cost reduction"
              },
              {
                icon: <Factory className="h-8 w-8" />,
                title: "Digital Twin Visualization",
                description: "3D models of production lines with real-time sensor data integration",
                stats: "100% coverage"
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Executive Reporting Suite",
                description: "Beautiful KPI dashboards, automated reports, and predictive analytics",
                stats: "24/7 insights"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "IoT Sensor Integration",
                description: "Machine health monitoring, environmental tracking, and edge computing",
                stats: "10,000+ sensors"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-cyan-400">{feature.icon}</div>
                    <span className="text-xs text-teal-400 font-mono bg-teal-500/10 px-2 py-1 rounded">
                      {feature.stats}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-Grade Performance
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built for scale, security, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "API Response Time", value: "45ms", trend: "+12%" },
              { label: "System Uptime", value: "99.99%", trend: "Stable" },
              { label: "Data Processing", value: "1.2TB/day", trend: "+25%" },
              { label: "Active Users", value: "850+", trend: "+18%" }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                <div className="text-gray-400 mb-1">{metric.label}</div>
                <div className="text-sm text-teal-400">{metric.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Flow */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Deployment Automation Pipeline
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enterprise platform deployment with complete automation
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-4">
            {[
              { step: "1", title: "GitHub", desc: "Repository Creation" },
              { step: "2", title: "Vercel", desc: "Auto-Deployment" },
              { step: "3", title: "DNS", desc: "GoDaddy API Config" },
              { step: "4", title: "SSL", desc: "Certificate Provisioning" },
              { step: "5", title: "Live", desc: "Production Ready" }
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-2xl font-bold text-slate-950 mb-2">
                    {item.step}
                  </div>
                  <div className="text-white font-semibold">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.desc}</div>
                </div>
                {index < 4 && (
                  <ArrowRight className="hidden md:block h-8 w-8 text-cyan-500 mx-4" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-lg">
              <Globe className="h-5 w-5 text-cyan-400 mr-2" />
              <span className="text-white">Live at: </span>
              <span className="text-cyan-400 font-mono ml-2">npi.aimpactnexus.ai</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-cyan-500/20 p-1 rounded-2xl">
            <div className="bg-slate-900 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Your Manufacturing Operations
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join industry leaders who have revolutionized their production capabilities with 
                Nexus Precision Industries&apos; intelligent platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 rounded-lg font-bold hover:from-cyan-400 hover:to-teal-400 transition-all transform hover:scale-105 flex items-center">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="px-8 py-4 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 transition-all border border-cyan-500/30">
                  View Case Studies
                </button>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  ISO 9001:2015 Certified
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  SOC 2 Type II Compliant
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image 
                src="/nexus-logo.png" 
                alt="Nexus" 
                width={30} 
                height={30}
                className="brightness-0 invert"
              />
              <span className="text-gray-400 text-sm">
                © 2025 Nexus Precision Industries. All rights reserved.
              </span>
            </div>
            <div className="text-sm text-gray-500">
              Powered by Nexus Platform Automation
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
