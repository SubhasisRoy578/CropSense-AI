'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ChevronDown } from 'lucide-react'

const weatherData = [
  { day: 'Mon', temp: 28, rain: 20 },
  { day: 'Tue', temp: 29, rain: 15 },
  { day: 'Wed', temp: 27, rain: 35 },
  { day: 'Thu', temp: 26, rain: 40 },
  { day: 'Fri', temp: 28, rain: 10 },
  { day: 'Sat', temp: 30, rain: 5 },
  { day: 'Sun', temp: 31, rain: 0 },
]

const priceData = [
  { date: 'Day 1', price: 42 },
  { date: 'Day 2', price: 43 },
  { date: 'Day 3', price: 41 },
  { date: 'Day 4', price: 45 },
  { date: 'Day 5', price: 44 },
  { date: 'Day 6', price: 46 },
  { date: 'Day 7', price: 47 },
]

export function DashboardPreviewSection() {
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
            <span className="text-white">Your AI</span>
            <span className="gradient-text"> Dashboard</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            All the information you need in one beautiful interface
          </p>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card"
        >
          {/* Header */}
          <div className="border-b border-white/10 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Dashboard</h3>
                <p className="text-gray-400 text-sm">Maharashtra • Cotton</p>
              </div>
              <div className="flex gap-3">
                <div className="w-full sm:w-40 relative">
                  <select className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 appearance-none cursor-pointer pr-8">
                    <option value="maharashtra">Maharashtra</option>
                    <option value="punjab">Punjab</option>
                    <option value="karnataka">Karnataka</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
                <div className="w-full sm:w-40 relative">
                  <select className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 appearance-none cursor-pointer pr-8">
                    <option value="cotton">Cotton</option>
                    <option value="wheat">Wheat</option>
                    <option value="rice">Rice</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="glass rounded-xl p-4">
              <p className="text-gray-400 text-sm mb-2">Today&apos;s Temp</p>
              <p className="text-2xl font-bold text-white">28°C</p>
            </div>
            <div className="glass rounded-xl p-4">
              <p className="text-gray-400 text-sm mb-2">Humidity</p>
              <p className="text-2xl font-bold text-cyan-400">65%</p>
            </div>
            <div className="glass rounded-xl p-4">
              <p className="text-gray-400 text-sm mb-2">Risk Level</p>
              <p className="text-2xl font-bold text-yellow-400">Medium</p>
            </div>
            <div className="glass rounded-xl p-4">
              <p className="text-gray-400 text-sm mb-2">AI Score</p>
              <p className="text-2xl font-bold text-emerald-400">92%</p>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Weather Chart */}
            <div className="glass rounded-xl p-4">
              <h4 className="text-white font-semibold mb-4">7-Day Weather Forecast</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={weatherData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip contentStyle={{ background: 'rgba(15, 23, 42, 0.8)', border: 'none', borderRadius: '8px', color: '#fff' }} />
                  <Bar dataKey="temp" fill="#10b981" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Price Trend Chart */}
            <div className="glass rounded-xl p-4">
              <h4 className="text-white font-semibold mb-4">Market Price Trend</h4>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip contentStyle={{ background: 'rgba(15, 23, 42, 0.8)', border: 'none', borderRadius: '8px', color: '#fff' }} />
                  <Line type="monotone" dataKey="price" stroke="#06b6d4" strokeWidth={3} dot={{ fill: '#06b6d4', r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recommendation Card */}
          <div className="mt-6 glass rounded-xl p-6 border-l-4 border-emerald-500">
            <h4 className="text-white font-semibold mb-2">🤖 AI Recommendation</h4>
            <p className="text-gray-300">
              Based on current weather patterns and market trends, it&apos;s an optimal time to plan irrigation for the next 3 days. Expected rainfall on Wednesday (35mm) suggests reducing water input.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
