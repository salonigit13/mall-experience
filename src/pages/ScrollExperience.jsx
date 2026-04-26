import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Section components
function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToNext = () => {
    const nextSection = document.getElementById('why-dubai-mall')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" ref={ref} className="relative h-screen w-full overflow-hidden snap-start">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80')" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm tracking-[0.3em] text-[#CBB38A] mb-4 uppercase"
        >
          Welcome To
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif font-light tracking-wide"
        >
          Dubai Mall
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl font-light"
        >
          The World's Most Visited Shopping & Entertainment Destination
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToNext}
          className="mt-10 px-10 py-4 bg-[#CBB38A] text-black font-medium tracking-widest uppercase text-sm hover:bg-[#b89a6f] transition-all duration-300"
        >
          Explore
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function WhyDubaiMallSection() {
  const stats = [
    { value: "80M+", label: "Annual Visitors" },
    { value: "1,200+", label: "Retail Stores" },
    { value: "200+", label: "F&B Outlets" },
    { value: "70+", label: "Dining Options" },
  ]

  return (
    <section id="why-dubai-mall" className="relative h-screen w-full flex items-center justify-center overflow-hidden snap-start">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white font-light">
            Why Dubai Mall
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Experience the world's premier shopping destination
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-serif text-[#CBB38A] font-light">
                {stat.value}
              </div>
              <div className="mt-2 text-gray-400 text-sm tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Spanning over 5 million sq ft of retail space, Dubai Mall offers an unparalleled 
            shopping experience with luxury brands, flagship stores, and unique attractions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function RetailSection() {
  const features = [
    "Fashion & Apparel",
    "Electronics & Tech",
    "Home & Living",
    "Sports & Lifestyle"
  ]

  return (
    <section id="retail" className="relative h-screen w-full flex items-center overflow-hidden snap-start">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white font-light">
              Retail
            </h2>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              Discover over 1,200 retail stores featuring the world's most coveted brands. 
              From high-street fashion to luxury boutiques, find everything under one roof.
            </p>
            <ul className="mt-8 space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="w-2 h-2 bg-[#CBB38A] rounded-full"></span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="hidden md:block"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
              <div className="text-7xl font-serif text-[#CBB38A]">1,200+</div>
              <div className="mt-2 text-white uppercase tracking-widest text-sm">Retail Stores</div>
              <div className="mt-6 text-gray-400">
                Including flagship stores of renowned international brands
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function LuxurySection() {
  const brands = ["Louis Vuitton", "Gucci", "Prada", "Chanel", "Cartier", "Burberry"]

  return (
    <section id="luxury" className="relative h-screen w-full flex items-center overflow-hidden snap-start">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white font-light">
              Luxury
            </h2>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              Indulge in an exclusive collection of the world's finest luxury brands. 
              Experience premium shopping at its most refined.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="py-3 px-4 border border-white/20 text-white text-sm tracking-wider text-center"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="hidden md:block"
          >
            <div className="text-center">
              <div className="text-8xl font-serif text-[#CBB38A]">150+</div>
              <div className="mt-2 text-white uppercase tracking-widest text-sm">Luxury Brands</div>
              <div className="mt-6 text-gray-400 max-w-sm mx-auto">
                Flagship boutiques of the world's most prestigious fashion houses
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function DiningSection() {
  const cuisines = [
    { name: "International", count: "50+" },
    { name: "Asian", count: "40+" },
    { name: "Middle Eastern", count: "25+" },
    { name: "Cafés & Bakeries", count: "60+" }
  ]

  return (
    <section id="dining" className="relative h-screen w-full flex items-center overflow-hidden snap-start">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white font-light">
            Dining
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
            Savor culinary excellence with over 200 dining options from around the globe
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cuisines.map((cuisine, index) => (
            <motion.div
              key={cuisine.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 text-center"
            >
              <div className="text-3xl font-serif text-[#CBB38A]">{cuisine.count}</div>
              <div className="mt-2 text-white text-sm tracking-wider">{cuisine.name}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            From fine dining restaurants to casual cafés, find your perfect culinary journey
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function AttractionsSection() {
  const attractions = [
    {
      title: "Dubai Aquarium",
      description: "One of the largest indoor aquariums in the world",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
    },
    {
      title: "Dubai Ice Rink",
      description: "Olympic-sized ice skating rink",
      image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=800&q=80"
    },
    {
      title: "VR Park",
      description: "Cutting-edge virtual reality experiences",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80"
    },
    {
      title: "Reel Cinemas",
      description: "22-screen state-of-the-art cinema complex",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80"
    }
  ]

  return (
    <section id="attractions" className="relative h-screen w-full flex items-center overflow-hidden snap-start">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('/images/attractions_bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white font-light">
            Attractions
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
            Beyond shopping — experience world-class entertainment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction, index) => (
            <motion.div
              key={attraction.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-64 overflow-hidden group"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${attraction.image}')`,
                }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-xl font-serif text-white">{attraction.title}</h3>
                <p className="mt-2 text-gray-300 text-sm">{attraction.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EventsSection() {
  return (
    <section id="events" className="relative h-screen w-full flex items-center overflow-hidden snap-start">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white font-light">
              Events
            </h2>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              Throughout the year, Dubai Mall hosts spectacular events, celebrity appearances, 
              and exclusive launches that transform shopping into an unforgettable experience.
            </p>
            
            <div className="mt-8 space-y-4">
              {["Seasonal Festivals", "Celebrity Appearances", "Fashion Weeks", "Art Exhibitions"].map((event, index) => (
                <motion.div
                  key={event}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-[#CBB38A]/20 border border-[#CBB38A]/40">
                    <span className="text-[#CBB38A] text-xl">★</span>
                  </div>
                  <span className="text-white">{event}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="hidden md:block"
          >
            <div className="bg-gradient-to-br from-[#CBB38A]/30 to-transparent p-10 border border-[#CBB38A]/30">
              <div className="text-5xl font-serif text-white mb-4">
                500+
              </div>
              <div className="text-[#CBB38A] uppercase tracking-widest text-sm">
                Annual Events
              </div>
              <p className="mt-4 text-gray-400">
                From global product launches to cultural celebrations
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="final-cta" className="relative h-screen w-full flex items-center justify-center overflow-hidden snap-start">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white font-light mb-6">
            Begin Your Journey
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Experience the world's most visited shopping destination. 
            Dubai Mall awaits you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-[#CBB38A] text-black font-medium tracking-widest uppercase text-sm hover:bg-[#b89a6f] transition-all duration-300"
            >
              Plan Your Visit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToTop}
              className="px-10 py-4 border border-white text-white font-medium tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              Back to Top
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main ScrollExperience component
export default function ScrollExperience() {
  return (
    <div className="h-screen w-full overflow-y-scroll scroll-smooth" style={{ scrollSnapType: 'y mandatory' }}>
      <HeroSection />
      <WhyDubaiMallSection />
      <RetailSection />
      <LuxurySection />
      <DiningSection />
      <AttractionsSection />
      <EventsSection />
      <FinalCTASection />
    </div>
  )
}