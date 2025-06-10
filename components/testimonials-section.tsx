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
      quote: "3ヶ月で実際にMVPをリリースでき、ユーザーからフィードバックをもらえるまでになりました。特にプロダクトマネジメントの考え方が身についたのが大きいです。",
      author: "SaaSスタートアップ創業者 田中さん",
      image: "/icons/rocket.svg",
    },
    {
      quote: "大手企業の新規事業担当として参加。アイデアを言語化し、プロの支援で形にできました。特にユーザーインタビューの手法は今の仕事でも活用しています。",
      author: "大手IT企業 新規事業部 佐藤さん",
      image: "/icons/briefcase.svg",
    },
    {
      quote: "エンジニアとして参加しましたが、プロダクトの全体像を理解できたのが大きな収穫。技術だけでなく、ビジネス視点での考え方が身につきました。",
      author: "フリーランスエンジニア 鈴木さん",
      image: "/icons/code.svg",
    },
    {
      quote: "デザイナーとして参加し、UI/UXの重要性を実感。実際のユーザーテストを通じて、デザインの改善点を見つけられるようになりました。",
      author: "UIデザイナー 高橋さん",
      image: "/icons/palette.svg",
    },
    {
      quote: "起業を目指して参加。特にリーンスタートアップの手法は目から鱗でした。小さな仮説検証を繰り返す重要性を学べました。",
      author: "起業準備中 山田さん",
      image: "/icons/lightbulb.svg",
    },
    {
      quote: "大企業の社内起業家として参加。社内での新規事業提案が通り、現在は実証実験フェーズに進んでいます。",
      author: "大手製造業 新規事業推進部 伊藤さん",
      image: "/icons/factory.svg",
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

      <motion.div className="relative z-10 max-w-7xl mx-auto px-4 space-y-16" style={{ y, opacity }}>
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">受講者の声</h2>
        </div>

        <div className="overflow-x-auto pb-8">
          <div className="flex space-x-8 min-w-max">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative w-[400px] flex-shrink-0"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Quote className="absolute top-4 left-4 w-8 h-8 text-green-500/30" />
                <div className="pt-8 space-y-4">
                  <p className="text-xl font-medium">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-gray-300">— {testimonial.author}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
