'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="glass px-4 py-2 rounded-full inline-block">
            <p className="text-sm font-medium bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              🌾 Powered by Google Gemma AI
            </p>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block text-white">Smarter Farming</span>
          <span className="gradient-text block">Starts with AI</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Make better farming decisions with real-time weather forecasts, live crop market prices, and AI-powered recommendations from Google Gemma
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-8 py-6 text-lg font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all glow-emerald"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 rounded-lg px-8 py-6 text-lg font-semibold"
          >
            <Play className="mr-2 h-5 w-5" />
            Live Demo
          </Button>
        </motion.div>

        {/* Hero Illustration */}
        <motion.div
          variants={itemVariants}
          className="relative mx-auto max-w-3xl"
        >
          <div className="glass-card">
            <div className="grid grid-cols-3 gap-4">
              {/* Weather Widget */}
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">☁️</div>
                <p className="text-xs text-gray-400">Weather</p>
                <p className="text-sm font-semibold text-white">28°C</p>
              </div>

              {/* Price Widget */}
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">📈</div>
                <p className="text-xs text-gray-400">Market Price</p>
                <p className="text-sm font-semibold text-white">₹45.20</p>
              </div>

              {/* AI Widget */}
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🤖</div>
                <p className="text-xs text-gray-400">AI Score</p>
                <p className="text-sm font-semibold text-emerald-400">92%</p>
              </div>

              {/* Chart area */}
              <div className="col-span-3 glass rounded-xl p-4 h-32 flex items-end justify-around">
                <div className="w-8 h-16 bg-gradient-to-t from-emerald-500/50 to-emerald-500 rounded-t-lg"></div>
                <div className="w-8 h-20 bg-gradient-to-t from-cyan-500/50 to-cyan-500 rounded-t-lg"></div>
                <div className="w-8 h-12 bg-gradient-to-t from-blue-500/50 to-blue-500 rounded-t-lg"></div>
                <div className="w-8 h-24 bg-gradient-to-t from-emerald-500/50 to-emerald-500 rounded-t-lg"></div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-8 -right-8 w-20 h-20 glass rounded-full flex items-center justify-center text-3xl glow-emerald"
          >
            🌱
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute -bottom-8 -left-8 w-20 h-20 glass rounded-full flex items-center justify-center text-3xl glow-cyan"
          >
            💧
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
