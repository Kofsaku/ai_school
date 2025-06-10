"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle, Briefcase, Rocket, Code, Users, Lightbulb, TrendingUp, Handshake, Clock } from "lucide-react"

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
      icon: <Rocket className="w-8 h-8" />,
      title: "副業や自分のサービスを 実際に形にしたい",
      description: "アイデアはあるが、技術や進め方がわからず止まっている方",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "社内で 新規事業をスピード感を持って立ち上げたい",
      description: "会社の新規事業担当として、短期間で事業のタネを具体化 したい方",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "ノーコードとAIを活用して 事業の種を形にしたい",
      description: "ノーコードやAIを 学ぶだけでなく、実際のプロダクト作りに活用 したい方",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "エンジニアに頼らず 自分のペースでプロダクトを形にしたい",
      description: "自分のアイデアを 開発チームなしでもMVPまで形にするスキル を身につけたい方",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "アイデアはあるが 最初の一歩が踏み出せない方",
      description: "何から手をつけていいかわからず、手が止まっている方",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "既存事業を AIやノーコードで再構築したい方",
      description: "今の事業にAIやノーコードを取り入れて、新たな価値提案を作りたい 方",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "仲間や外部の視点を借りながら事業を進めたい 方",
      description: "ひとりで進めるのが不安。壁打ちや伴走支援が欲しい 方",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "忙しくても 短期間でアウトプットを出したい方",
      description: "フルタイムの仕事をしながらでも、限られた時間で成果を出したい 方",
    },
  ]

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20">
      <motion.div className="relative z-10 max-w-5xl mx-auto px-4 space-y-16" style={{ y, opacity }}>
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">こんな方におすすめ！</h2>
          <p className="text-xl text-green-400">あなたの「やりたい」を「形に」変えたい方へ。</p>
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
