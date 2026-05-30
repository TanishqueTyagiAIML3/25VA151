import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'
function App() {
  // const [count, setCount] = useState(0)
  // let increase=()=>{
  //   setCount(count+1)
  // }
  // let dec=()=>{
  //   setCount(count-1)
  // }
  // let reset=()=>{
  //   setCount(0)
  // }
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [pass, setPassword]=useState("")
   function show(){
    if(name==="" || email==="" || pass==="")
      alert("Please Fill The field")
    else
      alert("The Form is Submitted")
  }
  return (
    <>
    {/* <main className='counting'>
      <h3>React Counter Application</h3>
      <p>{count}</p>
      <button onClick={increase}>Increment(+)</button>
      <button onClick={dec}>Decrement(-)</button>
      <button onClick={reset}>Reset</button>
    </main> */}
    <main className='box'>
      <h3>Student Registration Form</h3>
      <input type="name" name="" id="" placeholder='Enter The Name' onChange={(e)=>{
        setName(e.target.value)
      }} />
      <input type="email" name="" id="" placeholder='Enter the Email' onChange={(mail)=>{
        setEmail(mail.target.value)
      }}/>
      <input type="password" name="" id="" placeholder='Enter The Password' onChange={(detect)=>{
        setPassword(detect.target.value)
      }}/>
      <button onClick={show}>Submit</button>
       <h4>{name}</h4>
       <h4>{email}</h4>
       <h4>{pass}</h4>
    </main>

    </>
  )
}

export default App
