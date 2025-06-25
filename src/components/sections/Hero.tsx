'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiMongodb, 
  SiOpenai, 
  SiTailwindcss,
  SiGithub,
  SiLinkedin
} from 'react-icons/si'
import { FiArrowRight } from 'react-icons/fi'

const ROLES = [
  'Full Stack Developer',
  'MERN Specialist',
  'AI Engineer',
  'Solutions Architect'
]

const TECH_STACK = [
  { icon: <SiReact className="h-5 w-5 text-[#61DAFB]" />, name: 'React' },
  { icon: <SiNextdotjs className="h-5 w-5 text-white" />, name: 'Next.js' },
  { icon: <SiNodedotjs className="h-5 w-5 text-[#339933]" />, name: 'Node' },
  { icon: <SiMongodb className="h-5 w-5 text-[#47A248]" />, name: 'MongoDB' },
  { icon: <SiOpenai className="h-5 w-5 text-[#412991]" />, name: 'OpenAI' },
  { icon: <SiTailwindcss className="h-5 w-5 text-[#06B6D4]" />, name: 'Tailwind' }
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let currentIndex = 0
    const role = ROLES[currentRole]
    const interval = setInterval(() => {
      if (currentIndex <= role.length) {
        setDisplayText(role.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % ROLES.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [currentRole])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-gray-950 text-gray-100 overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/50 to-gray-950/80"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[100px]"
          animate={{
            x: [0, 40, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-emerald-600/20 to-teal-600/20 blur-[120px]"
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm font-mono text-blue-400 mb-4 flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
          <span>Hello, my name is</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Shantanu Barge.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 mb-8 h-12"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
            {displayText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="ml-1"
            >
              |
            </motion.span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
        >
          I build scalable web applications and AI-powered solutions with modern technologies. 
          Currently focused on creating impactful digital experiences at the intersection 
          of design and engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all"
          >
            View My Work
            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3.5 border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-800/50 hover:border-gray-600 hover:text-white transition-all shadow-lg hover:shadow-xl hover:shadow-gray-900/20"
          >
            Contact Me
            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        {/* Enhanced Tech stack section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-6"
        >
          <div className="text-xs font-mono text-gray-500 mb-3 flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-800/50"></div>
            <span>TECH STACK</span>
            <div className="flex-1 h-px bg-gray-800/50"></div>
          </div>
          <div className="flex flex-wrap gap-3">
            {TECH_STACK.map((tech, i) => (
              <motion.div
                key={tech.name}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900/70 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-gray-700 transition-all shadow-sm hover:shadow-md hover:shadow-gray-900/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <div className="text-lg">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}