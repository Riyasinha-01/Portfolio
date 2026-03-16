import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Navbar — Minimal sticky nav.
 * Desktop: horizontal text links with active underline.
 * Mobile: clean slide-down list, no icons, pure text.
 */

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education',    href: '#education' },
  { label: 'Resume',       href: '#resume' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [active, setActive]     = useState('#home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1))
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`) },
        { threshold: 0.35 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-white shadow-sm border-b border-gray-200'
            : 'bg-white/90 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNav('#home')}
            className="font-display text-xl font-bold gradient-text flex-shrink-0"
          >
            Portfolio
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`relative px-3 py-1.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    active === link.href
                      ? 'text-brand-accent bg-violet-50'
                      : 'text-brand-dark hover:text-brand-accent hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-violet-50 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger — clean 3-line */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col justify-center gap-[5px] w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors p-2"
          >
            <span className={`block h-[2px] bg-brand-dark rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : 'w-full'}`} />
            <span className={`block h-[2px] bg-brand-dark rounded-full transition-all duration-300 w-full ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[2px] bg-brand-dark rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : 'w-3/4'}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu — minimal slide-down panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-40 bg-black/20 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-16 left-0 right-0 z-50 lg:hidden bg-white border-b border-gray-200 shadow-md"
            >
              <ul className="max-w-6xl mx-auto px-5 py-3 grid grid-cols-3 gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => handleNav(link.href)}
                      className={`block text-center py-2 px-1 rounded-lg text-sm font-semibold transition-all duration-150 ${
                        active === link.href
                          ? 'bg-violet-100 text-brand-accent'
                          : 'text-brand-dark hover:bg-gray-50 hover:text-brand-accent'
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}