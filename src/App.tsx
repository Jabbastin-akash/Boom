import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import Login from './components/Login'
import StudentDashboardPremium from './components/dashboards/StudentDashboardPremium'
import MentorDashboard from './components/dashboards/MentorDashboard'
import FloorwingDashboard from './components/dashboards/FloorwingDashboard'
import AdminDashboard from './components/dashboards/AdminDashboard'
import SidebarPremium from './components/layout/SidebarPremium'
import Header from './components/layout/Header'

function AppContent() {
  const { user, logout } = useAuth()

  if (!user) {
    return <Login />
  }

  const renderDashboard = () => {
    switch (user.role) {
      case 'student':
        return <StudentDashboardPremium />
      case 'mentor':
        return <MentorDashboard />
      case 'floorwing':
        return <FloorwingDashboard />
      case 'admin':
        return <AdminDashboard />
      default:
        return <StudentDashboardPremium />
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Floating orbs background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-400/15 to-orange-400/15 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <SidebarPremium />
      <div className="flex-1 flex flex-col overflow-hidden relative z-10">
        <Header onLogout={logout} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-transparent p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={user.role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto"
            >
              {renderDashboard()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
