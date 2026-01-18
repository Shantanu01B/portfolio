'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [

  {
    title: 'RationX',
    description:'A smart ration distribution system enabling slot booking, secure verification, and transparent ration delivery.',
    tech: ['MERN', 'JWT', 'QR Code', 'Role-Based Access', 'Tailwind'],
    image: '/projects/rationx.png',
    github: 'https://github.com/Shantanu01B/RationX',
    demo: 'https://ration-x.vercel.app/',
  },

  {
    title: 'Farm2Home',
    description: 'A MERN stack portal enabling farmers to sell fresh produce directly to consumers.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    image: '/projects/farm2home.jpg',
    github: 'https://github.com/Shantanu01B/farm2home-frontend',
    demo: 'https://farm2home-frontend-9krm.vercel.app',
  },
  {
    title: 'GigFlow',
    description:'A mini freelance marketplace where clients post gigs and freelancers bid with real-time updates.',
    tech: ['MERN', 'JWT', 'Socket.io', 'Tailwind'],
    image: '/projects/gigflow.png',
    github: 'https://github.com/Shantanu01B/gigflow',
    demo:'https://gigflow-cyan.vercel.app',
  },

  {
    title: 'LawPal',
    description: 'AI-powered legal document & FIR generator using OpenAI/Gemini.',
    tech: ['Next.js', 'OpenAI', 'Tailwind', 'JWT'],
    image: '/projects/lawpal.png',
    github: 'https://github.com/Shantanu01B/lawpal-frontend',
    demo: 'https://lawpal-frontend.vercel.app',
  },
  {
    title: 'Code Snippet Organizer',
    description: 'React app to organize, tag, and manage code snippets with syntax highlighting.',
    tech: ['React', 'Tailwind', 'LocalStorage'],
    image: '/projects/codesnippet.png',
    github: 'https://github.com/Shantanu01B/code-snippet-organizer',
    
  },
  {
    title: 'Artistly',
    description: 'A stunning frontend project built with Next.js to showcase artistic creativity.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    image: '/projects/artistly.png',
    github: 'https://github.com/Shantanu01B/artistly-frontend',
    demo: 'https://artistly-frontend.vercel.app',
  },
  {
    title: 'Campus Connect',
    description: 'A social platform for students to connect, share events, and collaborate on ideas.',
    tech: ['MERN', 'Socket.io', 'Tailwind'],
    image: '/projects/campusconnect.png',
    github: 'https://github.com/Shantanu01B/Campus-Connect',
    
  },
  /*{
    title: 'Art Gallery',
    description: 'A modern and aesthetic website to showcase an online art/photo gallery with animations.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    image: '/projects/artgallery.png',
    github: 'https://github.com/Shantanu01B/Art-Gallery-Website',
    
  }*/
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        >
          My Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-green-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs rounded-full shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    <FaGithub className="text-lg" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
