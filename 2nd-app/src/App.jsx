import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const API="https://restcountries.com/v3.1/all?fields=name,flags"
  const [data,setData]=useState([])
  const [name,setName]=useState("")
  useEffect(()=>{
    async function datas(){
    const data=await fetch(API)
    const jsn= await data.json()
    setData(jsn)
    } datas()
  },[])
  return (
    <>
      <main style={{ border:'2px solid black',padding:'30px', display:'grid', gridTemplateColumns:"auto auto auto auto", columnGap:'30px',rowGap:'20px',fontStyle:'itaic'}}> 
        <h1 style={{gridColumnStart:'1',gridColumnEnd:'5',textAlign:'center'}}>Countries Flag <input type='text' placeholder='enter country name' style={{display:'block', width:'300px',height:'50px',textAlign:'center',margin:'30px auto'}}onChange={(e)=>{
setName(e.target.value)
        }}></input>
          </h1> 
      {data.map((val)=>{
        if(val.name.common==name){
        return(

          <div><img src={val.flags.png} style={{width:'300px', height:'200px'}}></img><p>{val.name.common}</p></div>
        )}     })
}
      </main>
    </>
  )
}

export default App
