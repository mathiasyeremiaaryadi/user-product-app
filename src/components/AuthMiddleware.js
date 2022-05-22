import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const AuthMiddleware = () => {
  const { authenticatedUser } = useSelector((state) => state.auth)
  const location = useLocation()

  return authenticatedUser?.username ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default AuthMiddleware
