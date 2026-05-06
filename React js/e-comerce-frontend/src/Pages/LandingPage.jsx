import React from 'react'
import CarouselContainer from '../components/CarouselContainer';
import DumiProducts from '../components/DumiProducts';
import FooterComponents from '../components/FooterComponents';

const LandingPage = () => {

  const handleGreeting = ()=>{
    let txt ="Welcome To Alpha Mart";
    let wSpeech = window.speechSynthesis;
    let voice = new SpeechSynthesisUtterance(txt)
    wSpeech.speak(voice)
    voice.rate=2;
   

    console.log(wSpeech.getVoices());
    
  }
  return (
    <div>
      <button onClick={handleGreeting} id="greeting-btn">Greeting</button>
        <CarouselContainer />
        <h1>Prodeucts</h1>
        <DumiProducts />
        <FooterComponents />
    </div>

  )
}

export default LandingPage;