import { useEffect, useState } from 'react'
import { getAllProducts } from './_lib/services/products.service'

import './App.css'
import axiosHandler from './_lib/axiosHandler'
import { useForm } from 'react-hook-form'
import { login } from './_lib/services/auth.service'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      const products = await getAllProducts()
      console.log("P", products);
    })()
  }, [])


  const onSubmit = async (data) => {
    try {
      const response = await login(data)


      if (response.message === 'Invalid credentials' || response.status !== 200) {
        alert(response.message)
        return
      }

      sessionStorage.setItem("user", JSON.stringify(response.data))
      alert("Login success!")
    } catch (error) {
      console.log(error);

    }
  }


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="username"
          {...register("username", {
            required: {
              value: true,
              message: 'Username is required'
            }
          })}
        />
        {(errors && errors.email) && <span>{errors.email.message}</span>}
        <br />
        <input type='password' placeholder='password'
          {...register("password", {
            required: {
              value: true,
              message: 'Password is required'
            }
          })}
        />
        {(errors && errors.password) && <span>{errors.password.message}</span>}
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default App
