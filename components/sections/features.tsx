'use client'

import { motion } from 'framer-motion'
import { Zap, Cloud, TrendingUp, Lightbulb, Globe, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'AI Crop Intelligence',
    description: 'Get personalized insights powered by Google Gemma AI for optimal crop selection and management',
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    icon: Cloud,
    title: 'Weather Prediction',
    description: 'Accurate 15-day weather forecasts to plan irrigation and farming activities',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Live Market Prices',
    description: 'Real-time crop market prices across major trading centers in India',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Lightbulb,
    title: 'Smart Recommendations',
    description: 'Context-aware suggestions based on your location, weather, and market trends',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Globe,
    title: 'Multi-language Support',
    description: 'Access insights in your local language with full regional support',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: BarChart3,
    title: 'Data Visualization',
    description: 'Beautiful dashboards and charts to track performance metrics',
    gradient: 'from-purple-500 to-pink-500',
  },
]

export function FeaturesSection() {
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
            <span className="text-white">Powerful</span>
            <span className="gradient-text"> Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to make smarter farming decisions
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group glass-card relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} text-white mb-4 relative z-10`}>
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-400 relative z-10">
                  {feature.description}
                </p>

                {/* Hover effect - glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
