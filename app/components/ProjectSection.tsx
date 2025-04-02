"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import SplitText from "@/components/split-text"

const projects = [
  {
    id: 1,
    title: "NeoCampus",
    description: "All-in-one student app providing campus services and information in real-time.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "React", "MongoDB", "Socket.IO"],
    link: "#",
    color: "bg-[#6366F1]",
  },
  {
    id: 2,
    title: "NeoHire",
    description: "AI-powered platform to help job seekers improve their professional profiles.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "React", "MongoDB", "AI Integration"],
    link: "#",
    color: "bg-[#8B5CF6]",
  },
  {
    id: 3,
    title: "ChatterBox",
    description: "Real-time communication platform for seamless messaging experience.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["MongoDB", "Express.js", "React", "Socket.IO"],
    link: "#",
    color: "bg-[#EC4899]",
  },
  {
    id: 4,
    title: "CodeCollab",
    description: "Collaborative coding platform with real-time code sharing and execution.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "WebSockets", "Monaco Editor", "Node.js"],
    link: "#",
    color: "bg-[#10B981]",
  },
  {
    id: 5,
    title: "PixelPerfect",
    description: "AI-powered image editing tool with advanced filters and transformations.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "TensorFlow.js", "WebGL", "Canvas API"],
    link: "#",
    color: "bg-[#F59E0B]",
  },
  {
    id: 6,
    title: "DataVizPro",
    description: "Interactive data visualization dashboard with customizable charts and graphs.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "D3.js", "GraphQL", "PostgreSQL"],
    link: "#",
    color: "bg-[#3B82F6]",
  },
]

export default function WorkSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  return (
    <section id="work" ref={containerRef} className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.1),transparent_70%)]" />

      <motion.div style={{ opacity, y }} className="container mx-auto px-4">
        <div className="mb-16 md:mb-24">
          <SplitText text="Selected Work" tag="h2" className="text-3xl md:text-5xl font-bold mb-6" />
          <p className="text-muted-foreground max-w-2xl">
            A curated selection of projects that showcase my skills in building modern, user-focused applications with
            cutting-edge technologies.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

interface ProjectItemProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    link: string
    color: string
  }
  index: number
}

function ProjectItem({ project, index }: ProjectItemProps) {
  const itemRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`relative ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
    >
      <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-center">
        <motion.div
          className={`md:col-span-3 order-2 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span
            className="inline-block text-xs text-primary mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Project {project.id.toString().padStart(2, "0")}
          </motion.span>

          <motion.h3
            className="text-2xl md:text-3xl font-bold mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {project.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {project.technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                className="text-xs py-1 px-3 bg-secondary rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(124, 58, 237, 0.1)",
                  color: "rgb(124, 58, 237)",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
            <motion.span animate={isHovered ? { x: 5 } : { x: 0 }} transition={{ duration: 0.2 }}>
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </motion.span>
          </motion.a>
        </motion.div>

        <motion.div
          className={`md:col-span-2 order-1 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative overflow-hidden rounded-lg h-48 md:h-64"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className={`absolute inset-0 ${project.color} opacity-20 mix-blend-multiply`}
              animate={isHovered ? { opacity: 0.3 } : { opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500"
              style={{
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            />

            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0"
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="absolute bottom-4 left-4 right-4 text-white opacity-0"
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sm font-medium">View Project</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

