import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isEntry = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Hide navigation on entry page
  if (isEntry) return null

  const navItems = [
    { path: '/hub', label: 'Home', anchor: null },
    { path: '/why', label: 'Why Dubai Mall', anchor: null },
    { path: '/retail', label: 'Retail', anchor: '#retail' },
    { path: '/luxury', label: 'Luxury', anchor: '#luxury' },
    { path: '/dining', label: 'Dining', anchor: '#dining' },
    { path: '/attractions', label: 'Attractions', anchor: '#attractions' },
    { path: '/events', label: 'Events', anchor: '#events' },
  ]

  const handleAnchorClick = (e, item) => {
    if (item.anchor && location.pathname === item.path) {
      e.preventDefault()
      const element = document.querySelector(item.anchor)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#FDFDFB]/90 backdrop-blur-lg shadow-sm border-b border-[#e5e5e5]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/hub"
            className="flex items-center gap-3 cursor-pointer"
          >
            <span className="font-display text-lg text-[#1a1a1a] tracking-widest">
              DUBAI MALL
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.anchor && location.pathname === item.path ? (
                <a
                  key={item.path}
                  href={item.anchor}
                  onClick={(e) => handleAnchorClick(e, item)}
                  className="text-sm tracking-widest uppercase transition-colors duration-300 text-champagne-solid cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                    location.pathname === item.path 
                      ? 'text-champagne-solid' 
                      : 'text-[#4a4a4a] hover:text-[#1a1a1a]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden w-10 h-10 flex items-center justify-center text-[#1a1a1a]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}