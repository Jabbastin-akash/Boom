import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Plus, TrendingUp, Award, Target, MessageSquare } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const MentorDashboard = () => {
    const [selectedStudent, setSelectedStudent] = useState('')
    const [points, setPoints] = useState('')
    const [reason, setReason] = useState('')

    const students = [
        { id: 1, name: 'John Student', points: 1250, level: 5, streak: 12, avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=40&h=40&fit=crop&crop=face' },
        { id: 2, name: 'Sarah Wilson', points: 980, level: 4, streak: 8, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face' },
        { id: 3, name: 'Mike Chen', points: 1180, level: 5, streak: 15, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
        { id: 4, name: 'Emma Davis', points: 750, level: 3, streak: 5, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' },
    ]

    const performanceData = [
        { week: 'Week 1', assignments: 85, participation: 92, projects: 78 },
        { week: 'Week 2', assignments: 88, participation: 85, projects: 82 },
        { week: 'Week 3', assignments: 92, participation: 95, projects: 88 },
        { week: 'Week 4', assignments: 89, participation: 88, projects: 91 },
    ]

    const milestones = [
        { id: 1, title: 'React Fundamentals', completed: 4, total: 4, dueDate: '2024-01-15' },
        { id: 2, title: 'State Management', completed: 3, total: 5, dueDate: '2024-01-22' },
        { id: 3, title: 'API Integration', completed: 1, total: 4, dueDate: '2024-01-29' },
    ]

    const handleAssignPoints = () => {
        if (selectedStudent && points && reason) {
            // Handle point assignment logic
            console.log('Assigning points:', { selectedStudent, points, reason })
            setSelectedStudent('')
            setPoints('')
            setReason('')
        }
    }

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
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Mentor Dashboard</h1>
                        <p className="text-gray-600">Monitor and guide your students' progress</p>
                    </div>
                    <div className="flex space-x-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-blue-600">24</div>
                            <div className="text-sm text-gray-500">Students</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-green-600">89%</div>
                            <div className="text-sm text-gray-500">Avg. Progress</div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Assign Points */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="card"
                >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Plus className="w-5 h-5 mr-2 text-blue-600" />
                        Assign Points
                    </h3>
                    <div className="space-y-4">
                        <select
                            value={selectedStudent}
                            onChange={(e) => setSelectedStudent(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Student</option>
                            {students.map((student) => (
                                <option key={student.id} value={student.id}>{student.name}</option>
                            ))}
                        </select>
                        <input
                            type="number"
                            placeholder="Points to assign"
                            value={points}
                            onChange={(e) => setPoints(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            placeholder="Reason for points"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-20 resize-none"
                        />
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleAssignPoints}
                            className="w-full btn-primary"
                        >
                            Assign Points
                        </motion.button>
                    </div>
                </motion.div>

                {/* Performance Chart */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="card"
                >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Class Performance</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={performanceData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="week" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="assignments" fill="#3b82f6" />
                            <Bar dataKey="participation" fill="#10b981" />
                            <Bar dataKey="projects" fill="#f59e0b" />
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>
            </div>

            {/* Students List */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="card"
            >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-600" />
                    My Students
                </h3>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Student</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Points</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Level</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Streak</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <motion.tr
                                    key={student.id}
                                    whileHover={{ backgroundColor: '#f9fafb' }}
                                    className="border-b border-gray-100"
                                >
                                    <td className="py-3 px-4">
                                        <div className="flex items-center space-x-3">
                                            <img src={student.avatar} alt={student.name} className="w-8 h-8 rounded-full" />
                                            <span className="font-medium text-gray-900">{student.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 font-semibold text-blue-600">{student.points}</td>
                                    <td className="py-3 px-4">
                                        <span className="badge badge-primary">Level {student.level}</span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className="badge badge-success">{student.streak} days</span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex space-x-2">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="btn-secondary text-xs px-3 py-1"
                                            >
                                                View Profile
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="btn-primary text-xs px-3 py-1"
                                            >
                                                Give Feedback
                                            </motion.button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Milestones */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="card"
            >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-600" />
                    Milestone Tracking
                </h3>
                <div className="space-y-4">
                    {milestones.map((milestone) => (
                        <div key={milestone.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <div className="flex-1">
                                <h4 className="font-medium text-gray-900">{milestone.title}</h4>
                                <p className="text-sm text-gray-600">Due: {milestone.dueDate}</p>
                                <div className="mt-2">
                                    <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                                        <span>Progress</span>
                                        <span>{milestone.completed}/{milestone.total}</span>
                                    </div>
                                    <div className="progress-bar">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(milestone.completed / milestone.total) * 100}%` }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                            className="progress-fill"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default MentorDashboard