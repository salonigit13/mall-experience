import { motion } from 'framer-motion'

export default function BrandGrid({ brands, columns = 4 }) {
  const gridCols = {
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
  }

  return (
    <div className={`grid ${gridCols[columns] || gridCols[4]} gap-6`}>
      {brands.map((brand, index) => (
        <motion.div
          key={brand.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="group relative aspect-square bg-marble/50 rounded-sm overflow-hidden flex items-center justify-center"
        >
          <img
            src={brand.logo || brand.image}
            alt={brand.name}
            className="max-w-[60%] max-h-[60%] object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
          />
          <div className="absolute inset-0 border border-onyx/0 group-hover:border-onyx/10 transition-all duration-300" />
        </motion.div>
      ))}
    </div>
  )
}