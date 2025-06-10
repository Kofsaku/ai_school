"use client"

import { useEffect, useRef, useState } from "react"
import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import CoreProblemSection from "@/components/core-problem-section"
import SolutionSection from "@/components/solution-section"
import LearningStepsSection from "@/components/learning-steps-section"
import WhyAISection from "@/components/why-ai-section"
import PersonaSection from "@/components/persona-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import CTASection from "@/components/cta-section"
import FloatingCTA from "@/components/floating-cta"
import { useInView } from "react-intersection-observer"
import StarBackground from "@/components/star-background"
// 新しい比較セクションを追加
import ComparisonSection from "@/components/comparison-section"
// 新しいサービスハイライトセクションを追加
import ServiceHighlightsSection from "@/components/service-highlights-section"

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
        {/* ComparisonSectionをWhyAISectionの後に追加 */}
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
