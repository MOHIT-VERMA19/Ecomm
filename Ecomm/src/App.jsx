import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Electronics from './components/Electronics';
import Navbar from './components/Navbar';
import './styles/navbar.scss'
import FeaturedProducts from './components/FeaturedProducts';
import Carousel from './components/Carousel';
const items = ['HOME', 'ELECTRONICS', 'BOOKS', 'MUSIC', 'MOVIES', 'CLOTHING', 'GAMES','FURNITURE','ELECTRONICS','TRAVEL','BOTANICAL','CATEGORY NAME'];

import image1 from './assets/laptop.jpg';
import image2 from './assets/tshirt.jpg';
import image3 from './assets/watch.jpg';
import image4 from './assets/purse.jpg';
import image5 from './assets/brownPurse.jpg';
import image6 from './assets/wireless-headphones.jpg'

const images = [
  { image: image1, title: 'Product 1' },
  { image: image2, title: 'Product 2' },
  { image: image3, title: 'Product 3' },
  {image: image4, title: 'Product 4'},
  
  // Add more items as needed
];

function App() {

  return (
    <Router>
      <div>
        <Navbar items = {items}/>
        <div>
          <FeaturedProducts></FeaturedProducts>
          <Carousel items={images} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electronics" element={<Electronics />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
