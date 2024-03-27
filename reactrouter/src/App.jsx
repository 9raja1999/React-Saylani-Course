import React, { useRef, useState } from 'react'
import Header from './components/Header'
import MainLayout from './layouts/MainLayout'
import Child from './components/Child'
import Input from './components/forms/Input'
import useWindowSize from './Hooks/useWindowSize'


function App() {
  const { dimensions } = useWindowSize()
  const [count, setCount] = useState(0)
  const [bool, setBool] = useState(false)
  const inputRef = useRef(null)
  const [tasks, setTasks] = useState([])


  function handleClick() {
    inputRef.current.focus()
  }


  const handleSubmit = () => {
    const { current } = taskRef
    setTasks([current.value, ...tasks])
  }

  console.log("dimensions" , dimensions);
  return (
    <div>
      <h1>Home</h1>


      <Input ref={inputRef} placeholder="enter task" type="text" />
      <button onClick={handleClick}>EDIT</button>
      {/* <button
        onClick={handleSubmit}
      >ADDTASK</button>

      {tasks.length > 0 ? <ul>
        {
          tasks.map((el, idx) => <li key={idx}>{el}</li>)
        }
      </ul> : <p>No tasks available</p>}




      <Child count={count} />

      <button
        onClick={() => setCount(count + 1)}
      >INC</button>
      <button
        onClick={() => setBool(!bool)}
      >UPDATE BOOL</button> */}
    </div>
  )
}

export default App