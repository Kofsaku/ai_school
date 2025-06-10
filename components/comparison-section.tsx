"use client"

import { useRef, useMemo } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Check, X, Zap, AlertTriangle } from "lucide-react"
import { animations, transitions, viewportOptions } from "@/lib/animations"

export default function ComparisonSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // メモ化されたデータ
  const comparisonData = useMemo(() => [
    {
      feature: "プロダクト設計〜開発伴走",
      competitors: ["partial", "partial", "partial"],
      ourService: true,
    },
    {
      feature: "リーンキャンバス活用法",
      competitors: [false, false, false],
      ourService: true,
    },
    {
      feature: "MVPの完成保証",
      competitors: [false, false, false],
      ourService: true,
    },
    {
      feature: "8週間で実プロダクト完成",
      competitors: [false, false, false],
      ourService: true,
    },
    {
      feature: "24時間チャットサポート",
      competitors: [false, false, "partial"],
      ourService: true,
    },
    {
      feature: "ノーコードの実装支援",
      competitors: ["partial", true, false],
      ourService: true,
    },
    {
      feature: "事業としてのアイデアの壁打ち",
      competitors: [false, false, false],
      ourService: true,
    },
    {
      feature: "プロとの個別壁打ち",
      competitors: [false, false, false],
      ourService: true,
    },
    {
      feature: "完成までのステップの見える化",
      competitors: [false, false, false],
      ourService: true,
    },
    {
      feature: "AIツールの使い方",
      competitors: [true, "partial", "partial"],
      ourService: true,
    },
  ], [])

  const competitors = useMemo(() => [
    "一般的なAIスクール（A社）",
    "ノーコードスクール（B社）",
    "プログラミングスクール（C社）"
  ], [])

  const coreValues = useMemo(() => [
    "プロダクト設計〜開発伴走",
    "リーンキャンバス活用法",
    "MVPの完成保証",
    "8週間で実プロダクト完成",
    "24時間チャットサポート"
  ], [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20">
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 space-y-16" 
        style={{ 
          y, 
          opacity,
          willChange: 'transform, opacity'
        }}
      >
        <motion.div 
          className="text-center space-y-6"
          variants={animations.fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          transition={transitions.smooth}
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            "道半ば"で挫折させない。<br/>ここが他の講座と違う理由。
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg md:text-xl text-gray-300">
              AIやノーコードツールを教える講座は多数存在します。<br/>
              でも、それだけでは「何を作ればいいか、どう事業にするか」がわからず、途中で止まってしまう方がほとんどです。
            </p>
            <p className="text-lg md:text-xl text-green-400 font-medium">
              my FIRST Launchは、<strong>「作り方」＋「事業化の視点」＋「完成までの伴走」</strong>をセットで提供します。
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="overflow-x-auto"
          variants={animations.fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          transition={transitions.smooth}
        >
          <div className="min-w-[800px] bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-5 gap-4 p-4 border-b border-white/10 bg-green-900/20">
              <div className="font-bold text-lg">項目</div>
              {competitors.map((competitor, index) => (
                <div
                  key={index}
                  className="font-bold text-center text-sm md:text-base"
                >
                  {competitor}
                </div>
              ))}
              <div className="font-bold text-center text-lg text-green-400 flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                my FIRST Launch
              </div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => {
              const isCoreValue = coreValues.includes(row.feature);

              return (
                <motion.div
                  key={index}
                  className="grid grid-cols-5 gap-4 p-4 border-b border-white/5 hover:bg-white/5 transition-colors"
                  variants={animations.fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={viewportOptions}
                  transition={{
                    ...transitions.smooth,
                    delay: index * 0.05
                  }}
                >
                  <div className="font-medium text-sm md:text-base">
                    {isCoreValue ? (
                      <span className="text-green-400">
                        {row.feature}
                      </span>
                    ) : (
                      row.feature
                    )}
                  </div>
                  {row.competitors.map((hasFeature, compIndex) => (
                    <div key={compIndex} className="flex justify-center">
                      {hasFeature === true ? (
                        <Check className="w-5 h-5 text-green-400" />
                      ) : hasFeature === false ? (
                        <X className="w-5 h-5 text-red-400" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-yellow-400" />
                      )}
                    </div>
                  ))}
                  <div className="flex justify-center">
                    <Check className="w-6 h-6 text-green-400 font-bold" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
