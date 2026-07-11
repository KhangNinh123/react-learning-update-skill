import http from '../lib/http'

export const authApi = {
  login: async (username: string, password: string) => {
    const response = await http.post('/api/auth/login', {
      username,
      password
    })
    return response.data
  }
}
