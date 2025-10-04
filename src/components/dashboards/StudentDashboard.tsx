import React from 'react'
import { motion } from 'framer-motion'
import {
    Trophy,
    Target,
    TrendingUp,
    Star,
    Award,
    Calendar,
    Clock,
    Users,
    Zap,
    CheckCircle
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const StudentDashboard = () => {
    const progressData = [
        { month: 'Jan', points: 120 },
        { month: 'Feb', points: 250 },
        { month: 'Mar', points: 400 },
        { month: 'Apr', points: 680 },
        { month: 'May', points: 850 },
        { month: 'Jun', points: 1250 },
    ]

    const skillsData = [
        { skill: 'React', progress: 85 },
        { skill: 'JavaScript', progress: 92 },
        { skill: 'TypeScript', progress: 78 },
        { skill: 'Node.js', progress: 65 },
    ]

    const achievements = [
        { id: 1, title: 'First Steps', description: 'Completed first module', icon: Star, earned: true, color: 'text-yellow-500' },
        { id: 2, title: 'Speed Demon', description: '10 challenges in a day', icon: Zap, earned: true, color: 'text-blue-500' },
        { id: 3, title: 'Team Player', description: 'Helped 5 peers', icon: Users, earned: true, color: 'text-green-500' },
        { id: 4, title: 'Perfectionist', description: '100% accuracy streak', icon: Target, earned: false, color: 'text-gray-400' },
    ]

    const recentActivities = [
        { id: 1, action: 'Completed React Hooks Challenge', points: 50, time: '2 hours ago' },
        { id: 2, action: 'Earned Speed Demon Badge', points: 100, time: '5 hours ago' },
        { id: 3, action: 'Submitted Final Project', points: 200, time: '1 day ago' },
        { id: 4, action: 'Helped peer with debugging', points: 25, time: '2 days ago' },
    ]

    const leaderboard = [
        { rank: 1, name: 'Alex Chen', points: 1480, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
        { rank: 2, name: 'You', points: 1250, avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=40&h=40&fit=crop&crop=face', isCurrentUser: true },
        { rank: 3, name: 'Sarah Kim', points: 1180, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face' },
        { rank: 4, name: 'Mike Johnson', points: 950, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
    ]

    return (
        <div className="space-y-6">
            {/* Welcome Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, John! 👋</h1>
                        <p className="text-gray-600">You're doing great! Keep up the momentum.</p>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-blue-600">1,250</div>
                        <div className="text-sm text-gray-500">Total Points</div>
                    </div>
                </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Current Level', value: '5', icon: Trophy, color: 'text-yellow-500', bg: 'bg-yellow-50' },
                    { label: 'Streak Days', value: '12', icon: Target, color: 'text-green-500', bg: 'bg-green-50' },
                    { label: 'Challenges', value: '28', icon: CheckCircle, color: 'text-blue-500', bg: 'bg-blue-50' },
                    { label: 'Rank', value: '#2', icon: TrendingUp, color: 'text-purple-500', bg: 'bg-purple-50' },
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

            {/* Progress and Skills */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Progress Chart */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="card"
                >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Points Progress</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={progressData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="points"
                                stroke="#3b82f6"
                                strokeWidth={3}
                                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Skills Progress */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="card"
                >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Skill Progress</h3>
                    <div className="space-y-4">
                        {skillsData.map((skill) => (
                            <div key={skill.skill}>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                                    <span className="text-sm text-gray-500">{skill.progress}%</span>
                                </div>
                                <div className="progress-bar">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.progress}%` }}
                                        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                                        className="progress-fill"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Achievements and Leaderboard */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Achievements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="card"
                >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {achievements.map((achievement) => (
                            <motion.div
                                key={achievement.id}
                                whileHover={{ scale: 1.05 }}
                                className={`p-4 rounded-xl border-2 transition-all duration-200 ${achievement.earned
                                        ? 'border-green-200 bg-green-50'
                                        : 'border-gray-200 bg-gray-50'
                                    }`}
                            >
                                <achievement.icon className={`w-8 h-8 ${achievement.color} mb-2`} />
                                <h4 className="font-medium text-gray-900 text-sm">{achievement.title}</h4>
                                <p className="text-xs text-gray-600 mt-1">{achievement.description}</p>
                                {achievement.earned && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="mt-2"
                                    >
                                        <span className="badge badge-success">Earned</span>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Leaderboard */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="card"
                >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Leaderboard</h3>
                    <div className="space-y-3">
                        {leaderboard.map((user) => (
                            <motion.div
                                key={user.rank}
                                whileHover={{ x: 4 }}
                                className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${user.isCurrentUser
                                        ? 'bg-blue-50 border border-blue-200'
                                        : 'bg-gray-50 hover:bg-gray-100'
                                    }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${user.rank === 1 ? 'bg-yellow-500 text-white' :
                                            user.rank === 2 ? 'bg-gray-400 text-white' :
                                                user.rank === 3 ? 'bg-amber-600 text-white' :
                                                    'bg-gray-300 text-gray-700'
                                        }`}>
                                        {user.rank}
                                    </div>
                                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                                    <span className="font-medium text-gray-900">{user.name}</span>
                                </div>
                                <div className="text-sm font-semibold text-gray-600">{user.points} pts</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Recent Activity */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="card"
            >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                    {recentActivities.map((activity) => (
                        <motion.div
                            key={activity.id}
                            whileHover={{ x: 4 }}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                                    <p className="text-xs text-gray-500">{activity.time}</p>
                                </div>
                            </div>
                            <div className="text-sm font-semibold text-green-600">+{activity.points} pts</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default StudentDashboard