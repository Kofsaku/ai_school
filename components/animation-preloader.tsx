'use client'

import { preloadAnimations } from "@/lib/animations"
import { useEffect } from "react"

export const AnimationPreloader = () => {
  useEffect(() => {
    // アニメーションのプリロードを実行
    const preload = async () => {
      await preloadAnimations()
    }
    preload()
  }, [])

  return null
} 