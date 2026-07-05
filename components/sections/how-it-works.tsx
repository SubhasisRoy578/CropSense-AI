'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Input Your Data',
    description: 'Enter your location, crop type, and farming details',
    icon: '📍',
  },
  {
    number: '02',
    title: 'Data Processing',
    description: 'We process real-time weather and market data',
    icon: '⚙️',
  },
  {
    number: '03',
    title: 'Gemma AI Analysis',
    description: 'Google Gemma AI analyzes patterns and trends',
    icon: '🤖',
  },
  {
    number: '04',
    title: 'Smart Recommendations',
    description: 'Get actionable insights tailored to your farm',
    icon: '✨',
  },
]

export function HowItWorksSection() {
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
            <span className="text-white">How It</span>
            <span className="gradient-text"> Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Four simple steps to smarter farming
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 opacity-20"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Card */}
                <div className="glass-card group">
                  {/* Step Number Circle */}
                  <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white text-sm">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4 mt-2">{step.icon}</div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>

                {/* Arrow between items */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-32 -right-8 text-cyan-500/50">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            Start your journey to smarter farming today
          </p>
          <button className="glass px-8 py-4 rounded-lg text-white font-semibold hover:bg-white/20 transition-all">
            Get Started Free
          </button>
        </motion.div>
      </div>
    </section>
  )
}
