import { useState, useRef, useEffect } from 'react'
import Button from "./components/forms/buttons/Button.jsx";
import TextField from './components/forms/inputs/TextField.jsx';

function App() {
  const headingRef = useRef(null) // 0 || null
  const taskRef = useRef(null)
  const priorityRef = useRef(null)
  const statusRef = useRef(null)
  const [list, setList] = useState([])

  useEffect(() =>{
    taskRef.current.value = ""
    priorityRef.current.value = ""
    statusRef.current.value = ""
  }, [list])


  function addTask() {
    const data = taskRef.current.getChildData()
    console.log("data", data);

    // let newList = [...list,
    //   `task : ${taskRef.current.value} 
    //   | status : ${statusRef.current.value} 
    //   | priority : ${priorityRef.current.value}`]
    // setList(newList)
    // headingRef.current.style.color = "red"
    // headingRef.current.style.backgroundColor = "red"
  }


  return (
    <>
      <h1 ref={headingRef}>Todo App</h1>

      <TextField placeholder="Your task" ref={taskRef}/>
      <TextField placeholder="Priority" ref={priorityRef}/>
      <TextField placeholder="Status" ref={statusRef}/>


      <Button title="ADD" handler={addTask} />

      <ul>
        {
          list.map((task, index) => {
            return <li key={index}>
              {task}
              <Button title="delete" id={index}/>
            </li>
          })
        }
      </ul>
    </>
  )
}


export default App;