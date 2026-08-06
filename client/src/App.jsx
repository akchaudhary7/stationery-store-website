import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { assets } from './assets/assets'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [pathname])

  return null;
}

const App = () => {
  return (
    <div>
      <ScrollToTop/>
    <Navbar/>
    <SearchBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='/place-order' element={<PlaceOrder/> } />
      <Route path='/products/:productId' element={<Product/>} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
