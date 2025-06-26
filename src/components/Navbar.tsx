'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navLinks = [
  { name: 'Home', color: 'from-pink-500 to-rose-500' },
  { name: 'About', color: 'from-amber-400 to-orange-500' },
  { name: 'Skills', color: 'from-emerald-400 to-teal-600' },
  { name: 'Projects', color: 'from-violet-500 to-indigo-600' },
  { name: 'Achievements', color: 'from-cyan-400 to-blue-600' },
  { name: 'Contact', color: 'from-purple-400 to-fuchsia-600' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const [hoveredLink, setHoveredLink] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      
      const sections = document.querySelectorAll('section')
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 100) {
          setActiveLink(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800/50' : 'bg-transparent'
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2"
      >
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 animate-pulse"></div>
        <Link 
          href="/" 
          className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text hover:bg-gradient-to-l transition-all duration-500"
        >
          Shantanu
        </Link>
      </motion.div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-1">
        {navLinks.map(({name, color}) => {
          const lowerLink = name.toLowerCase()
          return (
            <motion.a
              key={name}
              href={`#${lowerLink}`}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeLink === lowerLink 
                  ? `text-transparent bg-gradient-to-r ${color} bg-clip-text`
                  : 'text-gray-400 hover:text-white'
              }`}
              onMouseEnter={() => setHoveredLink(lowerLink)}
              onMouseLeave={() => setHoveredLink('')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {name}
              {(activeLink === lowerLink || hoveredLink === lowerLink) && (
                <motion.span 
                  layoutId="nav-pill"
                  className={`absolute inset-0 rounded-full -z-10 ${
                    activeLink === lowerLink ? 'bg-gray-800/40' : 'bg-gray-800/20'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
                />
              )}
              {activeLink === lowerLink && (
                <motion.span 
                  layoutId="nav-underline"
                  className={`absolute left-1/4 bottom-0 h-[2px] w-1/2 bg-gradient-to-r ${color}`}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.a>
          )
        })}
      </div>

      {/* Mobile menu button */}
      <motion.button 
        className="md:hidden p-2 rounded-md group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="relative">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
              className="stroke-gray-400 group-hover:stroke-white transition-colors"
            />
          </svg>
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 -z-10"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.button>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-full bg-gray-900 shadow-md flex flex-col items-start px-6 py-4 md:hidden z-40"
        >
          {navLinks.map(({ name, color }) => {
            const lowerLink = name.toLowerCase()
            return (
              <a
                key={name}
                href={`#${lowerLink}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full py-2 text-sm font-medium transition-all duration-300 ${
                  activeLink === lowerLink
                    ? `text-transparent bg-gradient-to-r ${color} bg-clip-text`
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {name}
              </a>
            )
          })}
        </motion.div>
      )}
    </motion.nav>
  )
}
