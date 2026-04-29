import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { entryContent } from '../content/hub'

export default function Entry() {
  const navigate = useNavigate()
  const [showContent, setShowContent] = useState(false)
  const [isSkipped, setIsSkipped] = useState(false)

  useEffect(() => {
    // Check if user previously skipped intro
    const skipped = sessionStorage.getItem('dubaiMallIntroSkipped')
    if (skipped) {
      navigate('/hub')
      return
    }

    // Delay content reveal for cinematic effect
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [navigate])

  const handleEnter = () => {
    navigate('/hub')
  }

  const handleSkip = () => {
    sessionStorage.setItem('dubaiMallIntroSkipped', 'true')
    setIsSkipped(true)
    setTimeout(() => navigate('/hub'), 300)
  }

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] overflow-hidden">
      {/* Background Video - Full Screen Cinematic */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        {/* Video element with autoplay, muted, loop */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
        >
          {/* Using a free stock video of luxury mall/interior - replace with your own video */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-shopping-center-interior-4434-large.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]/40" />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-8 left-8 w-px h-32 bg-champagne/30" />
      <div className="absolute top-8 right-8 w-px h-32 bg-champagne/30" />
      <div className="absolute bottom-8 left-8 w-32 h-px bg-champagne/30" />
      <div className="absolute bottom-8 right-8 w-32 h-px bg-champagne/30" />

      {/* Content */}
      <AnimatePresence>
        {showContent && !isSkipped && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10 flex flex-col items-center justify-center h-full px-8"
          >
            {/* Logo */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="font-display text-5xl md:text-7xl lg:text-9xl text-[#FDFDFB] tracking-[0.3em] mb-6"
            >
              {entryContent.logo}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="font-display-sm text-champagne text-xl md:text-2xl lg:text-3xl tracking-widest mb-4"
            >
              {entryContent.tagline}
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-[#FDFDFB]/60 text-sm md:text-base tracking-wider mb-16"
            >
              {entryContent.subtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col md:flex-row gap-6"
            >
              <button
                onClick={handleEnter}
                className="px-12 py-4 bg-champagne text-[#0a0a0a] font-sans text-sm tracking-widest hover:bg-champagne-light transition-colors duration-300"
              >
                {entryContent.enterButton}
              </button>
              <button
                onClick={handleSkip}
                className="px-12 py-4 border border-[#FDFDFB]/20 text-[#FDFDFB]/70 font-sans text-sm tracking-widest hover:border-champagne hover:text-champagne transition-colors duration-300"
              >
                {entryContent.skipButton}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-[#FDFDFB]/10 overflow-hidden">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="w-full bg-champagne"
          />
        </div>
      </motion.div>
    </div>
  )
}