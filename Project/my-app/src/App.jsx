import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
function Item(props){
  return(
    <div className="container">
      <img src={props.image} alt="crupp"/>
      <button  style={{backgroundColor:'blue'}}onClick={props.adding}>Add To Cart</button>
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)
  function add(){
    const conf=confirm("Are you sure you want to add")
    if(conf===true)
    {
    setCount(count+1)
    alert("The Product was succesfully added")
    }
  }
  return (
    <>
    <main>
      <header>
        <img src="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png"  alt="" style={{width:'40px',height:'30px',margin:'10px'}} />
        <a href="">Home</a>
        <select name="" id="" style={{height:'20px', marginTop:'10px'}}><option value="">Select Category</option><option value="" >Clothes</option><option value="">Shoes</option><option value="">Mobile Phones</option></select>
        <a href="">Location</a>
        <a href="">Return & order </a>
        <a href="">{count}<img src="https://cdn.pixabay.com/photo/2015/11/03/09/00/shopping-cart-1019925_1280.jpg" alt=""  style={{width:'30px',height:'20px',paddingRight:'10px',display:'inline-block'}}/>Cart</a>
      </header>
      <h3>Wear the Trend, Own the Look</h3>
      <div className="product">
        <Item image="https://tse4.mm.bing.net/th/id/OIP.WPl6AIASCLVeM-aiBOj0WAHaJ4?r=0&cb=thfvnextfalcon2&w=521&h=695&rs=1&pid=ImgDetMain&o=7&rm=3" adding={add}></Item>
        <Item image="https://dimg.dillards.com/is/image/DillardsZoom/zoom/polo-ralph-lauren-quilt-beaton-lined-field-jacket/00000000_zi_f4784265-e60f-437a-a40c-297c51b78996.jpg" adding={add}></Item>
        <Item image="https://tse2.mm.bing.net/th/id/OIP.qep-OPFj3MDwjp8lX4pZEQHaHa?r=0&cb=thfvnextfalcon2&w=535&h=535&rs=1&pid=ImgDetMain&o=7&rm=3"  adding={add}></Item>
        <Item image="https://tse2.mm.bing.net/th/id/OIP.HQxo3SkurbI-42_eQ-bRywHaKs?r=0&cb=thfvnextfalcon2&w=800&h=1155&rs=1&pid=ImgDetMain&o=7&rm=3"  adding={add}></Item>
        <Item image="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/635891/87/mod01/fnd/IND/fmt/png/PREMIUM-ESSENTIALS-Boxy-Fit-Graphic-Tee"  adding={add}></Item>
        <Item image="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/629587/01/mod03/fnd/IND/fmt/png/T7-ALWAYS-ON-Men's-Track-Jacket"  adding={add}></Item>
        <Item image="https://tse3.mm.bing.net/th/id/OIP.HB5Hucklvc1p0Im046vWrgHaJo?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3"  adding={add}></Item>
        <Item image="https://n.nordstrommedia.com/id/sr3/ca66619f-9489-4b5c-b007-82a2948eb0f8.jpeg?h=365&w=240&dpr=2"  adding={add}></Item>
      </div>
      <footer>
        <p style={{borderBottom:'2px solid grey'}}>Copyright Reseverd by ABES Enginnering College</p>
        <div style={{display:'grid',gridTemplateColumns:'auto auto auto'}}>
          <p><ul>ABout Clothes
            <li>Clothes Is Just like a Fashion . Everyone have differnet aspect about clothes</li>
            </ul> </p>
          <p>
            Contact Details
            <ul>
            <li>phone number: 9650191080</li>
            <li>Email: tanishque30@gmai.com</li>
            </ul>
          </p>
          <p>
            News Letter Subscription 
            <ul>
              <li>tyagi07183@gmail.com</li>
            </ul>
          </p>
        </div>
      </footer>
    </main>
    </>
  )
}

export default App
