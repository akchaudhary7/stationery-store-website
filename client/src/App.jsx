import { useContext, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
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
import { ShopContext } from './context/ShopContext'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [pathname])

  return null;
}

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(ShopContext);
  const location = useLocation();

  return token ? children : <Navigate to='/login' replace state={{ from: location.pathname }} />;
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
      <Route path='/contact' element={<Contact/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/products/:productId' element={<Product/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/cart' element={<ProtectedRoute><Cart/></ProtectedRoute>} />
      <Route path='/orders' element={<ProtectedRoute><Orders/></ProtectedRoute>} />
      <Route path='/place-order' element={<ProtectedRoute><PlaceOrder/></ProtectedRoute>} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
