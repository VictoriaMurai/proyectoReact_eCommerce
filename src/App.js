import React, { useState, createContext } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/Notification'



function App() {

  return (
    <div className="App">

    <NotificationProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Nuestros productos'/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/cart'element={<Cart/>}/>
            <Route path='/checkout'element={<Checkout/>}/>
            <Route path='*' element={<Navigate to='/' replace/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </NotificationProvider>

    </div>
  );
}

export default App;
