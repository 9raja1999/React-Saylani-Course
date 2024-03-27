import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGlobalContext } from './context/context'
import ShowUser from './components/ShowUser'
import FetchUserDataFromServer from './components/FetchUserDataFromServer'

function App() {
  const { setUser , setShow} = useGlobalContext()


  const handleChange = (e) => {
    const { name, value } = e.target
    setShow(false)
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setShow(true)
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' name='username' onChange={handleChange} />
        <input type='email' name='email' onChange={handleChange} />
        <input type='text' name='contact' onChange={handleChange} />
        <button type='submit'>SUBMIT</button>
      </form>
      <br />
      <ShowUser />
      <FetchUserDataFromServer />
    </>
  )
}

export default App
