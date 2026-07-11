import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { authApi } from '../api/auth'

interface User {
  id: number
  username: string
}

interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  login: (accessToken: string, refreshToken: string, userData: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  // Lấy trạng thái đăng nhập ban đầu từ localStorage
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    Boolean(localStorage.getItem('accessToken'))
  )
  const [user, setUser] = useState<User | null>(null)

  // Tự động gọi API lấy thông tin user nếu có token mà chưa có dữ liệu user
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token && !user) {
      authApi.me()
        .then(res => {
          if (res?.data) {
            setUser(res.data)
          }
        })
        .catch((error) => {
          console.error("Lỗi lấy thông tin user:", error)
          // Có thể token hết hạn, gọi logout để clear dữ liệu
          logout()
        })
    }
  }, [user])

  const login = (accessToken: string, refreshToken: string, userData: User) => {
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
    
    setIsAuthenticated(true)
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
