'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 relative overflow-hidden"
    >
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div 
          initial={{ x: -100, y: -100 }}
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl"
        ></motion.div>
      </div>

      {/* Profile Picture with enhanced styling */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative group w-56 h-56 md:w-64 md:h-64 z-10"
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-400 opacity-20 group-hover:opacity-30 transition-opacity duration-500 -rotate-3 scale-105" />
        <div className="relative h-full w-full rounded-xl overflow-hidden border-2 border-gray-800/50 group-hover:border-blue-500/30 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/10 bg-gray-900">
          <Image
            src="/profile.jpg"
            alt="Shantanu Barge - Full Stack Developer"
            fill
            className="object-contain p-2 grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 ease-in-out"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="absolute -bottom-3 -right-3 bg-gray-900/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs text-emerald-400 font-mono border border-gray-700 shadow-sm">
          Full Stack
        </div>
      </motion.div>

      {/* Professional Bio Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl space-y-4 z-10"
      >
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="inline-block px-3 py-1 text-xs font-mono bg-gray-800/70 rounded-full text-blue-400 border border-gray-700 hover:bg-gray-800/90 transition-all duration-300 shadow-sm"
        >
          PROFESSIONAL PROFILE
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            About Me
          </span>
        </h2>

        <div className="space-y-3">
          <p className="text-gray-300 leading-relaxed">
            I'm <span className="text-blue-300 font-medium">Shantanu Barge</span>, a <span className="text-emerald-300 font-medium">Full Stack Engineer</span> with expertise in building scalable web applications and digital platforms.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My technical toolkit includes the <span className="text-amber-300 font-medium">MERN stack</span>, modern frameworks like <span className="text-blue-300 font-medium">Next.js</span>, and <span className="text-purple-300 font-medium">AI/ML integrations</span> including OpenAI and Gemini.
          </p>
        </div>

        <div className="pt-2 space-y-2.5">
          {[
            { text: "Developing AI-powered applications with exceptional user experiences", color: "emerald" },
            { text: "Passionate about clean architecture and performance optimization", color: "blue" },
            { text: "Committed to continuous learning and open-source contributions", color: "purple" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 p-2.5 bg-gray-900/40 rounded-lg hover:bg-gray-900/60 transition-colors duration-300 border border-gray-800/50"
            >
              <div className={`mt-1 h-2 w-2 rounded-full bg-${item.color}-400 flex-shrink-0`} />
              <p className="text-gray-400 text-sm leading-snug">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="pt-4 flex gap-3">
          <motion.a
            href="#skills"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-medium rounded-lg text-sm flex items-center gap-1.5 shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all"
          >
            View Skills
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 border border-gray-700 text-gray-300 font-medium rounded-lg text-sm hover:bg-gray-800/50 hover:border-gray-600 hover:text-white transition-all shadow-md hover:shadow-lg hover:shadow-gray-900/20"
          >
            See Projects
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
