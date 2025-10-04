import React from 'react'
import { motion } from 'framer-motion'
import { Bell, Search, LogOut, User } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

interface HeaderProps {
    onLogout: () => void
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
    const { user } = useAuth()

    return (
        <motion.header
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-sm border-b border-gray-200 px-6 py-4"
        >
            <div className="flex items-center justify-between">
                {/* Search */}
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        />
                    </div>
                </div>

                {/* User Menu */}
                <div className="flex items-center space-x-4">
                    {/* Notifications */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <Bell className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                    </motion.button>

                    {/* User Profile */}
                    <div className="flex items-center space-x-3">
                        <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                            <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
                        </div>
                        <img
                            src={user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'}
                            alt={user?.name}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    </div>

                    {/* Logout */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onLogout}
                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </motion.header>
    )
}

export default Header