import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Elegance from './titreElegance/Elegance';
import Navbar from './navbar/Navbar';
import Collection from './Collection/Collection';
import Trending from './Trending/Trending';
import Sellers from './Sellers/Sellers';
import Description from './description/Description';
import Join from './Join-comunity/Join';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import Final from './final/Final';
import Catalog from './Context/Catalog';
import ShopProvider from './ShopContext/ShopContext';
import About from './Context/About';
import Contact from './Context/Contact';

function Home() {
  return (
    <>
      <Navbar />
      <Collection />
      <Trending />
      <Sellers />
      <Description />
      <Join />
      <ImageCarousel />
      <Final />
    </>
  );
}

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Elegance />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;

