"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Chat", href: "#chat" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-medium tracking-tight">
            <span className="text-primary">S</span>ultana
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`text-sm uppercase tracking-wider transition-colors hover:text-primary relative ${
                    activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background z-50 flex flex-col"
          >
            <div className="container mx-auto px-4 py-5 flex justify-between items-center">
              <Link href="/" className="text-xl font-medium tracking-tight">
                <span className="text-primary">S</span>ultana
              </Link>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </motion.div>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center space-y-8">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-4xl font-bold tracking-tight hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="container mx-auto px-4 py-8">
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  <p>mahiraakhter950@gmail.com</p>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/AsTeriaa09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

