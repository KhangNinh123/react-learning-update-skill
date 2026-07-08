import { Button, Card } from '@heroui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import http from '../lib/http'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const Navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const { data } = await http.post('/auth/login', { username, password })
      console.log('Login response:', data)

      const accessToken = data.accessToken || data.access_token
      const refreshToken = data.refreshToken || data.refresh_token

      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)

      Navigate('/products')
    } catch (error) {
      console.log('Login error:', error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
      <Card className="w-full max-w-sm shadow-xl">
        <Card.Header className="flex flex-col items-start gap-1 pb-0 px-6 pt-6">
          <h1 className="text-2xl font-bold text-gray-800">Welcome back</h1>
          <p className="text-sm text-gray-500">Sign in to Product Manager</p>
        </Card.Header>
        <Card.Content className="px-6 pb-6 pt-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
                id="username"
                type="text"
                placeholder="Enter your username"
                autoComplete="username"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                id="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <Button type="submit" variant="primary" className="mt-2 w-full">
              Sign In
            </Button>
          </form>
        </Card.Content>
      </Card>
    </div>
  )
}
