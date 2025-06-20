"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Clock, Users, MessageSquare, Palette, Zap, Star } from "lucide-react"

export default function ServiceHighlightsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const highlights = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "8週間完成保証",
      description: "必ずMVPを完成させます",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "24時間サポート",
      description: "いつでも質問・相談可能",
      color: "from-green-600 to-green-400",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "プロとの1on1",
      description: "週1回の個別セッション",
      color: "from-purple-600 to-purple-400",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "豊富なテンプレート",
      description: "Miro・リーンキャンバス等",
      color: "from-orange-600 to-orange-400",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "ユーザーテストサポート",
      description: "実際のユーザーからのフィードバック収集",
      color: "from-pink-600 to-pink-400",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "開発ロードマップ提供",
      description: "完成までのステップを明確化",
      color: "from-indigo-600 to-indigo-400",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "MVPのレビュー",
      description: "次フェーズへの提案付き",
      color: "from-cyan-600 to-cyan-400",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "成果物レビュー",
      description: "プロダクトの品質向上支援",
      color: "from-amber-600 to-amber-400",
    },
  ]

  // Enhanced background particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 5,
    delay: Math.random() * 3,
  }))

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Enhanced particle background */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-green-400/30 to-blue-400/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.sin(particle.id) * 30, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div className="relative z-10 max-w-5xl mx-auto px-4 space-y-16" style={{ y, opacity }}>
        <motion.div
          className="text-center space-y-6"
          initial={{ scale: 0, rotate: -10 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            style={{
              background: "linear-gradient(90deg, #ffffff, #22c55e, #3b82f6, #ffffff)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            他では手に入らない
            <br />
            <span className="text-green-400">充実のサポート体制</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            ただ教材を渡すだけではありません。完成まで徹底的に伴走します。
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center space-y-4 hover:border-green-500/50 transition-all duration-300 relative overflow-hidden group"
              initial={{ scale: 0, y: 100, rotate: -180 }}
              whileInView={{ scale: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "backOut" }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)",
              }}
            >
              {/* Background glow effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10`}
                transition={{ duration: 0.3 }}
              />

              {/* Floating stars around the card */}
              {[...Array(3)].map((_, starIndex) => (
                <motion.div
                  key={starIndex}
                  className="absolute"
                  style={{
                    top: `${20 + starIndex * 30}%`,
                    right: `${10 + starIndex * 15}%`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [0.5, 1, 0.5],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + starIndex,
                    delay: starIndex * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Star className="w-3 h-3 text-green-400" />
                </motion.div>
              ))}

              <motion.div
                className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${highlight.color} flex items-center justify-center text-white relative z-10`}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8 + index * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                whileHover={{ scale: 1.2 }}
              >
                {highlight.icon}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(34, 197, 94, 0.4)",
                      "0 0 0 15px rgba(34, 197, 94, 0)",
                      "0 0 0 0 rgba(34, 197, 94, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              </motion.div>

              <h3 className="text-xl font-bold relative z-10">{highlight.title}</h3>
              <p className="text-gray-300 relative z-10">{highlight.description}</p>

              {/* Lightning effect */}
              <motion.div
                className="absolute top-2 left-2"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Zap className="w-4 h-4 text-yellow-400" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative bg-gradient-to-br from-green-400/30 via-blue-400/20 to-black/80 p-1 rounded-3xl shadow-[0_0_60px_10px_rgba(34,197,94,0.25)] border-2 border-green-400/40 overflow-visible"
          initial={{ scale: 0, rotate: 5 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          viewport={{ once: true }}
        >
          {/* グローエフェクト */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-green-400/30 blur-2xl rounded-full z-0 pointer-events-none" />
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-blue-400/30 blur-2xl rounded-full z-0 pointer-events-none" />
          <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-10 md:p-14 text-center relative overflow-hidden border border-blue-400/30 shadow-[0_0_40px_5px_rgba(59,130,246,0.10)]">
            {/* Background animated elements */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, #22c55e 0%, transparent 60%)",
                  "radial-gradient(circle at 80% 50%, #3b82f6 0%, transparent 60%)",
                  "radial-gradient(circle at 20% 50%, #22c55e 0%, transparent 60%)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-6 relative z-10 text-white drop-shadow-[0_2px_10px_rgba(34,197,94,0.7)]"
              animate={{
                scale: [1, 1.08, 1],
                textShadow: [
                  "0 0 20px #22c55e, 0 0 40px #3b82f6",
                  "0 0 40px #22c55e, 0 0 80px #3b82f6",
                  "0 0 20px #22c55e, 0 0 40px #3b82f6",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              「ここまで全部付いてくるの？」
              {/* アニメーション付き下線 */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-2/3 h-2 bg-gradient-to-r from-green-400 via-blue-400 to-green-400 rounded-full blur-md opacity-80"
                animate={{
                  scaleX: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.h3>
            <motion.p
              className="text-lg md:text-xl text-gray-100 relative z-10 font-medium drop-shadow-[0_2px_8px_rgba(34,197,94,0.3)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              本気で形にしたい方のために、必要なサポートはすべて詰め込みました。
              <br />
              あなたは<span className="text-green-400 font-bold text-xl drop-shadow-[0_2px_8px_rgba(34,197,94,0.7)]">発想と創造に集中すればOK。</span>あとは一緒に伴走します。
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
