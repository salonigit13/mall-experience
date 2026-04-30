import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { retailContent } from '../content/retail'
import { useModalStore } from '../store/modal.store'

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

function AnimatedStat({ value, suffix, label, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="text-center"
    >
      <div className="font-display text-4xl md:text-6xl text-champagne-solid mb-2">
        {isInView ? (
          <Counter value={value} suffix={suffix} />
        ) : (
          <>0{suffix}</>
        )}
      </div>
      <div className="font-sans text-[#7a7a7a] text-sm tracking-widest uppercase">
        {label}
      </div>
    </motion.div>
  )
}

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [value])
  
  return <>{count}{suffix}</>
}

export default function Retail() {
  const openModal = useModalStore((state) => state.openModal)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="min-h-screen bg-[#FDFDFB]">
      {/* Hero - Dark */}
      <section id="retail" className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={retailContent.hero.image}
          alt={retailContent.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]/90" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-8"
        >
          <div className="w-16 h-px bg-champagne mx-auto mb-8" />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#FDFDFB] mb-6">
            {retailContent.hero.title}
          </h1>
          <p className="font-sans text-[#FDFDFB]/70 text-lg tracking-wider max-w-2xl mx-auto">
            {retailContent.hero.subtitle}
          </p>
          <div className="w-16 h-px bg-champagne mx-auto mt-8" />
        </motion.div>

        <Link
          to="/hub"
          className="absolute top-32 left-8 font-sans text-[#FDFDFB]/50 text-sm tracking-widest hover:text-champagne transition-colors"
        >
          ← BACK TO HUB
        </Link>
      </section>

      {/* Story Sections - Light */}
      <section id="retail-story" className="py-32 bg-[#FDFDFB]">
        <div className="container mx-auto px-8">
          {retailContent.story.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={sectionVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-16 mb-32`}
            >
              <motion.div variants={itemVariants} className="flex-1">
                <div className="aspect-[16/10] overflow-hidden shadow-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex-1">
                <div className="w-12 h-px bg-champagne mb-6" />
                <h2 className="font-display text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                  {item.title}
                </h2>
                <p className="font-sans text-[#4a4a4a] text-lg leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats - Light Alt */}
      <section id="retail-stats" className="py-32 bg-[#F5F5F0]">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {retailContent.stats.map((stat, i) => (
              <AnimatedStat key={i} {...stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Dark */}
      <section id="retail-cta" className="py-32 bg-[#0a0a0a]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-8 text-center"
        >
          <div className="w-16 h-px bg-champagne mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-5xl text-[#FDFDFB] mb-6">
            {retailContent.cta.title}
          </h2>
          <p className="font-sans text-[#FDFDFB]/50 text-lg mb-10 max-w-xl mx-auto">
            {retailContent.cta.description}
          </p>
          <button
            onClick={() => openModal('lease')}
            className="px-10 py-4 bg-champagne text-[#0a0a0a] font-sans text-sm tracking-widest hover:bg-champagne-light transition-colors"
          >
            {retailContent.cta.button}
          </button>
          <div className="w-16 h-px bg-champagne mx-auto mt-8" />
        </motion.div>
      </section>
    </div>
  )
}