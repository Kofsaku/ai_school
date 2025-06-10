"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Sparkles } from "lucide-react"

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400 to-green-400 opacity-30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(particle.id) * 50, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Enhanced Earth animation */}
      <div className="absolute w-full h-full">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-blue-500/30"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/30 to-blue-400/10"
            animate={{
              rotate: [0, -360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {/* Inner glow effect */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-green-500/20 to-transparent animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Orbiting elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 w-4 h-4 bg-green-400 rounded-full"
            style={{
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div
              className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
              style={{
                transform: `translateX(${120 + i * 40}px)`,
              }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div className="relative z-10 text-center space-y-8 px-4" style={{ y, opacity, scale }}>
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <motion.span
              className="inline-block"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              あなたのアイデアを
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              8週間でプロダクトに
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ scale: 0, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "backOut" }}
        >
          <p className="text-xl md:text-2xl font-medium text-green-400">
            非エンジニアのための
            <br />
            AI活用 × プロダクト開発スクール
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "backOut" }}
        >
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.05 }}
            />
            <span className="relative z-10 flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              今すぐ無料相談
            </span>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-8 h-8 text-white opacity-70" />
      </motion.div>
    </section>
  )
}
