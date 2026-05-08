import React, { useContext } from 'react'
import CarouselContainer from '../components/CarouselContainer';
import DumiProducts from '../components/DumiProducts';
import FooterComponents from '../components/FooterComponents';
import { CartContext } from '../App';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const { items } = useContext(CartContext);

  const navigate = useNavigate();
  const handleGreeting = ()=>{
    let txt ="Welcome To Alpha Mart";
    let wSpeech = window.speechSynthesis;
    let voice = new SpeechSynthesisUtterance(txt)
    wSpeech.speak(voice)
    voice.rate=0.1;
  }
  return (
    <div>
      <button onClick={handleGreeting} id="greeting-btn">Greeting</button>
      <button id="cart-btn" onClick={()=> {
        navigate('/cart')
      }}>Cart {items.length} </button>
        <CarouselContainer />
        <h1>Prodeucts</h1>
        <DumiProducts />
        <FooterComponents />
    </div>

  )
}

export default LandingPage;