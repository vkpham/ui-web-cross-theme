import React from 'react'
import Preloader from '../components/Preloader.jsx'
import Header from '../components/Header.jsx'
import Slider from '../components/Slider.jsx'
import About from '../components/About.jsx'
import UpcomingEvent from '../components/UpcomingEvent.jsx'
import CallToAction from '../components/CallToAction.jsx'
import Sermon from '../components/Sermon.jsx'
import Gallery from '../components/Gallery.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <div>
      <Preloader/>
      <Header/>
      <Slider/>
      <About/>
      <UpcomingEvent/>
      <CallToAction/>
      <Sermon/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default Home
