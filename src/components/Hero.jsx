import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.13, duration: 0.55, ease: 'easeOut' } }),
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-pastel-lavender opacity-40 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-pastel-teal opacity-30 blur-3xl" />
        <div className="absolute top-1/2 left-10 w-64 h-64 rounded-full bg-pastel-pink opacity-25 blur-3xl" />
      </div>

      <div className="section-wrapper w-full !py-8 md:!py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center gap-6">

          {/* Profile photo — plain, no decoration */}
          <div className="flex justify-center lg:order-2">
            <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img src="/images/riya.jpg" alt="Riya Sinha" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Text content */}
          <div className="lg:order-1 text-center lg:text-left">
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={0}
              className="section-label mb-3 inline-block"
            >
              👋 Hello, I&apos;m
            </motion.div>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-2"
            >
              <span className="gradient-text">Riya Sinha</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="text-base sm:text-lg text-brand-dark font-bold mb-4"
            >
              AI/ML Engineer &amp; Full‑Stack Developer
            </motion.p>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="text-sm sm:text-base text-brand-dark font-medium leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0"
            >
              B.Tech CSE student at Lovely Professional University, passionate about building 
              intelligent AI systems and full-stack applications — from deep learning healthcare 
              tools to GenAI-powered assistants. Always learning, always building.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={4}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold text-sm shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects ↓
              </a>
              <a
                href="#resume"
                className="px-5 py-2.5 rounded-xl border-2 border-brand-primary text-brand-primary font-bold text-sm hover:bg-blue-50 transition-all duration-200"
              >
                Download Resume
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={5}
              className="mt-7 flex gap-7 justify-center lg:justify-start"
            >
              {[
                { num: '3+', label: 'Projects Deployed' },
                { num: '4+', label: 'Certifications' },
                { num: '1',  label: 'Hackathon Award' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-xl sm:text-2xl font-display font-bold gradient-text">{stat.num}</div>
                  <div className="text-xs text-brand-dark font-semibold mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}