import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function AuthLayout() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)



  useEffect(() => {
    let isLoggedIn = JSON.parse(sessionStorage.getItem('user'))
  
    if (isLoggedIn === true) {
      setIsLoggedIn(true)
      navigate('/')
    } else {
      setIsLoggedIn(false)
    }
  }, [])



  return (
    <>
      <Outlet />
    </>
  )
}

export default AuthLayout