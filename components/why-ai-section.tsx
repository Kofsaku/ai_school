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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left side - Human */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-24 h-24 rounded-full bg-blue-900/30 flex items-center justify-center">
              <Lightbulb className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold">人間の発想</h3>
            <p className="text-gray-300">
              創造性、共感、価値判断、
              <br />
              ビジョンの設定
            </p>
          </div>

          {/* Right side - AI */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-24 h-24 rounded-full bg-green-900/30 flex items-center justify-center">
              <Brain className="w-12 h-12 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold">AIの実装</h3>
            <p className="text-gray-300">
              高速な処理、パターン認識、
              <br />
              コード生成、データ分析
            </p>
          </div>
        </div>

        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">AIで「作ること」は加速しました。</h2>

          <p className="text-xl md:text-2xl">でも、「何を作るか」は、まだ人間にしかできません。</p>

          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-px rounded-lg">
              <div className="bg-black p-4 rounded-lg flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <p className="text-lg font-medium">この授業は「発想」と「技術」のギャップを埋めます。</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
