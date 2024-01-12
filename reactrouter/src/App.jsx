import { useState, useMemo, useEffect } from 'react'
import Child from './components/Child'
import './App.css'
import { useNavigate, createSearchParams, useSearchParams } from 'react-router-dom'


function App() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const [count, setCount] = useState(0)
  const [randomNumber, setRandomNumber] = useState(null)
  const [numbers, setNumber] = useState([1, 2, 3, 4, 5])

  useEffect(() => {
    console.log("Bla bla")
  })


  useEffect(() => {
    console.log("MOUNTING")


    return () => {
      console.log("UNMOUNT")
    }
  }, [])

  useEffect(() => {
    console.log("UPDATION")
  }, [count])

  const maxNumber = useMemo(() => {
    console.log("CALCULATION IN PROGRESS")
    return Math.max(...numbers) - count
  }, [])

  function handleCount() {
    setCount(count + 1)
  }

  function handleRandomNumber() {
    setRandomNumber(Math.random())
  }


  function handleNavigate() {
    navigate('/about')
    searchParams.set("foo",'bar')
    setSearchParams(searchParams);
  }


  return (
    <>
      <h1>Home</h1>
      <p>Count  {count}</p>

      <button
        onClick={handleCount}
      >Click Count</button>
      <Child text={"Child Components"} randomNumber={randomNumber} />
      <button
        onClick={handleRandomNumber}
      >Generate Random</button>

      <button
        onClick={handleNavigate}
      >NAVIGATE WITH PARAMS</button>
    </>
  )
}

export default App
