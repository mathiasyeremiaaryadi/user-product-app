import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { persistLoginUser } from 'src/actions/authActions'

const AuthPersistentMiddleware = () => {
  const accessToken = localStorage.getItem('_acctoken')
  const dispatch = useDispatch()
  const [isPageRefreshed, setIsPageRefreshed] = useState(true)

  useEffect(() => {
    if (accessToken) {
      dispatch(persistLoginUser(accessToken))
      setIsPageRefreshed(false)
    }
  }, [])

  return (
    <>
      <Outlet />
    </>
  )
}

export default AuthPersistentMiddleware
