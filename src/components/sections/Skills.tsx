'use client'

import { motion } from 'framer-motion'
import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPostman,
  SiVercel,
  SiRender,
  SiOpenai,
  SiAuth0,
  SiJsonwebtokens,
  SiNextdotjs
} from 'react-icons/si'

const categories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C++', icon: SiCplusplus, color: 'text-blue-500' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'Python', icon: SiPython, color: 'text-blue-400' }
    ]
  },
  {
    title: 'Web & Frameworks',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
      { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
      { name: 'ReactJS', icon: SiReact, color: 'text-cyan-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
      { name: 'NodeJS', icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'ExpressJS', icon: SiExpress, color: 'text-gray-600' },
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-400' }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-700' }
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: SiGit, color: 'text-red-600' },
      { name: 'Postman', icon: SiPostman, color: 'text-orange-600' },
      { name: 'Vercel', icon: SiVercel, color: 'text-black dark:text-white' },
      { name: 'Render', icon: SiRender, color: 'text-indigo-500' }
    ]
  },
  {
    title: 'APIs & Auth',
    skills: [
      { name: 'OpenAI', icon: SiOpenai, color: 'text-purple-500' },
      { name: 'Gemini AI', icon: SiOpenai, color: 'text-purple-400' },
      { name: 'JWT', icon: SiJsonwebtokens, color: 'text-pink-500' },
      { name: 'OAuth', icon: SiAuth0, color: 'text-orange-500' }
    ]
  }
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-16 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
      >
        My Skills
      </motion.h2>

      <div className="space-y-20">
        {categories.map((category, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            {/* Centered Title */}
            <h3 className="text-xl font-semibold mb-8 text-center">
              {category.title}
            </h3>

            {/* Centered Skill Grid */}
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 max-w-5xl">
              {category.skills.map(({ name, icon: Icon, color }, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-2 w-24 cursor-default"
                >
                  <Icon
                    className={`w-12 h-12 ${color} transition-transform duration-300 transform hover:scale-110`}
                  />
                  <p className="text-sm font-medium text-center">{name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
