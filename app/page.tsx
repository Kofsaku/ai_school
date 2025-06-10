"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from 'next/dynamic'
import { useInView } from "react-intersection-observer"

// Dynamically import components
const HeroSection = dynamic(() => import('@/components/hero-section'), {
  loading: () => <div className="min-h-screen" />
})
const ProblemSection = dynamic(() => import('@/components/problem-section'))
const CoreProblemSection = dynamic(() => import('@/components/core-problem-section'))
const SolutionSection = dynamic(() => import('@/components/solution-section'))
const LearningStepsSection = dynamic(() => import('@/components/learning-steps-section'))
const WhyAISection = dynamic(() => import('@/components/why-ai-section'))
const ComparisonSection = dynamic(() => import('@/components/comparison-section'))
const PersonaSection = dynamic(() => import('@/components/persona-section'))
const ServiceHighlightsSection = dynamic(() => import('@/components/service-highlights-section'))
const TestimonialsSection = dynamic(() => import('@/components/testimonials-section'))
const PricingSection = dynamic(() => import('@/components/pricing-section'))
const CTASection = dynamic(() => import('@/components/cta-section'))
const FloatingCTA = dynamic(() => import('@/components/floating-cta'))
const StarBackground = dynamic(() => import('@/components/star-background'))

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)
  const { ref: topSectionRef, inView: topSectionInView } = useInView()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowFloatingCTA(true)
      } else {
        setShowFloatingCTA(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative overflow-hidden bg-black text-white">
      <div ref={containerRef} className="relative z-10">
        <div ref={topSectionRef}>
          <HeroSection />
        </div>
        <ProblemSection />
        <CoreProblemSection />
        <SolutionSection />
        <LearningStepsSection />
        <WhyAISection />
        <ComparisonSection />
        <PersonaSection />
        <ServiceHighlightsSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </div>

      {/* Background stars */}
      <div className="fixed inset-0 z-0">
        <StarBackground />
      </div>

      {/* Floating CTA for mobile */}
      <FloatingCTA show={showFloatingCTA} />
    </main>
  )
}
