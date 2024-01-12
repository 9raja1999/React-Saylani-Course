import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
function About() {
  const [searchParams] = useSearchParams()
  console.log("lklk" , searchParams.get('foo'))
  return (
    <>
      <h1>About</h1>
    </>
  )
}

export default About