import React, { useEffect, useLayoutEffect, useRef, useState, useTransition } from 'react'
import List from '../components/List'

function About() {
  const btnRef = useRef()
  const modalRef = useRef()
  const [isPending, setTransition] = useTransition()
  const [show, setShow] = useState(false)
  const [value, setValue] = useState('')
  const [list, setList] = useState([])

  const [value2, setValue2] = useState('')

  useLayoutEffect(() => {
    if (btnRef.current == null || modalRef.current == null) return
    const { bottom } = btnRef.current.getBoundingClientRect()

    modalRef.current.style.top = `${bottom + 10}px`
  }, [show])

  const handleChange = (e) => {
    setValue(e.target.value)

    setTransition(() => {
      let data = []
      for (var i = 0; i < 2000; i++) {
        data.push(e.target.value)
      }

      setList(data)
    })
  }

  const handleChaneTwo = (e) => setValue2(e.target.value)

  return (
    <div>
      <button
        ref={btnRef}
        onClick={() => setShow(prev => !prev)}
      >
        SHOW
      </button>

      {
        show && <div
          ref={modalRef}
          style={{
            position: 'absolute'
          }}
        >
          MODAL
        </div>
      }
      <h1>UseTransition</h1>
      <input type="text" onChange={handleChange} value={value} />
      {
        isPending ? 'loading ....' : (
          list.map((el, index) => {
            return <div key={index}>{el}</div>
          })
        )
      }
      <h1>UseMemo</h1>
      <input type="text" onChange={handleChaneTwo} value={value2} />
      <List value={value2} />
    </div>
  )
}

export default About