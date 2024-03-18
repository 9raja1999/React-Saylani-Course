import React, { useRef, useState } from 'react'
import Header from './components/Header'
import MainLayout from './layouts/MainLayout'
import Child from './components/Child'
import Input from './components/forms/Input'



function App() {
  const [count, setCount] = useState(0)
  const [bool, setBool] = useState(false)
  const taskRef = useRef(null)
  const [tasks, setTasks] = useState([])




  const handleSubmit = () => {
    const { current } = taskRef
    setTasks([current.value, ...tasks])
  }
  return (
    <div>
      <h1>Home</h1>


      <Input ref={taskRef} placeholder="enter task" type="text" />
      <button
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
      >UPDATE BOOL</button>
    </div>
  )
}

export default App