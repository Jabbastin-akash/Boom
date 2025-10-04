import React from 'react'
import { motion } from 'framer-motion'
import {
  Home,
  User,
  Users,
  Shield,
  Settings,
  Award,
  TrendingUp,
  Target,
  Bell,
  HelpCircle,
  Sparkles,
  Zap
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

interface SidebarProps {
  className?: string
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const { user } = useAuth()

  const getNavigationItems = () => {
    const baseItems = [
      { icon: Home, label: 'Dashboard', href: '#', active: true },
      { icon: User, label: 'Profile', href: '#', active: false },
      { icon: Bell, label: 'Notifications', href: '#', active: false, badge: '3' },
    ]

    const roleSpecificItems = {
      student: [
        { icon: Award, label: 'Achievements', href: '#', active: false, badge: '5' },
        { icon: TrendingUp, label: 'Progress', href: '#', active: false },
        { icon: Target, label: 'Goals', href: '#', active: false },
      ],
      mentor: [
        { icon: Users, label: 'Students', href: '#', active: false, badge: '24' },
        { icon: TrendingUp, label: 'Analytics', href: '#', active: false },
        { icon: Target, label: 'Milestones', href: '#', active: false },
      ],
      floorwing: [
        { icon: Shield, label: 'Monitoring', href: '#', active: false },
        { icon: TrendingUp, label: 'Analytics', href: '#', active: false },
        { icon: Users, label: 'Management', href: '#', active: false },
      ],
      admin: [
        { icon: Users, label: 'User Management', href: '#', active: false },
        { icon: Shield, label: 'Permissions', href: '#', active: false },
        { icon: TrendingUp, label: 'Reports', href: '#', active: false },
        { icon: Settings, label: 'System Settings', href: '#', active: false },
      ]
    }

    return [
      ...baseItems,
      ...roleSpecificItems[user?.role || 'student']
    ]
  }

  const navigationItems = getNavigationItems()

  const getRoleGradient = () => {
    switch (user?.role) {
      case 'student': return 'from-blue-500 to-cyan-500'
      case 'mentor': return 'from-emerald-500 to-teal-500'
      case 'floorwing': return 'from-purple-500 to-violet-500'
      case 'admin': return 'from-amber-500 to-orange-500'
      default: return 'from-blue-500 to-cyan-500'
    }
  }

  return (
    <motion.div
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-72 bg-gradient-to-br from-slate-900/95 via-gray-900/90 to-slate-800/95 backdrop-blur-xl border-r border-white/10 flex flex-col ${className} relative shadow-2xl`}
    >
      {/* Logo Section */}
      <div className="p-8 border-b border-white/10">
        <motion.div
          className="flex items-center space-x-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className={`w-12 h-12 bg-gradient-to-r ${getRoleGradient()} rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden`}>
            <Sparkles className="w-6 h-6 text-white absolute animate-pulse opacity-50" />
            <Award className="w-7 h-7 text-white z-10" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white drop-shadow-lg">EduDash</h1>
            <p className="text-sm text-gray-200 capitalize flex items-center font-medium drop-shadow-sm">
              <Zap className="w-3 h-3 mr-1" />
              {user?.role} Portal
            </p>
          </div>
        </motion.div>
      </div>

      {/* User Info Card */}
      <motion.div
        className="mx-6 mt-6 p-4 bg-black/30 backdrop-blur-md rounded-2xl border border-white/20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face'}
              alt={user?.name}
              className="w-12 h-12 rounded-xl object-cover border-2 border-white/20"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-sm drop-shadow-sm">{user?.name}</p>
            <p className="text-green-300 text-xs font-medium drop-shadow-sm">Online</p>
          </div>
        </div>
        {user?.role === 'student' && (
          <div className="mt-3 pt-3 border-t border-white/10">
            <div className="flex justify-between text-xs text-white font-semibold mb-1 drop-shadow-sm">
              <span>Level {user.level}</span>
              <span>{user.points} pts</span>
            </div>
            <div className="progress-bar h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "65%" }}
                transition={{ delay: 0.8, duration: 1.2 }}
                className="progress-fill"
              />
            </div>
          </div>
        )}
      </motion.div>

      {/* Navigation */}
      <nav className="flex-1 p-6 space-y-2">
        {navigationItems.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ x: 8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group relative overflow-hidden ${item.active
                  ? 'bg-white/25 text-white shadow-lg border border-white/30 backdrop-blur-md'
                  : 'text-gray-200 hover:bg-white/15 hover:text-white hover:backdrop-blur-md'
                }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className={`w-5 h-5 transition-transform duration-300 ${item.active ? 'animate-pulse-glow' : 'group-hover:scale-110'}`} />
                <span className="font-semibold text-sm drop-shadow-sm">{item.label}</span>
              </div>
              {item.badge && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="badge-premium text-xs px-2 py-1"
                >
                  {item.badge}
                </motion.span>
              )}
              {item.active && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          )
        })}
      </nav>

      {/* Help Section */}
      <div className="p-6 border-t border-white/10">
        <motion.a
          href="#"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ x: 4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-3 px-4 py-3 rounded-2xl text-gray-200 hover:bg-white/15 hover:text-white transition-all duration-300 group backdrop-blur-sm"
        >
          <HelpCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="font-semibold text-sm drop-shadow-sm">Help & Support</span>
        </motion.a>

        <motion.div
          className="mt-4 p-3 glass rounded-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p className="text-xs text-gray-300 text-center font-medium drop-shadow-sm">
            🚀 EduDash v2.0
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Sidebar