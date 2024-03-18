import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function PrivateRoute({ children }) {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)



    // useEffect(() => {
    //     let isLoggedIn = JSON.parse(sessionStorage.getItem('user'))
    //     console.log(isLoggedIn)
    //     if (isLoggedIn === true) {
    //         setIsLoggedIn(true)
    //     } else {
    //         setIsLoggedIn(false)
    //         navigate('/auth')
    //     }
    // }, [])


    // if (isLoggedIn === false) {
    //     return null
    // }

    return (
        <>
            <p>PRIVATE ROUTE</p>
            {children}
        </>
    )
}

export default PrivateRoute