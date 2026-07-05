'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const comparisons = [
  {
    title: 'Real-Time Intelligence',
    icon: '⚡',
    description: 'Live data processing for immediate insights',
    points: ['Instant weather updates', 'Live market prices', 'Real-time alerts'],
  },
  {
    title: 'AI-Powered Insights',
    icon: '🧠',
    description: 'Google Gemma AI for advanced analysis',
    points: ['Pattern recognition', 'Predictive analytics', 'Smart recommendations'],
  },
  {
    title: 'Farmer-First Design',
    icon: '👨‍🌾',
    description: 'Built specifically for Indian farmers',
    points: ['Local language support', 'Regional data', 'Cultural understanding'],
  },
  {
    title: 'Proven Results',
    icon: '📊',
    description: 'Verified outcomes from real farmers',
    points: ['25% yield increase', '₹45Cr in savings', '5000+ active users'],
  },
]

export function WhyCropSenseSection() {
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
            <span className="text-white">Why</span>
            <span className="gradient-text"> CropSense AI</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to compete and succeed
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card group"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{item.icon}</div>

              {/* Title and Description */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                {item.description}
              </p>

              {/* Points */}
              <ul className="space-y-3">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 rounded-2xl transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 glass-card text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Farm?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of Indian farmers who are already using CropSense AI to make smarter decisions and increase their yields
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg shadow-emerald-500/30">
            Start Your Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  )
}
