"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Check, X, Zap, AlertTriangle } from "lucide-react"

export default function ComparisonSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const comparisonData = [
    {
      feature: "プロダクト設計〜開発伴走",
      competitors: ["partial", "partial", "partial"],
      ourService: true,
    },
    {
      feature: "リーンキャンバス活用法",
      competitors: [false, false, false],
      ourService: true,
    },
    {
      feature: "MVPの完成保証",
      competitors: [false, false, false],
      ourService: true,
    },
    {
      feature: "8週間で実プロダクト完成",
      competitors: [false, false, false],
      ourService: true,
    },
    {
      feature: "24時間チャットサポート",
      competitors: [false, false, "partial"],
      ourService: true,
    },

    {
      feature: "ノーコードの実装支援",
      competitors: ["partial", true, false],
      ourService: true,
    },


    {
      feature: "事業としてのアイデアの壁打ち",
      competitors: [false, false, false],
      ourService: true,
    },

    {
      feature: "プロとの個別壁打ち",
      competitors: [false, false, false],
      ourService: true,
    },
    {
      feature: "完成までのステップの見える化",
      competitors: [false, false, false],
      ourService: true,
    },
    {
      feature: "AIツールの使い方",
      competitors: [true, "partial", "partial"],
      ourService: true,
    },
  ]

  const competitors = ["一般的なAIスクール（A社）", "ノーコードスクール（B社）", "プログラミングスクール（C社）"]

  // Background animated elements
  const backgroundElements = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Enhanced background elements */}
      {backgroundElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
            willChange: 'transform, opacity'
          }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div className="relative z-10 max-w-6xl mx-auto px-4 space-y-16" style={{ y, opacity }}>
        <motion.div
          className="text-center space-y-6"
          initial={{ scale: 0, y: -50 }}
          whileInView={{ scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
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
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            "道半ば"で挫折させない。<br/>ここが他の講座と違う理由。
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <motion.p
              className="text-lg md:text-xl text-gray-300"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              AIやノーコードツールを教える講座は多数存在します。<br/>
              でも、それだけでは「何を作ればいいか、どう事業にするか」がわからず、途中で止まってしまう方がほとんどです。
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-green-400 font-medium"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "backOut" }}
              viewport={{ once: true }}
            >
              my FIRST Launchは、<strong>「作り方」＋「事業化の視点」＋「完成までの伴走」</strong>をセットで提供します。
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          viewport={{ once: true }}
        >
          <div className="min-w-[800px] bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
            {/* Header */}
            <motion.div
              className="grid grid-cols-5 gap-4 p-4 border-b border-white/10 bg-green-900/20"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="font-bold text-lg">項目</div>
              {competitors.map((competitor, index) => (
                <motion.div
                  key={index}
                  className="font-bold text-center text-sm md:text-base"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {competitor}
                </motion.div>
              ))}
              <motion.div
                className="font-bold text-center text-lg text-green-400 flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "backOut" }}
                viewport={{ once: true }}
              >
                <Zap className="w-5 h-5 mr-2" />
                my FIRST Launch
              </motion.div>
            </motion.div>

            {/* Rows */}
            {comparisonData.map((row, index) => {
              const isCoreValue = [
                "プロダクト設計〜開発伴走",
                "リーンキャンバス活用法",
                "MVPの完成保証",
                "8週間で実プロダクト完成",
                "24時間チャットサポート"
              ].includes(row.feature);

              return (
                <motion.div
                  key={index}
                  className="grid grid-cols-5 gap-4 p-4 border-b border-white/5 hover:bg-white/5 transition-colors"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(34, 197, 94, 0.05)" }}
                >
                  <div className="font-medium text-sm md:text-base">
                    {isCoreValue ? (
                      <motion.span
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
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        {row.feature}
                      </motion.span>
                    ) : (
                      row.feature
                    )}
                  </div>
                  {row.competitors.map((hasFeature, compIndex) => (
                    <div key={compIndex} className="flex justify-center">
                      <motion.div
                        initial={{ scale: 0, rotate: hasFeature === true ? 0 : hasFeature === false ? 180 : 0 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.1 + compIndex * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {hasFeature === true ? (
                          <Check className="w-5 h-5 text-green-400" />
                        ) : hasFeature === false ? (
                          <X className="w-5 h-5 text-red-400" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-yellow-400" />
                        )}
                      </motion.div>
                    </div>
                  ))}
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.5, ease: "backOut" }}
                      viewport={{ once: true }}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      whileHover={{ scale: 1.3 }}
                    >
                      <Check className="w-6 h-6 text-green-400 font-bold" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
