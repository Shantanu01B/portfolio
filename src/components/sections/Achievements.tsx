'use client'

import { motion } from 'framer-motion'
import { FaMedal, FaBriefcase, FaCodeBranch, FaTrophy } from 'react-icons/fa'

const achievements = [
  {
    title: 'Finalist - Hackathon @ PCCOER',
    icon: FaTrophy,
    description: 'Built a MERN stack app with team for sustainable development – awarded top 5 rank.',
    year: '2024',
  },
  {
    title: 'Editorial Head - Coding Club',
    icon: FaCodeBranch,
    description: 'Led the team in writing, reviewing and publishing coding content and challenges.',
    year: '2023–2024',
  },
  {
    title: 'Completed 100+ DSA Problems',
    icon: FaMedal,
    description: 'Solved over 100+ problems on LeetCode and GFG in C++ and JavaScript.',
    year: '2023',
  },
]

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="px-6 py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-400 rounded-full filter blur-3xl mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl mix-blend-multiply dark:mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        >
          Activities & Achievements
        </motion.h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-6 items-start border border-gray-200 dark:border-gray-700">
                <div className="p-3 rounded-lg bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-700 dark:to-gray-800 shadow-inner">
                  <item.icon className="text-2xl text-green-500 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}