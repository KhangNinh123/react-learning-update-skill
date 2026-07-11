import React from 'react'
import { Outlet, Navigate } from 'react-router'

export default function GuestRoute() {
  // Lấy token thực tế từ trình duyệt
  const isAuthenticated = Boolean(localStorage.getItem('accessToken'))
  
  // Nếu ĐÃ đăng nhập rồi mà mò vào đây thì đá sang trang products
  if (isAuthenticated) {
    return <Navigate to="/products" replace />
  }
  
  return <Outlet />
}
