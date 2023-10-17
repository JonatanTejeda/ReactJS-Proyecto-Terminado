import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './Stylenav.css';
import {BrowserRouter, Route, Routes, } from "react-router-dom";
import Nosotros from './components/Nosotros';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

      <Routes>
  <Route path="/" element={<ItemListContainer />} />
  <Route path="/productos" element={<ItemListContainer />} />
  <Route path="/productos/:categoria" element={<ItemListContainer />} />
  <Route path="/item/:id" element={<ItemDetailContainer />} />
  <Route path="/nosotros" element={<Nosotros />} />
</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
