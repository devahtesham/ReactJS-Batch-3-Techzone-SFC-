import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const isUserLogin = localStorage.getItem("isUserLogin")
  return (
    <>
        {
            isUserLogin ? <Outlet /> : <Navigate to="/" />
        }
    </>
    
  )
}

export default PrivateRoute