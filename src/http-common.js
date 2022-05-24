import axios from 'axios'

export default axios.create({
  // baseURL: process.env.API_URL,
  baseURL: 'http://167.172.73.163:9090',
  headers: {
    'Content-Type': 'application/json',
  },
})
