"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, ArrowUpRight } from "lucide-react"
import SplitText from "@/components/split-text"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section id="contact" ref={containerRef} className="py-20 md:py-32 relative clip-path-diagonal">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--primary-rgb),0.2),transparent_70%)]" />
      <div className="grid-bg absolute inset-0 -z-10 opacity-20" />

      <motion.div style={{ opacity, y }} className="container mx-auto px-4">
        <div className="mb-16 md:mb-24">
          <SplitText text="Let's Connect" tag="h2" className="text-3xl md:text-5xl font-bold mb-6" />
          <p className="text-muted-foreground max-w-2xl">
            Have a project in mind or want to discuss potential collaborations? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href="mailto:mahiraakhter950@gmail.com" className="text-lg hover:text-primary transition-colors">
                  mahiraakhter950@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                <a
                  href="https://github.com/AsTeriaa09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-primary transition-colors flex items-center"
                >
                  github.com/AsTeriaa09
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-medium mb-4">Available for:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Remote positions
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Freelance projects
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Consulting
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Collaboration
                </li>
              </ul>
            </div>
          </div>

          <div>
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="bg-primary/10 text-primary p-8 rounded-lg text-center flex flex-col items-center space-y-4"
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(124, 58, 237, 0.2)",
                        "0 0 0 10px rgba(124, 58, 237, 0)",
                        "0 0 0 0 rgba(124, 58, 237, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Send className="h-8 w-8 text-primary" />
                  </motion.div>
                  <motion.h4
                    className="text-xl font-bold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Message Sent!
                  </motion.h4>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    Thank you for reaching out. I'll get back to you soon.
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
            {!isSubmitted && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <Label htmlFor="name">Name</Label>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-secondary/10"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Label htmlFor="email">Email</Label>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary/10"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Label htmlFor="message">Message</Label>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-secondary/10"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="mr-2 h-4 w-4 rounded-full border-2 border-current border-t-transparent"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "reverse",
                              ease: "easeInOut",
                              repeatDelay: 2,
                            }}
                            className="ml-2 inline-block"
                          >
                            <Send className="h-4 w-4" />
                          </motion.span>
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            )}
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-border text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Sultana Rupa. All rights reserved.</p>
        </div>
      </motion.div>
    </section>
  )
}

