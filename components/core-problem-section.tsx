"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function CoreProblemSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Tool icons that scatter
  const toolIcons = [
    { icon: "⚙️", delay: 0 },
    { icon: "🔧", delay: 0.1 },
    { icon: "🧰", delay: 0.2 },
    { icon: "💻", delay: 0.3 },
    { icon: "📱", delay: 0.4 },
    { icon: "🤖", delay: 0.5 },
    { icon: "📊", delay: 0.6 },
    { icon: "🔍", delay: 0.7 },
  ]

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20">
      {/* Scattering tool icons */}
      <div className="absolute inset-0 overflow-hidden">
        {toolIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl md:text-6xl"
            style={{
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              x: [(Math.random() - 0.5) * 500, (Math.random() - 0.5) * 500],
              y: [(Math.random() - 0.5) * 500, (Math.random() - 0.5) * 500],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              delay: item.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <motion.div className="relative z-10 max-w-3xl mx-auto text-center px-4 space-y-12" style={{ y, opacity }}>
        <div className="space-y-12">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            ツールは溢れているのに、
            <br />
            サービスが生まれない理由。
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ツールは使える。でも、なぜサービスは生まれないのか？
          </motion.p>

          <motion.ul 
            className="text-xl md:text-2xl space-y-8 text-left max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="mr-3 text-2xl">•</span>
              <span>何を作れば価値があるのかがわからない</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="mr-3 text-2xl">•</span>
              <span>ユーザーの本当の課題 を深く理解する方法が見えていない</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span className="mr-3 text-2xl">•</span>
              <span>誰のために／どんな価値を届けるか を設計できていない</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <span className="mr-3 text-2xl">•</span>
              <span>作りながら学ぶべきフィードバックサイクル が設計されていない</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <span className="mr-3 text-2xl">•</span>
              <span>成長につなげる戦略の描き方がわからない</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <span className="mr-3 text-2xl">•</span>
              <span>プロダクトを成長させるための戦略設計がわからない</span>
            </motion.li>
          </motion.ul>

          <motion.p 
            className="text-2xl md:text-4xl mt-16 font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1,
              delay: 1.2,
              type: "spring",
              stiffness: 100
            }}
          >
            それは、
            <br className="mb-8" />
            <span className="text-3xl md:text-5xl block my-8">「プロダクトの作り方」が</span>
            <span className="text-3xl md:text-5xl block my-8">どこにも教えられていない</span>
            <span className="block mt-8">からです。</span>
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
