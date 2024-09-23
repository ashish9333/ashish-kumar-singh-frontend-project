import React from 'react';
import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';
import Middle from './Components/Middle';
import Middled from './Components/Middled';
import Middler from './Components/Middler';
import Testimonials from './Components/Testimonials';




function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Middle/>
      <Middled/>
      <Middler/>
      <Testimonials/>
      <Footer/>
 
    </div>
  );
}

export default App;
