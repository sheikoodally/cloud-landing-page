import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import HeroSection from "./Components/HeroSection";
import IconOverviewSection from "./Components/IconOverviewSection";
import CollaborateImageSection from "./Components/CollaborateImageSection";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import EarlyAccessForm from "./Components/EarlyAccessForm";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <IconOverviewSection/>
      <CollaborateImageSection/>
      <Testimonials/>
      <EarlyAccessForm/>
      <Footer/>
    </div>
  );
}

export default App;
