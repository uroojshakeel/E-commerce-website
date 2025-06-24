// import { UseQuery } from '@tanstack/react-query';
import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/cart';
import CartDeatil from "./pages/cartdetail"
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Cart />} /> {/* 👈 Now / points to Cart */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/cartdetail/:cartId" element={<CartDeatil />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
