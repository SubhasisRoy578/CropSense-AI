'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Cotton Farmer',
    location: 'Maharashtra',
    content: 'CropSense AI has transformed my farming decisions. The AI recommendations have increased my yield by 25% this season.',
    avatar: '👨‍🌾',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Wheat Farmer',
    location: 'Punjab',
    content: 'The real-time market prices help me decide the best time to sell. I have saved ₹50,000 just by using the price predictions.',
    avatar: '👩‍🌾',
    rating: 5,
  },
  {
    name: 'Anil Patel',
    role: 'Rice Farmer',
    location: 'Karnataka',
    content: 'Weather predictions are incredibly accurate. I haven\'t had crop losses due to unexpected rain since using CropSense.',
    avatar: '👨‍🌾',
    rating: 5,
  },
  {
    name: 'Meera Singh',
    role: 'Vegetable Farmer',
    location: 'Uttar Pradesh',
    content: 'The multilingual support in my local language makes it so easy to understand. Highly recommend to all farmers!',
    avatar: '👩‍🌾',
    rating: 5,
  },
]

export function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Trusted by</span>
            <span className="gradient-text"> Farmers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real stories from real farmers across India
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card relative"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 italic text-lg">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 text-6xl opacity-10">"</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 text-center"
        >
          <div className="glass-card">
            <p className="text-3xl font-bold gradient-text">5,000+</p>
            <p className="text-gray-400 mt-2">Active Farmers</p>
          </div>
          <div className="glass-card">
            <p className="text-3xl font-bold text-emerald-400">25%</p>
            <p className="text-gray-400 mt-2">Avg Yield Increase</p>
          </div>
          <div className="glass-card md:col-span-1 col-span-2 md:col-span-1">
            <p className="text-3xl font-bold text-cyan-400">₹45 Cr</p>
            <p className="text-gray-400 mt-2">Farmer Savings</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
