"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CircleDot, Gift } from "lucide-react"

export default function PricingSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const features = [
    { text: "8週間伴走プログラム（MVP完成保証型）", icon: "🎯" },
    { text: "週1回：プロとの1on1セッション（Zoom）", icon: "👥" },
    { text: "24時間チャット壁打ちサポート（Slack／Discord）", icon: "💬" },
    { text: "リーンキャンバステンプレート＋記入サポート", icon: "📋" },
    { text: "事業開発ワークショップ資料（Miroテンプレート提供）", icon: "🎨" },
    { text: "プロトタイピング支援 → 必要に応じて一緒に操作", icon: "🔧" },
    { text: "ユーザーテスト実施マニュアル＋改善サポート", icon: "🔍" },
    { text: "ノーコード実装時の技術壁サポート（AI連携含む）", icon: "⚡" },
    { text: "完成したMVPのレビュー＋次フェーズ提案", icon: "🚀" },
  ]

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20">
      <motion.div className="relative z-10 max-w-3xl mx-auto px-4 space-y-16" style={{ y, opacity }}>
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">my FIRST Launchに含まれるサービス内容</h2>
        </div>

        <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 p-px rounded-2xl">
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="space-y-8">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                    <CircleDot className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <p className="text-lg md:text-xl">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-green-600/30 to-green-400/30 p-px rounded-xl">
                <div className="bg-black/80 p-4 rounded-xl flex items-center space-x-3">
                  <Gift className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p className="text-lg">今なら無料で「開発チェックリスト」付き</p>
                </div>
              </div>

              <div className="bg-green-500/20 p-4 rounded-xl text-center">
                <p className="text-xl font-bold text-green-400">【モニター特典：無料面談あり】</p>
              </div>

              <div className="flex justify-center">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full">
                  今すぐ無料相談
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
