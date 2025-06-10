"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Enhanced floating elements
  const floatingIcons = [
    { icon: "💬", delay: 0, path: "M 0,0 Q 50,-30 100,0 T 200,0" },
    { icon: "🤖", delay: 0.2, path: "M 0,0 Q -30,50 0,100 T 0,200" },
    { icon: "📱", delay: 0.4, path: "M 0,0 Q 30,-50 0,-100 T 0,-200" },
    { icon: "💻", delay: 0.6, path: "M 0,0 Q -50,30 -100,0 T -200,0" },
    { icon: "🧩", delay: 0.8, path: "M 0,0 Q 40,40 80,0 T 160,0" },
  ]

  // 固定の位置とサイズを使用
  const stars = [
    { left: "53.4%", top: "77.9%" },
    { left: "71.9%", top: "6.0%" },
    { left: "14.2%", top: "14.5%" },
    { left: "90.8%", top: "84.2%" },
    { left: "59.4%", top: "16.0%" },
    { left: "92.8%", top: "43.6%" },
    { left: "7.3%", top: "17.3%" },
    { left: "46.8%", top: "73.9%" }
  ]

  const particles = [
    { width: 5.0, height: 5.0, left: "66.5%", top: "68.6%" },
    { width: 5.1, height: 5.1, left: "89.2%", top: "45.2%" },
    { width: 3.8, height: 3.8, left: "38.4%", top: "98.9%" },
    { width: 3.0, height: 3.0, left: "11.6%", top: "93.3%" },
    { width: 3.8, height: 3.8, left: "23.5%", top: "72.5%" },
    { width: 2.8, height: 2.8, left: "63.1%", top: "50.3%" },
    { width: 3.6, height: 3.6, left: "89.2%", top: "8.2%" },
    { width: 5.2, height: 5.2, left: "60.4%", top: "31.8%" }
  ]

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20">
      {/* Enhanced floating background elements */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl md:text-6xl opacity-20"
          style={{
            left: `${index * 20 + 10}%`,
            top: `${(index % 3) * 30 + 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, index % 2 === 0 ? 20 : -20, 0],
            rotate: [0, index % 2 === 0 ? 15 : -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6 + index,
            delay: item.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {item.icon}
          </motion.div>
        </motion.div>
      ))}

      {/* 背景の星 */}
      <div className="absolute inset-0">
        {stars.map((star, index) => (
          <motion.div
            key={`star-${index}`}
            className="absolute w-2 h-2 bg-green-400 rounded-full opacity-30"
            style={{
              left: star.left,
              top: star.top,
              willChange: 'transform, opacity'
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* パーティクルエフェクト */}
      <div className="absolute inset-0">
        {particles.map((particle, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20"
            style={{
              width: particle.width,
              height: particle.height,
              left: particle.left,
              top: particle.top,
              willChange: 'transform'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div className="relative z-10 max-w-3xl mx-auto text-center px-4 space-y-12" style={{ y, opacity }}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          こんな悩み、ありませんか？
        </motion.h2>

        <motion.div
          className="space-y-4"
          initial={{ scale: 0, rotate: -10 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center space-y-2">
            <motion.div
              className="flex items-center text-green-400"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                <CheckCircle className="w-6 h-6 mr-2" />
              </motion.div>
              <p className="text-xl md:text-2xl">ChatGPTは触ったことある</p>
            </motion.div>
            <motion.div
              className="flex items-center text-green-400"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              >
                <CheckCircle className="w-6 h-6 mr-2" />
              </motion.div>
              <p className="text-xl md:text-2xl">ノーコードツールも聞いたことある</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ scale: 0, y: 50 }}
          whileInView={{ scale: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "backOut" }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-xl md:text-2xl font-medium text-white"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            でも…
          </motion.p>
          <motion.div className="space-y-6">
            <motion.p
              className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "backOut" }}
              viewport={{ once: true }}
            >
              「アイデアの事業化の方法がわからない」
            </motion.p>
            <motion.p
              className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "backOut" }}
              viewport={{ once: true }}
            >
              「いつまでもリリースできない」
            </motion.p>
            <motion.p
              className="text-xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "backOut" }}
              viewport={{ once: true }}
            >
              「事業の方向性が不明確」
            </motion.p>
            <motion.p
              className="text-xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "backOut" }}
              viewport={{ once: true }}
            >
              「ユーザーフィードバックの活用法がわからない」
            </motion.p>
            <motion.p
              className="text-xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "backOut" }}
              viewport={{ once: true }}
            >
              「ローンチまでの道筋が見えない」
            </motion.p>
          </motion.div>

          <div className="h-[40px]" />

          <motion.p
            className="text-xl md:text-2xl text-white font-semibold"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            そんな声が今とても増えています。
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
