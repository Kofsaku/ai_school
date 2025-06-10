"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Target, BotIcon as Robot, UserRound, Sparkles } from "lucide-react"

export default function SolutionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  const features = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "8週間でMVPを完成",
      description: "アイデアから実際の製品まで、8週間で最小限の機能を持つプロダクトを完成させます。",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: <Robot className="w-12 h-12" />,
      title: "AIと一緒に開発",
      description: "最新のAIツールを活用して、効率的にプロダクト開発を進めます。",
      color: "from-green-600 to-green-400",
    },
    {
      icon: <UserRound className="w-12 h-12" />,
      title: "実績あるプロが伴走",
      description: "経験豊富なプロフェッショナルが、あなたの開発プロセスをサポートします。",
      color: "from-purple-600 to-purple-400",
    },
  ]

  // Enhanced background elements
  const orbitingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    radius: 150 + (i % 3) * 50,
    speed: 10 + (i % 4) * 5,
    size: 8 + (i % 3) * 4,
    delay: i * 0.5,
  }))

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Enhanced planet lab background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute left-1/2 top-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-green-500/30"
          style={{
            x: "-50%",
            y: "-50%",
            rotate,
          }}
        >
          {/* Inner rotating ring */}
          <motion.div
            className="absolute inset-8 rounded-full border-2 border-blue-400/20"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </motion.div>

        <motion.div
          className="absolute left-1/2 top-1/2 w-80 h-80 md:w-[32rem] md:h-[32rem] rounded-full border-2 border-blue-500/20"
          style={{
            x: "-50%",
            y: "-50%",
            rotate: useTransform(scrollYProgress, [0, 1], [0, -180]),
          }}
        />

        {/* Orbiting elements */}
        {orbitingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute left-1/2 top-1/2"
            style={{ x: "-50%", y: "-50%" }}
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: element.speed,
              delay: element.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <motion.div
              className="bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
              style={{
                width: element.size,
                height: element.size,
                transform: `translateX(${element.radius}px)`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-16" style={{ y, opacity }}>
        <motion.div
          className="space-y-6"
          initial={{ scale: 0, y: -100 }}
          whileInView={{ scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold"
            animate={{
              textShadow: [
                "0 0 10px rgba(34, 197, 94, 0.5)",
                "0 0 20px rgba(34, 197, 94, 0.8)",
                "0 0 10px rgba(34, 197, 94, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            My first Launchは、
            <br />
            "あなたのアイデア"を
            <br />
            実際のプロダクトに変えるための実践プログラムです。
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black/50 backdrop-blur-lg border border-green-500/30 rounded-xl p-6 flex flex-col items-center space-y-4 hover:border-green-500/80 transition-all duration-300 relative overflow-hidden"
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "backOut" }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
              }}
            >
              {/* Background glow effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0`}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="text-green-400 p-3 rounded-full bg-green-900/20 relative z-10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10 + index * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                whileHover={{ scale: 1.2 }}
              >
                {feature.icon}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(34, 197, 94, 0.4)",
                      "0 0 0 10px rgba(34, 197, 94, 0)",
                      "0 0 0 0 rgba(34, 197, 94, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              </motion.div>

              <h3 className="text-xl font-bold relative z-10">{feature.title}</h3>
              <p className="text-gray-300 relative z-10">{feature.description}</p>

              {/* Floating sparkles */}
              <motion.div
                className="absolute top-2 right-2"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-4 h-4 text-green-400 opacity-50" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
