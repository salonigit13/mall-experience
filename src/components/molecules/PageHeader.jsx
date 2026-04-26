import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PageHeader({ title, subtitle, image, showBack = true }) {
  return (
    <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-onyx/50" />
          <div className="absolute inset-0 gradient-overlay-dark" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        {showBack && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-24 left-6 md:left-12"
          >
            <Link
              to="/hub"
              className="flex items-center gap-2 text-pearl/60 hover:text-champagne transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span className="text-sm tracking-wider uppercase">Back to Hub</span>
            </Link>
          </motion.div>
        )}

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-champagne text-sm tracking-[0.3em] uppercase mb-4"
        >
          {subtitle}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-pearl text-center"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  )
}