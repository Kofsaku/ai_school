"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function LearningStepsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const steps = [
    {
      number: "①",
      title: "アイデア発掘・課題整理",
      color: "from-blue-600 to-blue-400",
      description:
        "アイデアがない人も安心。事業アイデア発想ワークショップ＋市場/顧客課題の整理を行います。リーンキャンバスの作成で、仮説と方向性を明確化.",
    },
    {
      number: "②",
      title: "プロトタイピング設計・検証準備",
      color: "from-green-600 to-green-400",
      description:
        "ChatGPTを活用した仮説検証用コンテンツ作成／ペルソナ検証用の簡易なプロトタイプ作成。ユーザーテストの進め方もレクチャー.",
    },
    {
      number: "③",
      title: "MVP開発（ノーコード中心／一部AI実装可能）",
      color: "from-purple-600 to-purple-400",
      description:
        "ノーコードツール（Glide, Bubble, Softr 等）でユーザーが触れるMVPを作成。必要な場合はAIの実装支援も実施（ChatGPT API, RAG型など）.",
    },
    {
      number: "④",
      title: "ユーザーテスト → 改善 → α版完成",
      color: "from-orange-600 to-orange-400",
      description:
        "実ユーザーへのインタビュー／テスト結果を踏まえたMVP改善。8週目には完成したプロダクト／サービス紹介資料作成まで伴走.",
    },
  ]

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20">
      <motion.div className="relative z-10 max-w-4xl mx-auto px-4 space-y-16" style={{ y, opacity }}>
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">学習の流れ - アイデアから事業化までのステップ</h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-orange-500 transform -translate-x-1/2 md:translate-x-0" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col md:flex-row items-center md:items-start gap-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Planet */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl font-bold`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-full md:ml-8">
                  <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center text-xl md:text-2xl font-medium text-green-400">全部、伴走付きで進められます。</div>
      </motion.div>
    </section>
  )
}
