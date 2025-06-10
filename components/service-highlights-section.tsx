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
          className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-px rounded-2xl"
          initial={{ scale: 0, rotate: 5 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 text-center relative overflow-hidden">
            {/* Background animated elements */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, #22c55e 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, #3b82f6 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, #22c55e 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-4 relative z-10"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              「ここまで全部付いてくるの？」
            </motion.h3>
            <p className="text-lg text-gray-300 relative z-10">
              そう思っていただけるよう、必要なサポートを全て詰め込みました。
              <br />
              あなたは<span className="text-green-400 font-bold">アイデアを形にすることだけ</span>に集中してください。
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
