import { motion } from 'framer-motion'
import {
  Trophy,
  Target,
  TrendingUp,
  Star,
  Zap,
  CheckCircle,
  Sparkles,
  Crown,
  Users,
  Award
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

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
    { skill: 'React', progress: 85, color: 'from-blue-500 to-cyan-500' },
    { skill: 'JavaScript', progress: 92, color: 'from-yellow-500 to-amber-500' },
    { skill: 'TypeScript', progress: 78, color: 'from-blue-600 to-indigo-600' },
    { skill: 'Node.js', progress: 65, color: 'from-green-500 to-emerald-500' },
  ]

  const achievements = [
    { id: 1, title: 'First Steps', description: 'Completed first module', icon: Star, earned: true, color: 'from-yellow-500 to-amber-500' },
    { id: 2, title: 'Speed Demon', description: '10 challenges in a day', icon: Zap, earned: true, color: 'from-blue-500 to-cyan-500' },
    { id: 3, title: 'Team Player', description: 'Helped 5 peers', icon: Users, earned: true, color: 'from-green-500 to-emerald-500' },
    { id: 4, title: 'Perfectionist', description: '100% accuracy streak', icon: Target, earned: false, color: 'from-gray-400 to-gray-500' },
  ]

  const recentActivities = [
    { id: 1, action: 'Completed React Hooks Challenge', points: 50, time: '2 hours ago', type: 'challenge' },
    { id: 2, action: 'Earned Speed Demon Badge', points: 100, time: '5 hours ago', type: 'achievement' },
    { id: 3, action: 'Submitted Final Project', points: 200, time: '1 day ago', type: 'project' },
    { id: 4, action: 'Helped peer with debugging', points: 25, time: '2 days ago', type: 'help' },
  ]

  const leaderboard = [
    { rank: 1, name: 'Alex Chen', points: 1480, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face', change: '+50' },
    { rank: 2, name: 'You', points: 1250, avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=40&h=40&fit=crop&crop=face', isCurrentUser: true, change: '+25' },
    { rank: 3, name: 'Sarah Kim', points: 1180, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face', change: '+15' },
    { rank: 4, name: 'Mike Johnson', points: 950, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face', change: '+10' },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card-premium"
      >
        <div className="flex items-center justify-between">
          <div>
            <motion.h1
              className="text-3xl font-bold text-gray-900 mb-3 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome back, John!
              <motion.div
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="ml-2"
              >
                👋
              </motion.div>
            </motion.h1>
            <motion.p
              className="text-gray-600 text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              You're crushing it! Keep the momentum going. 🚀
            </motion.p>
          </div>
          <motion.div
            className="text-right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          >
            <div className="text-4xl font-bold gradient-text flex items-center">
              <Crown className="w-8 h-8 mr-2 text-yellow-500" />
              1,250
            </div>
            <div className="text-sm text-gray-500 font-medium">Total Points</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Current Level', value: '5', icon: Trophy, color: 'from-yellow-500 to-amber-500', bgColor: 'bg-yellow-50', detail: 'Next: 1,500 pts' },
          { label: 'Streak Days', value: '12', icon: Zap, color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-50', detail: 'Personal best!' },
          { label: 'Challenges', value: '28', icon: CheckCircle, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50', detail: 'This month' },
          { label: 'Leaderboard', value: '#2', icon: TrendingUp, color: 'from-purple-500 to-violet-500', bgColor: 'bg-purple-50', detail: 'Top 5%' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="card card-hover relative overflow-hidden group"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.detail}</p>
              </div>
              <div className={`p-4 bg-gradient-to-r ${stat.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, delay: index * 0.2 + 1, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Progress and Skills */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Enhanced Progress Chart */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="card-premium"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
              Points Journey
            </h3>
            <span className="badge-premium">This Year</span>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f9ff" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line
                type="monotone"
                dataKey="points"
                stroke="url(#gradient)"
                strokeWidth={4}
                dot={{ fill: '#3b82f6', strokeWidth: 3, r: 6 }}
                activeDot={{ r: 8, stroke: '#3b82f6', strokeWidth: 2 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Enhanced Skills Progress */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="card-premium"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-purple-600" />
              Skill Mastery
            </h3>
            <span className="badge bg-purple-50 text-purple-700 border-purple-200">Active</span>
          </div>
          <div className="space-y-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.skill}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-gray-700">{skill.skill}</span>
                  <span className="text-sm font-bold text-gray-600">{skill.progress}%</span>
                </div>
                <div className="progress-bar h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.progress}%` }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 1.5, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 2 + index * 0.1 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Achievements and Leaderboard */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Enhanced Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="card-premium"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <Award className="w-6 h-6 mr-2 text-yellow-600" />
              Achievement Gallery
            </h3>
            <span className="badge-success">3/4 Unlocked</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`p-5 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden ${achievement.earned
                    ? 'border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg shadow-green-500/10'
                    : 'border-gray-200 bg-gray-50'
                  }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mb-3 shadow-lg`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{achievement.title}</h4>
                <p className="text-xs text-gray-600 mb-2">{achievement.description}</p>
                {achievement.earned && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    className="absolute top-2 right-2"
                  >
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="card-premium"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <Trophy className="w-6 h-6 mr-2 text-yellow-600" />
              Global Leaderboard
            </h3>
            <span className="badge bg-blue-50 text-blue-700 border-blue-200">Live</span>
          </div>
          <div className="space-y-3">
            {leaderboard.map((user, index) => {
              const getRankStyle = (rank: number) => {
                switch (rank) {
                  case 1: return 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg'
                  case 2: return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-lg'
                  case 3: return 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                  default: return 'bg-gray-100 text-gray-700'
                }
              }

              return (
                <motion.div
                  key={user.rank}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 relative overflow-hidden ${user.isCurrentUser
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg shadow-blue-500/10'
                      : 'bg-white/50 hover:bg-white/80 border border-gray-100'
                    }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold ${getRankStyle(user.rank)}`}>
                      {user.rank}
                    </div>
                    <div className="relative">
                      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-xl border-2 border-white shadow-sm" />
                      {user.isCurrentUser && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <Sparkles className="w-2 h-2 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">{user.name}</span>
                      <div className="text-xs text-green-600 font-medium">{user.change}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">{user.points}</div>
                    <div className="text-xs text-gray-500">points</div>
                  </div>
                  {user.isCurrentUser && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="card-premium"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <Zap className="w-6 h-6 mr-2 text-blue-600" />
            Recent Activity
          </h3>
          <span className="badge bg-gray-50 text-gray-700 border-gray-200">Last 7 days</span>
        </div>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => {
            const getActivityColor = (type: string) => {
              switch (type) {
                case 'achievement': return 'bg-yellow-500 shadow-lg shadow-yellow-500/50'
                case 'project': return 'bg-purple-500 shadow-lg shadow-purple-500/50'
                case 'help': return 'bg-green-500 shadow-lg shadow-green-500/50'
                default: return 'bg-blue-500 shadow-lg shadow-blue-500/50'
              }
            }

            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/80 transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${getActivityColor(activity.type)}`} />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold text-green-600">+{activity.points}</span>
                  <span className="text-xs text-gray-500">pts</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

export default StudentDashboard