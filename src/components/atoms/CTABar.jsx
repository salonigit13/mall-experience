import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useModalStore } from '../../store/modal.store'
import { ctaButtons } from '../../content/navigation'

export default function CTABar() {
  const { openModal } = useModalStore()
  const location = useLocation()
  
  // Hide on entry page
  if (location.pathname === '/') return null

  const handleClick = (action) => {
    openModal(action)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#FDFDFB]/95 backdrop-blur-lg border-t border-[#e5e5e5] shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-[#7a7a7a] text-sm hidden md:block">
              Ready to experience Dubai Mall?
            </span>
            
            <div className="flex items-center gap-4 ml-auto">
              {ctaButtons.map((button, index) => (
                <motion.button
                  key={button.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleClick(button.action)}
                  className="px-6 py-3 bg-[#B89B6E] text-[#FDFDFB] font-sans text-sm tracking-widest uppercase hover:bg-[#a88a5d] transition-colors duration-300"
                >
                  {button.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}