import React from 'react'
import { heroImages, type PageHeroImage } from '@/lib/hero-images'

interface HeroSectionProps {
  page: PageHeroImage
  title: string | React.ReactNode
  subtitle?: string
  height?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
}

export default function HeroSection({ 
  page, 
  title, 
  subtitle, 
  height = 'medium',
  children 
}: HeroSectionProps) {
  const image = heroImages[page]
  
  const heightClasses = {
    small: 'h-48 md:h-56',
    medium: 'h-64 md:h-72',
    large: 'h-80 md:h-96'
  }

  return (
    <div className={`relative ${heightClasses[height]} w-full overflow-hidden`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image.unsplashUrl})`,
        }}
      >
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{ background: image.overlay }}
        />
        
        {/* Noise texture for depth */}
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
      
      {/* Bottom fade to blend with page */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}