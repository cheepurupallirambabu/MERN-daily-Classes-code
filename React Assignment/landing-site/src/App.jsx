import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NavBar from "./Pages/NavBar";
import './assets/Style.css'
import Home from "./Pages/Home";


const App = () => {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App;