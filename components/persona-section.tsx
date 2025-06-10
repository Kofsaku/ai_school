"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle, Briefcase, Rocket, Code, Users } from "lucide-react"

export default function PersonaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const personas = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "副業や自分のサービスを立ち上げたい",
      description: "アイデアはあるけど、技術的な知識がなくて実現できていない方",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "社内で新規事業を立ち上げたい",
      description: "会社の新規事業担当だが、開発リソースの確保が難しい方",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "ノーコードとAIを使ってみたい",
      description: "最新技術を活用して、効率的にプロダクト開発を学びたい方",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "エンジニアに頼らず作れるようになりたい",
      description: "自分のペースで開発を進められるスキルを身につけたい方",
    },
  ]

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20">
      <motion.div className="relative z-10 max-w-5xl mx-auto px-4 space-y-16" style={{ y, opacity }}>
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">こんな方におすすめ！</h2>
          <p className="text-xl text-green-400">あなたにぴったりかも？</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-start space-x-4 hover:border-green-500/50 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-green-400 p-3 rounded-full bg-green-900/20 flex-shrink-0">{persona.icon}</div>
              <div>
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <h3 className="text-lg md:text-xl font-bold">{persona.title}</h3>
                </div>
                <p className="text-gray-300">{persona.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
