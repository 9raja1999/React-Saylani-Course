import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'

function RootLayout() {
  return (
    <>
        {/* <Header /> */}
        <Outlet />
        {/* <p>footer</p> */}
    </>
  )
}

export default RootLayout