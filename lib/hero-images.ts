// Hero image prompts for DALL-E or Midjourney generation
// Industrial, futuristic, no humans, data visualization overlays

export const heroImages = {
  dashboard: {
    prompt: "Futuristic factory floor with holographic time management dashboards floating above automated production lines, glowing data streams showing efficiency metrics, industrial robots working in perfect synchronization, dramatic lighting with blue and orange accents, cinematic wide angle, photorealistic, 8k",
    unsplashUrl: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2074&auto=format&fit=crop", // Factory automation
    overlay: "linear-gradient(to bottom, rgba(239, 68, 68, 0.8), rgba(249, 115, 22, 0.9))"
  },
  scrapAnalysis: {
    prompt: "Abstract visualization of time flowing through industrial gears and clockwork mechanisms, holographic charts showing wasted hours as red particles dissipating into space, factory machinery with glowing efficiency meters, dark industrial aesthetic with red warning lights, cinematic depth of field",
    unsplashUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", // Industrial tech
    overlay: "linear-gradient(to bottom, rgba(220, 38, 38, 0.85), rgba(251, 146, 60, 0.9))"
  },
  aiReports: {
    prompt: "Futuristic AI command center with multiple holographic displays showing predictive analytics, neural network patterns overlaying factory machinery, purple and blue data streams flowing through industrial pipelines, quantum computing visualization merged with manufacturing equipment, cinematic lighting",
    unsplashUrl: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2074&auto=format&fit=crop", // AI visualization
    overlay: "linear-gradient(to bottom, rgba(147, 51, 234, 0.8), rgba(79, 70, 229, 0.9))"
  },
  manning: {
    prompt: "Overhead view of empty factory workstations with holographic workforce analytics floating above each station, blue data streams showing attendance patterns, automated scheduling displays, industrial setting with dynamic lighting showing shift changes, cinematic atmosphere",
    unsplashUrl: "https://images.unsplash.com/photo-1553736277-055142d018f0?q=80&w=2070&auto=format&fit=crop", // Factory floor
    overlay: "linear-gradient(to bottom, rgba(59, 130, 246, 0.8), rgba(99, 102, 241, 0.9))"
  },
  hitTracker: {
    prompt: "High-speed industrial press machines with glowing production counters, green data streams showing real-time metrics, holographic charts displaying efficiency curves, sparks and motion blur suggesting continuous operation, dramatic industrial lighting, cinematic composition",
    unsplashUrl: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2098&auto=format&fit=crop", // Manufacturing
    overlay: "linear-gradient(to bottom, rgba(34, 197, 94, 0.8), rgba(20, 184, 166, 0.9))"
  },
  erpComparison: {
    prompt: "Split-screen visualization showing outdated server room with tangled cables on left transitioning to sleek holographic cloud infrastructure on right, data transformation effects in the middle, industrial setting with before/after comparison, dramatic lighting contrast, cinematic composition",
    unsplashUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2071&auto=format&fit=crop", // Tech infrastructure
    overlay: "linear-gradient(to bottom, rgba(6, 182, 212, 0.8), rgba(59, 130, 246, 0.9))"
  },
  contact: {
    prompt: "Modern industrial facility entrance with holographic welcome displays, glowing pathway leading to futuristic reception area, data streams forming welcoming patterns, blue and teal lighting, cinematic depth, architectural photography style",
    unsplashUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Modern building
    overlay: "linear-gradient(to bottom, rgba(6, 182, 212, 0.8), rgba(13, 148, 136, 0.9))"
  },
  home: {
    prompt: "Expansive industrial complex at golden hour with holographic dashboards floating above facilities, interconnected data streams between buildings, futuristic manufacturing campus, dramatic sky with data visualization clouds, cinematic wide shot, photorealistic rendering",
    unsplashUrl: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop", // Industrial complex
    overlay: "linear-gradient(135deg, rgba(6, 182, 212, 0.7), rgba(59, 130, 246, 0.8))"
  }
}

export type PageHeroImage = keyof typeof heroImages