import React, { useState, createContext } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { CartProvider } from './context/CartContext'



function App() {

  return (
    <div className="App">

      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Nuestros productos'/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/cart'element={<h1>CART</h1>}/>
            <Route path='*' element={<Navigate to='/' replace/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
