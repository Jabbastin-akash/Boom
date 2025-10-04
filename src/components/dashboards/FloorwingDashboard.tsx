import { motion } from 'framer-motion'
import { Shield, Users, TrendingUp, AlertTriangle, Eye, BarChart3 } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const FloorwingDashboard = () => {
    const mentorData = [
        { name: 'Alex Smith', students: 12, avgProgress: 85, issues: 2 },
        { name: 'Sarah Johnson', students: 15, avgProgress: 92, issues: 0 },
        { name: 'Mike Wilson', students: 10, avgProgress: 78, issues: 1 },
    ]

    const analyticsData = [
        { month: 'Jan', engagement: 78, completion: 85 },
        { month: 'Feb', engagement: 82, completion: 88 },
        { month: 'Mar', engagement: 85, completion: 92 },
        { month: 'Apr', engagement: 88, completion: 89 },
    ]

    const issueData = [
        { name: 'Active', value: 75, color: '#10b981' },
        { name: 'At Risk', value: 15, color: '#f59e0b' },
        { name: 'Inactive', value: 10, color: '#ef4444' },
    ]

    const escalations = [
        { id: 1, student: 'Emma Davis', mentor: 'Alex Smith', issue: 'Low engagement', priority: 'high', time: '2 hours ago' },
        { id: 2, student: 'Tom Brown', mentor: 'Sarah Johnson', issue: 'Missing assignments', priority: 'medium', time: '5 hours ago' },
        { id: 3, student: 'Lisa Chen', mentor: 'Mike Wilson', issue: 'Technical difficulties', priority: 'low', time: '1 day ago' },
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
                            <Shield className="w-6 h-6 mr-2 text-purple-600" />
                            Floorwing Dashboard
                        </h1>
                        <p className="text-gray-600">Monitor and manage student-mentor relationships</p>
                    </div>
                    <div className="flex space-x-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-purple-600">37</div>
                            <div className="text-sm text-gray-500">Total Students</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-green-600">3</div>
                            <div className="text-sm text-gray-500">Active Mentors</div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Avg. Engagement', value: '85%', icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-50' },
                    { label: 'Active Issues', value: '3', icon: AlertTriangle, color: 'text-yellow-500', bg: 'bg-yellow-50' },
                    { label: 'Completion Rate', value: '92%', icon: BarChart3, color: 'text-blue-500', bg: 'bg-blue-50' },
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

            {/* Analytics and Student Status */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Analytics */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="card"
                >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Trends</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={analyticsData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="engagement" stroke="#8b5cf6" strokeWidth={2} />
                            <Line type="monotone" dataKey="completion" stroke="#10b981" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Student Status */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="card"
                >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Status Distribution</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={issueData}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                dataKey="value"
                                label={({ name, value }) => `${name}: ${value}%`}
                            >
                                {issueData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </motion.div>
            </div>

            {/* Mentor Overview */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="card"
            >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-purple-600" />
                    Mentor Overview
                </h3>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Mentor</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Students</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Avg. Progress</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Issues</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mentorData.map((mentor, index) => (
                                <motion.tr
                                    key={mentor.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    className="border-b border-gray-100 hover:bg-gray-50"
                                >
                                    <td className="py-3 px-4 font-medium text-gray-900">{mentor.name}</td>
                                    <td className="py-3 px-4">{mentor.students}</td>
                                    <td className="py-3 px-4">
                                        <span className={`badge ${mentor.avgProgress >= 85 ? 'badge-success' : 'badge-warning'}`}>
                                            {mentor.avgProgress}%
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className={`badge ${mentor.issues === 0 ? 'badge-success' : 'badge-warning'}`}>
                                            {mentor.issues}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="btn-secondary text-xs px-3 py-1 mr-2"
                                        >
                                            <Eye className="w-3 h-3 mr-1" />
                                            View Details
                                        </motion.button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Escalation Panel */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="card"
            >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                    Recent Escalations
                </h3>
                <div className="space-y-3">
                    {escalations.map((escalation, index) => (
                        <motion.div
                            key={escalation.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                            <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                    <h4 className="font-medium text-gray-900">{escalation.student}</h4>
                                    <span className={`badge ${escalation.priority === 'high' ? 'bg-red-50 text-red-600' :
                                            escalation.priority === 'medium' ? 'bg-yellow-50 text-yellow-600' :
                                                'bg-blue-50 text-blue-600'
                                        }`}>
                                        {escalation.priority}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600">{escalation.issue}</p>
                                <p className="text-xs text-gray-500 mt-1">Mentor: {escalation.mentor} • {escalation.time}</p>
                            </div>
                            <div className="flex space-x-2">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-secondary text-xs px-3 py-1"
                                >
                                    Review
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary text-xs px-3 py-1"
                                >
                                    Resolve
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default FloorwingDashboard