import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { hubContent } from '../content/hub'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.8
    }
  })
}

export default function Hub() {
  return (
    <div className="min-h-screen bg-[#FDFDFB]">

      {/* Hero */}
      <section className="pt-32 pb-20 px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-4">
            {hubContent.title}
          </h1>
          <p className="text-gray-600">
            {hubContent.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Cards */}
      <section className="pb-20 px-6">
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {hubContent.cards.map((card, i) => (
            <motion.div
              key={card.id}
              custom={i}
              variants={cardVariants}
              className="group rounded-lg overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <Link to={card.path}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-60 object-cover"
                />

                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {card.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  )
}