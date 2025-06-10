"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function StarBackground() {
  const [stars, setStars] = useState<
    { id: number; size: number; top: string; left: string; delay: number; duration: number }[]
  >([])

  useEffect(() => {
    // Generate random stars with enhanced properties
    const generateStars = () => {
      const newStars = []
      const count = Math.min(window.innerWidth / 2, 300) // More stars

      for (let i = 0; i < count; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 4 + 1,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2,
        })
      }
      setStars(newStars)
    }

    generateStars()
    window.addEventListener("resize", generateStars)

    return () => {
      window.removeEventListener("resize", generateStars)
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            top: star.top,
            left: star.left,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: star.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}

      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-green-400 rounded-full"
          style={{
            top: `${Math.random() * 50}%`,
            left: "-10px",
          }}
          animate={{
            x: [0, window.innerWidth + 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 3 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 8,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
