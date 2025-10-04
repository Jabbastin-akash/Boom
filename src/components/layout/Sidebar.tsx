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
    HelpCircle
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
            { icon: Bell, label: 'Notifications', href: '#', active: false },
        ]

        const roleSpecificItems = {
            student: [
                { icon: Award, label: 'Achievements', href: '#', active: false },
                { icon: TrendingUp, label: 'Progress', href: '#', active: false },
                { icon: Target, label: 'Goals', href: '#', active: false },
            ],
            mentor: [
                { icon: Users, label: 'Students', href: '#', active: false },
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

    return (
        <motion.div
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className={`w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col ${className}`}
        >
            {/* Logo */}
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-gray-900">EduDash</h1>
                        <p className="text-xs text-gray-500 capitalize">{user?.role} Portal</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
                {navigationItems.map((item) => {
                    const Icon = item.icon
                    return (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            whileHover={{ x: 4 }}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors duration-200 ${item.active
                                    ? 'bg-blue-50 text-blue-600 border border-blue-200'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </motion.a>
                    )
                })}
            </nav>

            {/* Help */}
            <div className="p-4 border-t border-gray-200">
                <motion.a
                    href="#"
                    whileHover={{ x: 4 }}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                >
                    <HelpCircle className="w-5 h-5" />
                    <span className="font-medium">Help & Support</span>
                </motion.a>
            </div>
        </motion.div>
    )
}

export default Sidebar