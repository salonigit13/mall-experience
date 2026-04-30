import { useEffect, useState, useRef } from 'react'
import { useInView, motion } from 'framer-motion'

export default function StatCounter({ value, suffix = '', prefix = '', label, index = 0 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="font-serif text-5xl md:text-7xl lg:text-8xl text-champagne mb-2">
        {prefix}
        <span className="inline-block min-w-[80px]">{count.toLocaleString()}</span>
        {suffix}
      </div>
      <p className="text-onyx/60 text-lg tracking-wide">{label}</p>
    </motion.div>
  )
}