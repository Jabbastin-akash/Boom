import { motion } from 'framer-motion'
import { Crown, Users, Settings, Shield, TrendingUp, Database, UserPlus, Edit, Trash2 } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const AdminDashboard = () => {
    const usageStats = [
        { month: 'Jan', students: 45, mentors: 8, activities: 1200 },
        { month: 'Feb', students: 52, mentors: 10, activities: 1450 },
        { month: 'Mar', students: 48, mentors: 9, activities: 1350 },
        { month: 'Apr', students: 58, mentors: 12, activities: 1680 },
    ]

    const roleDistribution = [
        { name: 'Students', value: 85, color: '#3b82f6' },
        { name: 'Mentors', value: 12, color: '#10b981' },
        { name: 'Floorwings', value: 2, color: '#8b5cf6' },
        { name: 'Admins', value: 1, color: '#f59e0b' },
    ]

    const users = [
        { id: 1, name: 'John Student', email: 'john@edu.com', role: 'student', status: 'active', joinDate: '2024-01-15' },
        { id: 2, name: 'Sarah Mentor', email: 'sarah@edu.com', role: 'mentor', status: 'active', joinDate: '2024-01-10' },
        { id: 3, name: 'Mike Floor', email: 'mike@edu.com', role: 'floorwing', status: 'active', joinDate: '2024-01-05' },
        { id: 4, name: 'Emma Davis', email: 'emma@edu.com', role: 'student', status: 'inactive', joinDate: '2024-01-20' },
    ]

    const systemSettings = [
        { category: 'Points System', settings: ['Base points per task: 50', 'Bonus multiplier: 1.5x', 'Weekly cap: 500 pts'] },
        { category: 'Milestones', settings: ['Level threshold: 1000 pts', 'Badge requirements: Custom', 'Achievement unlock: Auto'] },
        { category: 'Notifications', settings: ['Email alerts: Enabled', 'Push notifications: Enabled', 'Daily digest: 9:00 AM'] },
    ]

    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                            <Crown className="w-6 h-6 mr-2 text-yellow-600" />
                            Administrator Dashboard
                        </h1>
                        <p className="text-gray-600">Manage users, system settings, and monitor platform health</p>
                    </div>
                    <div className="flex space-x-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-blue-600">156</div>
                            <div className="text-sm text-gray-500">Total Users</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-green-600">98.5%</div>
                            <div className="text-sm text-gray-500">Uptime</div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Active Users', value: '142', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
                    { label: 'System Health', value: '99%', icon: Database, color: 'text-green-500', bg: 'bg-green-50' },
                    { label: 'Daily Activities', value: '1.2K', icon: TrendingUp, color: 'text-purple-500', bg: 'bg-purple-50' },
                    { label: 'Support Tickets', value: '3', icon: Shield, color: 'text-yellow-500', bg: 'bg-yellow-50' },
                ].map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="card card-hover"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                            </div>
                            <div className={`p-3 ${stat.bg} rounded-xl`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Usage Statistics */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="card"
                >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Usage</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={usageStats}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="students" fill="#3b82f6" name="Students" />
                            <Bar dataKey="mentors" fill="#10b981" name="Mentors" />
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Role Distribution */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="card"
                >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">User Role Distribution</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={roleDistribution}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                dataKey="value"
                                label={({ name, value }) => `${name}: ${value}%`}
                            >
                                {roleDistribution.map((entry, index) => (
                                    <Cell key={entry.name} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </motion.div>
            </div>

            {/* User Management */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="card"
            >
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <Users className="w-5 h-5 mr-2 text-blue-600" />
                        User Management
                    </h3>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex items-center"
                    >
                        <UserPlus className="w-4 h-4 mr-2" />
                        Add User
                    </motion.button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Name</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Email</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Role</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Join Date</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <motion.tr
                                    key={user.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                    className="border-b border-gray-100 hover:bg-gray-50"
                                >
                                    <td className="py-3 px-4 font-medium text-gray-900">{user.name}</td>
                                    <td className="py-3 px-4 text-gray-600">{user.email}</td>
                                    <td className="py-3 px-4">
                                        <span className="badge badge-primary capitalize">{user.role}</span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className={`badge ${user.status === 'active' ? 'badge-success' : 'bg-gray-100 text-gray-600'}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-gray-600">{user.joinDate}</td>
                                    <td className="py-3 px-4">
                                        <div className="flex space-x-2">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="p-1 text-red-600 hover:bg-red-50 rounded"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </motion.button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* System Settings */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="card"
            >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-blue-600" />
                    System Configuration
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {systemSettings.map((section, index) => (
                        <motion.div
                            key={section.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + index * 0.1 }}
                            className="p-4 bg-gray-50 rounded-xl"
                        >
                            <h4 className="font-semibold text-gray-900 mb-3">{section.category}</h4>
                            <div className="space-y-2">
                                {section.settings.map((setting, settingIndex) => (
                                    <div key={settingIndex} className="text-sm text-gray-600">
                                        {setting}
                                    </div>
                                ))}
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-secondary text-xs mt-3 w-full"
                            >
                                Configure
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default AdminDashboard