"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const testimonials = [
    {
      quote: "初めてでも、実際にMVPが作れて自信がつきました",
      author: "30代会社員 女性",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote: "アイデアを言語化し、プロの支援で形にできました",
      author: "新規事業担当 男性",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  // Floating product examples
  const products = [1, 2, 3]

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Floating product examples */}
      {products.map((_, index) => (
        <motion.div
          key={index}
          className="absolute opacity-20 z-0"
          style={{
            left: `${index * 30 + 10}%`,
            top: `${(index % 3) * 20 + 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, index % 2 === 0 ? 10 : -10, 0],
          }}
          transition={{
            duration: 5,
            delay: index * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="w-40 h-64 md:w-64 md:h-96 rounded-xl bg-gradient-to-br from-green-500/30 to-blue-500/30 backdrop-blur-sm" />
        </motion.div>
      ))}

      <motion.div className="relative z-10 max-w-4xl mx-auto px-4 space-y-16" style={{ y, opacity }}>
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">受講者の声</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Quote className="absolute top-4 left-4 w-8 h-8 text-green-500/30" />
              <div className="pt-8 space-y-4">
                <p className="text-xl font-medium">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-300">— {testimonial.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
