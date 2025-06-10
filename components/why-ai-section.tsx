"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Brain, Lightbulb, Sparkles } from "lucide-react"

export default function WhyAISection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20">
      <motion.div className="relative z-10 max-w-4xl mx-auto px-4 space-y-16" style={{ y, opacity }}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            発想と技術のギャップを埋める
          </h2>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">
          {/* Vertical Divider for md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-white/30 to-green-400 opacity-60 z-0" style={{transform: 'translateX(-50%)'}} />

          {/* Left side - Human */}
          <motion.div
            className="relative flex flex-col items-center text-center space-y-6 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-600/40 border-2 border-blue-400/40 shadow-xl rounded-2xl p-8 z-10 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 32px 8px #60a5fa55' }}
          >
            <div className="w-24 h-24 rounded-full bg-blue-900/60 flex items-center justify-center shadow-lg border-4 border-blue-400/30 animate-pulse-slow">
              <Lightbulb className="w-12 h-12 text-blue-300 drop-shadow-glow" />
            </div>
            <h3 className="text-2xl font-bold text-blue-200 drop-shadow">人間の発想</h3>
            <p className="text-blue-100 font-medium">
              創造性、共感、価値判断、<br />ビジョンの設定
            </p>
          </motion.div>

          {/* Right side - AI */}
          <motion.div
            className="relative flex flex-col items-center text-center space-y-6 bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-600/40 border-2 border-green-400/40 shadow-xl rounded-2xl p-8 z-10 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 32px 8px #4ade8055' }}
          >
            <div className="w-24 h-24 rounded-full bg-green-900/60 flex items-center justify-center shadow-lg border-4 border-green-400/30 animate-pulse-slow">
              <Brain className="w-12 h-12 text-green-300 drop-shadow-glow" />
            </div>
            <h3 className="text-2xl font-bold text-green-200 drop-shadow">AIの実装</h3>
            <p className="text-green-100 font-medium">
              高速な処理、パターン認識、<br />コード生成、データ分析
            </p>
          </motion.div>
        </div>

        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">AIで「作ること」は加速しました。</h2>

          <p className="text-xl md:text-2xl">でも、「何を作るか」は、まだ人間にしかできません。</p>

          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-[2px] rounded-xl hover:scale-105 transition-transform duration-300 animate-gradient-x">
              <div className="bg-black p-6 rounded-lg flex items-center space-x-4 hover:bg-black/90 transition-colors duration-300">
                <Sparkles className="w-8 h-8 text-yellow-400 flex-shrink-0 animate-pulse" />
                <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  このスクールは「発想」と「技術」のギャップを埋めます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
