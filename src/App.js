import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import ContactUs from "./Pages/Home/ContactUs"
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div  className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="appointment" element={<RequireAuth>
          <Appointment />
            </RequireAuth>
          }></Route>
        
      </Routes>
    </div>
  );
}

export default App;
