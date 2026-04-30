import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ModuleCard({ item, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link to={item.path} className="block group">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          {/* Background Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-onyx/50 group-hover:bg-onyx/70 transition-colors duration-500" />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 gradient-overlay-dark" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <motion.span 
              className="text-champagne text-sm tracking-[0.2em] uppercase mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {item.subtitle}
            </motion.span>
            
            <motion.h3 
              className="font-serif text-3xl md:text-4xl text-pearl group-hover:text-champagne transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              {item.title}
            </motion.h3>
            
            {/* Arrow indicator */}
            <motion.div 
              className="absolute top-1/2 right-8 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500"
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                className="text-champagne"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
          
          {/* Border effect on hover */}
          <div className="absolute inset-4 border border-pearl/0 group-hover:border-pearl/30 transition-all duration-500" />
        </div>
      </Link>
    </motion.div>
  )
}