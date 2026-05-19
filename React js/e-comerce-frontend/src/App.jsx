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
import ProtecutedRoute from "./components/ProtecutedRoute"
import ForgetPassword from "./Pages/ForgetPassword"


export const CartContext = createContext();

const App = () => {


  const [isLogin, setIsLogin] = useState();
  const getToken = () => {
    const Token = localStorage.getItem('Token') ? true : false;
    console.log(isLogin);
    setIsLogin(Token)
  }

  useEffect(() => {
    getToken();
  }, [])

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
          <NavBar authenicated={isLogin}/>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="register" element={<Register />} />
            <Route path="home" element={
              <ProtecutedRoute authenicated={isLogin}><Home /></ProtecutedRoute>
            } />
            <Route path="products" element={<ProtecutedRoute authenicated={isLogin}>
              <Products />
            </ProtecutedRoute>} />
            <Route path="cart" element={<ProtecutedRoute authenicated={isLogin}><Cart /></ProtecutedRoute>} />
            <Route path="desboard" element={<ProtecutedRoute authenicated={isLogin}><DesBoard /></ProtecutedRoute>} />
            <Route path="vieworderedproducts" element={<ProtecutedRoute authenicated={isLogin}><ViewOrderedProducts /></ProtecutedRoute>} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </CartContext.Provider>

      </BrowserRouter>

    </>
  )
}

export default App;
