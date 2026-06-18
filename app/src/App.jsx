import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
function Student(props){
 return(<h1>{props.name}</h1>)
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Student name="Tanishque"></Student>
      <Student name="Tanishq"></Student>
    </>
  )
}

export default App
