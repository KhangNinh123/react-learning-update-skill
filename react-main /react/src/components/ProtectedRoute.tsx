import { Outlet, Navigate } from 'react-router'

export default function ProtectedRoute() {
  // Đọc từ localStorage xem có token không
  const isAuthenticated = Boolean(localStorage.getItem('accessToken'))
  
  // Nếu CHƯA đăng nhập (!isAuthenticated) thì đuổi ra trang login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  
  return <Outlet />
}
