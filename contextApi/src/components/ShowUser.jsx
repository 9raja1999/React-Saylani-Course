import React from 'react'
import { useGlobalContext } from '../context/context'

function ShowUser() {
    const { user, show } = useGlobalContext()

    if(!show) return <p>Enter Data</p>
    return (
        <p>{JSON.stringify(user)}</p>
    )
}

export default ShowUser