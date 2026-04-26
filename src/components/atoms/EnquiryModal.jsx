import { motion, AnimatePresence } from 'framer-motion'
import { useModalStore } from '../../store/modal.store'

export default function EnquiryModal() {
  const { isOpen, modalType, closeModal } = useModalStore()

  const getTitle = () => {
    switch (modalType) {
      case 'lease':
        return 'Lease Space'
      case 'partner':
        return 'Partner With Us'
      case 'book':
        return 'Book a Visit'
      default:
        return 'Get in Touch'
    }
  }

  const getDescription = () => {
    switch (modalType) {
      case 'lease':
        return 'Explore premium retail spaces in Dubai Mall. Our leasing team will contact you within 24 hours.'
      case 'partner':
        return 'Join our network of strategic partners. Tell us about your brand and we\'ll be in touch.'
      case 'book':
        return 'Schedule a private tour of Dubai Mall with our dedicated team.'
      default:
        return 'Fill in your details and we\'ll be in touch.'
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-onyx/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-silk border border-onyx/10 rounded-sm overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 border-b border-onyx/10">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-3xl text-onyx">{getTitle()}</h2>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 flex items-center justify-center text-onyx/60 hover:text-onyx transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-onyx/60 mt-2">{getDescription()}</p>
            </div>

            {/* Form */}
            <form className="p-8 space-y-6" onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-onyx/60 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-pearl border border-onyx/10 text-onyx focus:border-champagne focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm text-onyx/60 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-pearl border border-onyx/10 text-onyx focus:border-champagne focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-onyx/60 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-pearl border border-onyx/10 text-onyx focus:border-champagne focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm text-onyx/60 mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-pearl border border-onyx/10 text-onyx focus:border-champagne focus:outline-none transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-sm text-onyx/60 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-pearl border border-onyx/10 text-onyx focus:border-champagne focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-champagne text-onyx font-semibold text-lg tracking-wide uppercase hover:bg-champagne-light transition-colors duration-300"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}