import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function VideoHero({ 
  videoUrl = "https://cdn.coverr.co/videos/coverr-aerial-view-of-dubai-skyline-4657/1080p.mp4",
  posterUrl = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80",
  headline = "Dubai Mall",
  subtext = "The World's Most Visited Shopping & Entertainment Destination",
  ctaText = "Explore",
  ctaPath = "/hub"
}) {
  const navigate = useNavigate()

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={posterUrl}
          className="w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/50 via-onyx/30 to-onyx/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/20 via-transparent to-onyx/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-champagne text-sm tracking-[0.5em] uppercase mb-6 font-sans"
        >
          Welcome to
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-center text-pearl mb-6 tracking-tight"
        >
          {headline}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg md:text-xl text-pearl/70 text-center max-w-2xl mb-12 font-light font-sans"
        >
          {subtext}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate(ctaPath)}
          className="px-10 py-4 bg-champagne text-onyx font-semibold text-lg tracking-[0.15em] uppercase hover:bg-champagne-light transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {ctaText}
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-pearl/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-pearl/30 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  )
}