"use client"

import { useRef, useMemo } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { animations, transitions, viewportOptions } from "@/lib/animations"

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // ロケットアニメーションの設定をメモ化
  const rocketAnimation = useMemo(() => ({
    ...animations.rocketAnimation,
    style: { 
      zIndex: 35,
      willChange: 'transform',
      transform: 'translate3d(0, 0, 0)',
      backfaceVisibility: 'hidden' as const,
      perspective: 1000
    }
  }), [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20">
      {/* ロケットアニメーション - 最適化版 */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <motion.div
          className="absolute"
          {...rocketAnimation}
        >
          <div className="relative">
            <div className="relative w-24 h-36 md:w-32 md:h-48">
              <Image
                src="/images/rocket.png"
                alt="Rocket"
                width={128}
                height={192}
                className="object-contain w-full h-full"
                priority
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* メインコンテンツ */}
      <motion.div 
        className="relative z-20 max-w-3xl mx-auto px-4 space-y-12 text-center" 
        style={{ 
          y, 
          opacity,
          willChange: 'transform, opacity'
        }}
      >
        <motion.div 
          className="space-y-6"
          variants={animations.fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          transition={transitions.smooth}
        >
          <h2 className="text-3xl md:text-5xl font-bold">「まずは話だけでも聞いてみたい」</h2>
          <p className="text-xl md:text-2xl">そんな方のために、無料面談をご用意しました。</p>
          <p className="text-xl text-green-400">📩 LINE登録で、いつでも気軽にご相談できます。</p>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
          variants={animations.fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          transition={{
            ...transitions.smooth,
            delay: 0.2
          }}
        >
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full w-full md:w-auto"
          >
            LINE登録
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-green-500 text-green-400 hover:bg-green-950 px-8 py-6 text-lg rounded-full w-full md:w-auto"
          >
            無料相談フォーム
          </Button>
        </motion.div>

        <motion.div 
          className="pt-12"
          variants={animations.fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          transition={{
            ...transitions.smooth,
            delay: 0.4
          }}
        >
          <p className="text-gray-400">© 2025 AI×プロダクト開発スクール. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
