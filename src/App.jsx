
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/login/login'
import Register from './components/login/Register'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/home/HomePage'
import ProductMenu from './pages/menu/ProductMenu'
import { CartProvider } from './context/CartContext'
import Thanku from './pages/thankyouPage/thanku'

function App() {
  

  return (
    <>
      <CartProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Register/>} />
        <Route path='/Home' element={<HomePage/>} />
        <Route path='/ProductMenu' element={<ProductMenu/>} />
        <Route path='/thankyou' element={<Thanku/>}/>
      </Routes>
    </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
