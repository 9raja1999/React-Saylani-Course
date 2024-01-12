import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'


function Login() {
    const {
        handleSubmit,
        register,
        formState: { errors },
        watch
    } = useForm()
    const navigate = useNavigate()

    const [showPwd, setShowPwd] = useState(false)

    function handleDisplayPwd() {
        setShowPwd((prev) => !prev)
    }

    function handleLogin(data) {
        if (
            data.email === 'raja@yopmail.com' &&
            data.password === 'test@123'
        ) {
            console.log("AUTHENTICATED")

            sessionStorage.setItem('user', true)
            navigate('/')
        }
    }

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <input
                placeholder='email'
                type='email'
                {...register('email', {
                    required: {
                        value: true,
                        message: 'This is require field'
                    }
                })}
            />

            {errors.email ? <span>{errors.email.message}</span> : ''}

            <br />
            <input
                placeholder='pasword'
                type={showPwd ? 'text' : 'password'}
                {...register('password', {
                    required: {
                        value: true,
                        message: 'This is  required field'
                    },
                    minLength: {
                        value: 5,
                        message: 'Pasword should be 5 characters    '
                    }
                })}
            />

            <button
                onClick={handleDisplayPwd}
            >{showPwd ? 'Hide' : 'Show'}</button>
            {errors.password ? <span>{errors.password.message}</span> : ''}


            <br />

            <button type='submit'>Login</button>
        </form>
    )
}

export default Login