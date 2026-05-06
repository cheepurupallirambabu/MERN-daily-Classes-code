import { useState } from 'react'
import Nav from './Components/Nav'
import Products from './Components/Products'
import './Components/Nav.css'



const App = () => {
  // let myDetails ={
  //   Name : "CheepurupalliRambabu",
  //   RollNo : "23NR1A0538",
  //   Branch : "CSE",
  //   Role : "Student",
  //   CollageName : "BITS Vizag",
  // }

  return (
    <>
    <Nav />
    <Products />
    </> 
  )
}


export default App;
