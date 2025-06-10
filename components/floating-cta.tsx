"use client"

import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface FloatingCTAProps {
  show: boolean
}

export default function FloatingCTA({ show }: FloatingCTAProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-black/80 backdrop-blur-md border-t border-white/10 p-4 flex justify-center">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-5 text-lg rounded-full w-full">
              今すぐ無料相談
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
