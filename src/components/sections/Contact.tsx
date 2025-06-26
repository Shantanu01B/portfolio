'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('This form currently does not send an email. Integrate EmailJS or Formspree to enable sending.')
    // Here you could integrate EmailJS, Formspree, or a backend API.
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
      className="px-6 py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 rounded-full filter blur-3xl mix-blend-multiply dark:mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        >
          Get In Touch
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6 border border-gray-200 dark:border-gray-700"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-1"
            >
              <label htmlFor="name" className="text-sm font-medium text-gray-600 dark:text-gray-300">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                required
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 border border-gray-200 dark:border-gray-600 transition-all"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-1"
            >
              <label htmlFor="email" className="text-sm font-medium text-gray-600 dark:text-gray-300">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                required
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-200 dark:border-gray-600 transition-all"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-1"
            >
              <label htmlFor="message" className="text-sm font-medium text-gray-600 dark:text-gray-300">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hello, I'd like to talk about..."
                required
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 border border-gray-200 dark:border-gray-600 transition-all"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-green-400/30 transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane className="h-4 w-4" />
              Send Message
            </motion.button>
          </motion.form>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-8 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white">
              Connect With Me
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  icon: <FaLinkedin className="text-2xl text-[#0A66C2]" />,
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/shantanu-barge-768790285/",
                  text: "Let's connect professionally"
                },
                {
                  icon: <FaGithub className="text-2xl text-gray-800 dark:text-white" />,
                  name: "GitHub",
                  url: "https://github.com/Shantanu01B",
                  text: "Check out my projects"
                },
                {
                  icon: <FaEnvelope className="text-2xl text-red-500" />,
                  name: "Email",
                  url: "mailto:shantanubarge2005@gmail.com",
                  text: "shantanubarge2005@gmail.com"
                }
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{item.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.text}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
