"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
  const [animationStarted, setAnimationStarted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // セクションが表示されたらアニメーション開始
  useEffect(() => {
    if (isInView && !animationStarted) {
      setAnimationStarted(true)
    }
  }, [isInView, animationStarted])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* ロケットアニメーション */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <motion.div
          className="absolute"
          initial={{
            x: "-100px",
            y: "80vh",
            scale: 0.5,
            rotate: 45,
          }}
          animate={{
            x: ["calc(100vw + 100px)"],
            y: ["-100px"],
            scale: [0.5, 1, 0.8, 0.3],
            rotate: [45, -15, -30, -45],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1],
            repeat: Infinity,
            repeatDelay: 2
          }}
          style={{ zIndex: 35 }}
        >
          <div className="relative">
            {/* ロケット本体 - 画像が読み込めない場合のフォールバック付き */}
            <motion.div
              className="relative w-24 h-36 md:w-32 md:h-48"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {/* フォールバック用のCSS ロケット */}
              <div className="absolute inset-0 z-10">
                {/* ロケット本体 */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-24 md:w-16 md:h-32 bg-gradient-to-t from-gray-300 to-white rounded-t-full border-2 border-gray-400">
                  {/* 窓 */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-gray-600" />

                  {/* 先端 */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-6 md:w-10 md:h-8 bg-gradient-to-t from-red-500 to-red-400 rounded-t-full" />

                  {/* 左フィン */}
                  <div className="absolute bottom-0 -left-2 w-4 h-8 md:w-5 md:h-10 bg-gradient-to-r from-red-500 to-red-400 transform -skew-x-12" />

                  {/* 右フィン */}
                  <div className="absolute bottom-0 -right-2 w-4 h-8 md:w-5 md:h-10 bg-gradient-to-l from-red-500 to-red-400 transform skew-x-12" />
                </div>
              </div>

              {/* 画像版（読み込める場合） */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <Image
                  src="/images/rocket.png"
                  alt="Rocket"
                  width={128}
                  height={192}
                  className="object-contain w-full h-full"
                  priority
                  onError={(e) => {
                    console.error("Rocket image failed to load:", e);
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>

            {/* 炎の噴射 */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2"
              animate={{
                scaleY: [1, 1.4, 1],
                scaleX: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 0.3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {/* メイン炎 */}
              <div className="w-6 h-12 md:w-8 md:h-16 bg-gradient-to-t from-orange-500 via-yellow-400 to-red-500 rounded-b-full opacity-90" />

              {/* 内側の炎 */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-6 md:w-4 md:h-8 bg-gradient-to-t from-yellow-300 to-white rounded-b-full" />
            </motion.div>

            {/* パーティクル効果 */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full"
                style={{
                  bottom: `${-8 - i * 6}px`,
                  left: `${50 + (Math.random() - 0.5) * 30}%`,
                }}
                animate={{
                  opacity: [1, 0],
                  scale: [1, 0.3],
                  y: [0, -15],
                  x: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 20],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* 煙の軌跡 */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`smoke-${i}`}
                className="absolute w-4 h-4 bg-gray-400 rounded-full opacity-20"
                style={{
                  bottom: `${-20 - i * 12}px`,
                  left: `${45 + (Math.random() - 0.5) * 20}%`,
                }}
                animate={{
                  opacity: [0.2, 0],
                  scale: [0.5, 1.5],
                  x: [(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 30],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* スピードライン効果 */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`speed-line-${i}`}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60"
            style={{
              top: `${25 + i * 8}%`,
              left: "0%",
              width: "100%",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 1.2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 8
            }}
          />
        ))}

        {/* ソニックブーム効果 */}
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 4, 0],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 8
          }}
        >
          <div className="w-24 h-24 border-4 border-blue-400 rounded-full" />
        </motion.div>
      </div>

      {/* メインコンテンツ */}
      <motion.div className="relative z-20 max-w-3xl mx-auto px-4 space-y-12 text-center" style={{ y, opacity }}>
        <motion.div
          className="space-y-6"
          initial={{ scale: 0, y: 50 }}
          whileInView={{ scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">「まずは話だけでも聞いてみたい」</h2>
          <p className="text-xl md:text-2xl">そんな方のために、無料面談をご用意しました。</p>
          <p className="text-xl text-green-400">📩 LINE登録で、いつでも気軽にご相談できます。</p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full w-full md:w-auto relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.05 }}
            />
            <span className="relative z-10">LINE登録</span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-green-500 text-green-400 hover:bg-green-950 px-8 py-6 text-lg rounded-full w-full md:w-auto"
          >
            無料相談フォーム
          </Button>
        </motion.div>

        <motion.div
          className="pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">© 2025 AI×プロダクト開発スクール. All rights reserved.</p>
        </motion.div>
      </motion.div>

      {/* 背景の宇宙要素 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* きらめく星 */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              delay: Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* 遠くの惑星 */}
        <motion.div
          className="absolute top-20 right-20 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />
      </div>
    </section>
  )
}
