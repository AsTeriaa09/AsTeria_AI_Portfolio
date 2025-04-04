"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles, Layers } from "lucide-react";
import Link from "next/link";
export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const moveX = useTransform(
    scrollYProgress,
    [0, 1],
    [mousePosition.x * 20, mousePosition.x * -20]
  );

  const moveY = useTransform(
    scrollYProgress,
    [0, 1],
    [mousePosition.y * 20, mousePosition.y * -20]
  );

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.1),transparent_70%)]" />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 pt-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-[11vw] items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <motion.span
                  className="inline-block py-1 px-3 text-xs uppercase tracking-wider border border-primary/30 rounded-full text-primary mb-8"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(124, 58, 237, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Full Stack Developer
                </motion.span>
              </motion.div>

              <div className="mb-6">
                <div className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                  I&apos;m Sultana Rupa
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-xl md:text-lg text-muted-foreground max-w-3xl "
                >
                  a developer focused on building modern, intuitive interfaces
                  and robust applications. With 4+ years of experience
                  transforming ideas into elegant, functional applications.
                  Specializing in{" "}
                  <span className="text-primary/90">Next.js</span>,{" "}
                  <span className="text-primary/90">React</span>, and{" "}
                  <span className="text-primary/90">AI integration</span>.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button asChild className="group relative overflow-hidden">
                    <a
                      href="https://github.com/AsTeriaa09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      Explore my work
                      <motion.span
                        className="ml-2 inline-block"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          repeatDelay: 2,
                        }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </a>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button asChild variant="outline">
                    <a
                      href="https://www.linkedin.com/in/sultana-rupa-3662a3318/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ x: moveX, y: moveY }}
              className="relative"
            >
              <motion.div
                className="relative bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-border gradient-border"
                whileHover={{
                  boxShadow: "0 0 30px rgba(124, 58, 237, 0.1)",
                  y: -5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="flex space-x-2 mb-4">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-red-500"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-yellow-500"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500"
                    whileHover={{ scale: 1.2 }}
                  />
                </div>

                <div className="font-mono text-sm">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-primary"
                  >
                    const developer = {`{`}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="pl-4"
                  >
                    name:{" "}
                    <span className="text-green-500">
                      &quot;Sultana Rupa&quot;
                    </span>
                    ,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="pl-4"
                  >
                    title:{" "}
                    <span className="text-green-500">
                      &quot;Full Stack Developer&quot;
                    </span>
                    ,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="pl-4"
                  >
                    skills: [&nbsp;
                    <span className="text-yellow-500">&quot;Next.js&quot;</span>
                    ,&nbsp;
                    <span className="text-yellow-500">&quot;React&quot;</span>
                    ,&nbsp;
                    <span className="text-yellow-500">&quot;Node.js&quot;</span>
                    ,&nbsp;...],
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="pl-4"
                  >
                    experience: <span className="text-blue-500">4</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="pl-4"
                  >
                    projects: <span className="text-blue-500">30+</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="pl-4"
                  >
                    passion:{" "}
                    <span className="text-green-500">
                      &quot;Creating elegant solutions&quot;
                    </span>
                    ,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="text-primary"
                  >
                    {`}`};
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="font-mono text-sm mt-2"
                >
                  <motion.span
                    className="text-primary"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    _
                  </motion.span>
                </motion.div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="absolute -bottom-5 -right-5 p-3 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg border border-border gradient-border"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 0 15px rgba(124, 58, 237, 0.2)",
                }}
                drag
                dragConstraints={{
                  top: -5,
                  left: -5,
                  right: 5,
                  bottom: 5,
                }}
              >
                <Code className="h-6 w-6 text-primary" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                className="absolute -top-5 -left-5 p-3 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg border border-border gradient-border"
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  boxShadow: "0 0 15px rgba(124, 58, 237, 0.2)",
                }}
                drag
                dragConstraints={{
                  top: -5,
                  left: -5,
                  right: 5,
                  bottom: 5,
                }}
              >
                <Sparkles className="h-6 w-6 text-primary" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="absolute top-1/2 -left-10 p-3 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg border border-border gradient-border"
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  boxShadow: "0 0 15px rgba(124, 58, 237, 0.2)",
                }}
                drag
                dragConstraints={{
                  top: -5,
                  left: -5,
                  right: 5,
                  bottom: 5,
                }}
              >
                <Layers className="h-6 w-6 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-0 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.div
            className="w-5 h-10 border border-muted-foreground rounded-full flex items-start justify-center p-1"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-1 h-1 bg-primary rounded-full"
            />
          </motion.div>
          <span className="text-xs text-muted-foreground mt-2">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
