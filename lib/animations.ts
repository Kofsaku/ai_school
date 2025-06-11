import { Variants } from "framer-motion"

// アニメーションのプリロード用の設定
export const preloadAnimations = () => {
  // アニメーションの設定を事前に読み込む
  const animations = {
    fadeInUp: {
      keyframes: [
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      options: { duration: 600, easing: 'ease-out' }
    },
    fadeIn: {
      keyframes: [
        { opacity: 0 },
        { opacity: 1 }
      ],
      options: { duration: 600, easing: 'ease-out' }
    },
    rocketAnimation: {
      keyframes: [
        { transform: 'translate(-100px, 80vh) scale(0.5)' },
        { transform: 'translate(calc(100vw + 100px), -100px) scale(0.3)' }
      ],
      options: { 
        duration: 8000,
        easing: 'ease-in-out',
        iterations: Infinity,
        delay: 2000
      }
    }
  }

  // アニメーションのプリロード
  if (typeof window !== 'undefined') {
    const preloadAnimation = (keyframes: Keyframe[], options: KeyframeAnimationOptions) => {
      return new Promise<void>((resolve) => {
        const element = document.createElement('div')
        element.style.position = 'absolute'
        element.style.visibility = 'hidden'
        element.style.pointerEvents = 'none'
        element.style.willChange = 'transform, opacity'
        document.body.appendChild(element)

        const animation = element.animate(keyframes, {
          ...options,
          fill: 'forwards'
        })

        animation.onfinish = () => {
          document.body.removeChild(element)
          resolve()
        }
      })
    }

    // すべてのアニメーションを並行してプリロード
    Promise.all(Object.values(animations).map(animation => 
      preloadAnimation(animation.keyframes, animation.options)
    ))
  }

  return animations
}

// アニメーションの設定
export const animations: Record<string, Variants> = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideIn: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 }
  },
  scaleIn: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  },
  rocketAnimation: {
    initial: {
      x: -100,
      y: "80vh",
      scale: 0.5,
    },
    animate: {
      x: "100vw",
      y: -100,
      scale: [0.5, 1, 0.8, 0.3],
    }
  }
}

// アニメーションのトランジション設定
export const transitions = {
  default: {
    duration: 0.6,
    ease: "ease-out"
  },
  smooth: {
    duration: 0.8,
    ease: [0.4, 0, 0.2, 1]
  },
  spring: {
    type: "spring",
    stiffness: 100,
    damping: 10
  },
  rocket: {
    duration: 8,
    ease: "easeInOut",
    times: [0, 0.3, 0.7, 1],
    repeat: Infinity,
    repeatDelay: 2
  }
}

// ビューポートの設定
export const viewportOptions = {
  once: true,
  margin: "-100px",
  amount: 0.3
}

// アニメーションのスタイル設定
export const animationStyles = {
  willChange: {
    transform: 'transform',
    opacity: 'opacity',
    all: 'transform, opacity'
  },
  transform: {
    hardware: 'translate3d(0, 0, 0)',
    perspective: 'perspective(1000px)'
  },
  backface: {
    hidden: 'hidden' as const
  }
} 