"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Palette, GitBranch } from "lucide-react";

const skills = [
  {
    category: "Languages & Frameworks",
    icon: <Code2 className="h-5 w-5" />,
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "MERN Stack",
      "Next.js",
      "HTML5",
      "CSS3",
      "C",
      "C++",
      "Java",
      "TanStack Query",
      "Redux",
      "Socket.io"
    ],
  },
  {
    category: "Styling Mastery",
    icon: <Palette className="h-5 w-5" />,
    items: [
      "Bootstrap",
      "Tailwind CSS",
      "Framer Motion",
      "Materialize CSS",
      "Responsive Web Design",
      
    ],
  },
  {
    category: "Database & Tools",
    icon: <Database className="h-5 w-5" />,
    items: [
      "MongoDB",
      "Supabase",
      "MySQL",
      "PostgreSQL",
      "Langchain",
      "Docker",
      "Postman",
      "Vercel",     
      
      "Webpack",
      "npm",
      "Vector Database",
      "RESTful APIs",
      "DevOps Basics",
    ],
  },
  {
    category: "Version Control & Collaboration",
    icon: <GitBranch className="h-5 w-5" />,
    items: ["Git", "GitHub", "Agile Practices"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);

  return (
    <section id="about" className="py-20 px-4 relative" ref={sectionRef}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.1),transparent_70%)]" />

      <motion.div style={{ opacity, y }} className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">
            My Skills
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden gradient-border card-hover bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-semibold">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="px-3 py-1 hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text inline-block">
            My Development Journey
          </h3>
          <div className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm rounded-lg p-6 shadow-sm gradient-border">
            <p className="text-muted-foreground leading-relaxed">
              My journey in web development began with a fascination for
              creating interactive user experiences. Over the years, I&apos;ve
              evolved from building simple websites to architecting complex
              applications that leverage cutting-edge technologies. I&apos;ve
              developed a particular expertise in creating seamless interfaces
              with React and Next.js, while also mastering backend systems with
              Node.js and various databases. What drives me is the opportunity
              to blend creativity with technical problem-solving to build
              solutions that make a real impact. I&apos;m constantly learning
              and experimenting with new technologies to stay at the forefront
              of this rapidly evolving field.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
