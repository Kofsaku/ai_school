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
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            ツールは溢れているのに、
            <br />
            サービスが生まれない理由。
          </h2>

          <p className="text-xl md:text-3xl mt-8 text-green-400">
            それは、「プロダクトの作り方」が
            <br />
            どこにも教えられていないからです。
          </p>
        </div>
      </motion.div>
    </section>
  )
}
