import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { assets } from './assets/assets'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collections from './pages/Collections'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Product from './pages/Product'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <h1>Hello Stationery Store</h1>

    <Navbar/>
    <Routes>
      <Route path='/' element={Home} />
      <Route path='/about' element={About} />
      <Route path='/cart' element={Cart} />
      <Route path='/collections' element={Collections} />
      <Route path='/contact' element={Contact} />
      <Route path='/login' element={Login} />
      <Route path='/orders' element={Orders} />
      <Route path='/place-order' element={Login} />
      <Route path='/products/:productId' element={Product} />


    </Routes>

    </div>
  )
}

export default App
