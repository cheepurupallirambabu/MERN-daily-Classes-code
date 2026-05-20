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
import { createContext, useEffect, useState } from "react"
import ErrorPage from "./Pages/ErrorPage"
import ProtectedRoute from "./components/ProtectedRoute"
import ForgetPassword from "./Pages/ForgetPassword"
import ViewUsers from "./Pages/ViewUsers"


export const CartContext = createContext();

const App = () => {

  const [isLogin, setIsLogin] = useState(!!localStorage.getItem('Token'));

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('Token');
    setIsLogin(false);
  }

  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    const cartProduct = items.some((item) => item.id == product.id);
    if (!cartProduct) {
      setItems([...items, product]);
    }
  };

  const removeItemscart = (product) => {
    const afterRemovedPdoducts = items.filter((item) => item.id != product.id);
    setItems(afterRemovedPdoducts)
  }


  return (
    <>
      <BrowserRouter>
        <CartContext.Provider value={{ items, addToCart, removeItemscart }}>
          <NavBar authenicated={isLogin} onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<Login onLogin={handleLogin} />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="register" element={<Register />} />
            <Route path="home" element={
              <ProtectedRoute authenicated={isLogin}><Home /></ProtectedRoute>
            } />
            <Route path="products" element={<ProtectedRoute authenicated={isLogin}>
              <Products />
            </ProtectedRoute>} />
            <Route path="cart" element={<ProtectedRoute authenicated={isLogin}><Cart /></ProtectedRoute>} />
            <Route path="desboard" element={<ProtectedRoute authenicated={isLogin}><DesBoard /></ProtectedRoute>} />
            <Route path="vieworderedproducts" element={<ProtectedRoute authenicated={isLogin}><ViewOrderedProducts /></ProtectedRoute>} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="view-users" element={<ProtectedRoute authenicated={isLogin}><ViewUsers /></ProtectedRoute>} />
          </Routes>
        </CartContext.Provider>

      </BrowserRouter>

    </>
  )
}

export default App;
