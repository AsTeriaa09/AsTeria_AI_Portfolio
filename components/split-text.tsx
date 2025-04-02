"use client"

import { motion } from "framer-motion"
import { createElement } from "react"

interface SplitTextProps {
  text: string
  tag?: keyof JSX.IntrinsicElements
  className?: string
}

export default function SplitText({ text, tag = "div", className = "" }: SplitTextProps) {
  const words = text.split(" ")

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return createElement(
    tag,
    { className },
    <motion.span variants={container} initial="hidden" animate="visible" className="inline">
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block mr-1">
          {word}
        </motion.span>
      ))}
    </motion.span>,
  )
}

