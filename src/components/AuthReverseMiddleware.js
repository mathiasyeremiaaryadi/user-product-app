import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const AuthReverseMiddleware = () => {
  const { authenticatedUser } = useSelector((state) => state.auth)
  const location = useLocation()

  return authenticatedUser ? <Navigate to="/" state={{ from: location }} /> : <Outlet />
}

export default AuthReverseMiddleware
