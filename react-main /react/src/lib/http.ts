import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000/api',
})

// Tự động gắn token vào header của mọi request gửi đi
http.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default http
