import React from 'react'
import { motion } from 'framer-motion'

/**
 * About — Background, interests and passion statement.
 */

const highlights = [
  { icon: '🎓', label: 'B.Tech CSE', sub: 'Lovely Professional University' },
  { icon: '📍', label: 'Phagwara, Punjab', sub: 'Currently Studying' },
  { icon: '🤖', label: 'AI / ML Focus', sub: 'Deep Learning & GenAI' },
  { icon: '💻', label: 'Full Stack Dev', sub: 'MERN · FastAPI · React' },
]

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* <span className="section-label">Who I Am</span> */}
          <h2 className="section-heading">About <em>Me</em></h2>
          <div className="soft-divider mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-brand-dark/80 leading-relaxed"
          >
            <p>
              Hi! I&apos;m <strong className="text-brand-dark">Riya Sinha</strong>, a passionate Computer Science 
              Engineer at Lovely Professional University, Phagwara. I specialise in 
              <strong className="text-brand-accent"> Artificial Intelligence, Machine Learning, and Full‑Stack Development</strong>.
            </p>
            <p>
              My journey started with curiosity — wondering how machines can learn, reason, and 
              create. That curiosity has led me to build everything from a deep-learning sleep apnea 
              detector to a GenAI-powered travel planner with an agentic architecture.
            </p>
            <p>
              I&apos;m deeply interested in <strong className="text-brand-primary">Generative AI, RAG pipelines, and 
              deploying intelligent systems</strong> that solve real problems. I love bridging the gap 
              between cutting-edge AI research and production-ready applications.
            </p>
            <p>
              Beyond code, I enjoy contributing to open-source projects, mentoring peers, and 
              staying updated with the latest in AI — because in this field, the learning never stops.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card text-center group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">{h.icon}</div>
                <div className="font-semibold text-brand-dark text-sm">{h.label}</div>
                <div className="text-xs text-brand-muted mt-1">{h.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
