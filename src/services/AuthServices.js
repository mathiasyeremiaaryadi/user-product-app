import http from '../http-common'

const loginUser = (data) => {
  return http.post(`/login`, data)
}

const AuthServices = {
  loginUser,
}

export default AuthServices
