import React from 'react'
import axios from 'axios'
import { useGlobalContext } from '../context/context'

function Child1() {
    const { user, show } = useGlobalContext()

    const handleFetch = async () => {
        try {
            // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            // const todos = await response.json()
            // console.log(todos);
            const token = sessionStorage.getItem('token')
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/todos/1',
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )

            console.log(response);

        } catch (error) {
            console.error('Error', error)
        }
    }


    // if (!show) return <p>Enter Data</p>
    return (
        <div>
            <p>{JSON.stringify(user)}</p>

            <button
                onClick={() => handleFetch()}
            >FETCH</button>
        </div>
    )
}

export default Child1