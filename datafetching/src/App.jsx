import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGlobalContext } from './context/context'
import Child1 from './componets/Child1'


function App() {
  const { setUser, setShow } = useGlobalContext()
  const [count, setCount] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target


    setUser(prev => ({
      ...prev,
      [name]: value
    }))
  }


  return (
    <>
      <input type="text" name='name' onChange={handleChange} />
      <input type="text" name='email' onChange={handleChange} />
      <input type="text" name='contact' onChange={handleChange} />
      <button onClick={() => setShow(true)}>SUBMIT</button>

      <Child1 />
    </>
  )
}

export default App
