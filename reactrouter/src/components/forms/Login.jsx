import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


function Login() {
    const {
        handleSubmit,
        register,
        formState: { errors },
        watch
    } = useForm()
    const [showPwd, setShowPwd] = useState(false)

    const getPassword = watch("password")


    function handleDisplayPwd() {
        setShowPwd((prev) => !prev)
    }

    function handleLogin(data) {
        console.log("DATA", data)
    }


    console.log("PASS", getPassword)


    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            {/* {
                showPwd === false ? (
                    <p>it is false</p>
                ) : (
                    <p>it is true</p>
                )
            } */}


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
            <input
                placeholder='confiorm pasword'
                type={showPwd ? 'text' : 'password'}
                {...register('cPassword', {
                    required: {
                        value: true,
                        message: 'This is  required field'
                    },
                    validate: (value) => {
                        if(value === getPassword){
                            
                        }
                    
                    }
                })}
            />

            <br />

            <button type='submit'>Login</button>
        </form>
    )
}

export default Login