import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const foodAPI="https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";
    const [meal,setMeals]=useState([])
  // // async function food(){
  // //   const data=await fetch(foodAPI)
  // //   const cvt=await data.json();
  // //   setMeals(cvt)
  // }
  useEffect(()=>{
    async  function name(){
    const data= await fetch(foodAPI) 
    const jsn= await data.json()
    setMeals(jsn.meals)
    }
    name()
   },[])
   console.log(meal)
  function add(){
    setCount(count+1)
  }
  function sub(){
    setCount(count-1)
  }
  if(count<0)
  {
    alert("There is no item in the cart")
    setCount(0)
  }
  return (
    <>
    <header style={{display:'grid', gridTemplateColumns:'auto auto auto'}}>
      <img src="https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/swiggy-202210-1665476531-650x510.jpg" alt=""  style={{width:'40px', height:'30px'}}/>
      <input type="text" placeholder='search food' style={{width:'300px', borderRadius:'5%',textAlign:'center'}}></input>
      <div><img src="https://static.vecteezy.com/system/resources/previews/024/095/178/original/shopping-cart-market-free-png.png" alt="" style={{width:'30px ' , height:'30px'}} /><span>{count}</span></div>
    </header>
    <main style={{display:'grid',  gridTemplateColumns:'auto auto auto auto ', margin:'20px' }}> 
     { meal.map((val,idx)=>{
      return (
         <div style={{alignItems:'center', justifyContent:'center', textAlign:'center'}}><img src={val.strMealThumb} alt="cruppted"  style={{display:'block', width:'100px' ,height:'100px', margin:'30px 50px'}}/> <p>{val.strMeal}</p> <button style={{background:'green'}} onClick={add}>+</button>  <button style={{background:'green'}} onClick={sub} >-</button> </div>)
      })
    }
    </main>
    <footer style={{background:'grey', textAlign:'center',color:'white'}}>
          Copyright reserved by 2026
    </footer>
    </>
  )
}

export default App
