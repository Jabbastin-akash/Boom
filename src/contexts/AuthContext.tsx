import React, { createContext, useContext, useState, ReactNode } from 'react'

export interface User {
    id: string
    name: string
    email: string
    role: 'student' | 'mentor' | 'floorwing' | 'admin'
    avatar?: string
    points?: number
    level?: number
}

interface AuthContextType {
    user: User | null
    login: (email: string, password: string) => Promise<void>
    logout: () => void
    isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const login = async (email: string, password: string) => {
        setIsLoading(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Mock authentication logic
        let mockUser: User

        if (email.includes('admin')) {
            mockUser = {
                id: '1',
                name: 'Admin User',
                email: email,
                role: 'admin',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
            }
        } else if (email.includes('mentor')) {
            mockUser = {
                id: '2',
                name: 'Mentor Smith',
                email: email,
                role: 'mentor',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
            }
        } else if (email.includes('floorwing')) {
            mockUser = {
                id: '3',
                name: 'Floorwing Manager',
                email: email,
                role: 'floorwing',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
            }
        } else {
            mockUser = {
                id: '4',
                name: 'John Student',
                email: email,
                role: 'student',
                avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=40&h=40&fit=crop&crop=face',
                points: 1250,
                level: 5
            }
        }

        setUser(mockUser)
        setIsLoading(false)
    }

    const logout = () => {
        setUser(null)
    }

    const value = {
        user,
        login,
        logout,
        isLoading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}