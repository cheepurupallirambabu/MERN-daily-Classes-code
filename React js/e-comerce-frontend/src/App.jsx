import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import Cart from "./Pages/Cart"
import DesBoard from "./Pages/DesBoard"
import ViewOrderedProducts from "./Pages/ViewOrderedProducts"
import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Style.css'
import LandingPage from "./Pages/LandingPage"


const App = () => {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="desboard" element={<DesBoard />} />
          <Route path="vieworderedproducts" element={<ViewOrderedProducts />} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
