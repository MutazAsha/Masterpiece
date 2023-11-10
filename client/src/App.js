import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from './Context/AuthContext';
import "./App.css";
import Home from "./Pages/Home";
import Footer from "./Components/website/Footer";
import Navbar from "./Components/website/Navbar";
import NotFound from "./Components/website/NotFound";
import Account from "./Pages/Account";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";

import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";

// import ProductPage from "./Pages/ProductPage";
import CategoryContent from "./Pages/CategoryContent";

import ProductSection from "./Pages/Detail";
import Trainers from "./Pages/Trainers";
import TrainerDetails from "./Pages/TrainerDetails";
import Category from "./Components/Landing/Category";



function App() {
  return (
    <div className="App">
      <Router>
        {/* <AuthProvider> */}
        <Navbar />
        <div className="h-full">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
          
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/" exact element={<Category/>} />
        <Route path="/category/:title" element={<CategoryContent/>} />
           
            <Route path="/trainers/:id" element={<TrainerDetails/>} />
        <Route path="/trainers" element={<Trainers/>} />
    
            <Route path="/product/:id" element={<ProductSection />} />
 
        
      
          </Routes>
        </div>
        <Footer />
        {/* </AuthProvider> */}
      </Router>
    </div>
  );
}

export default App;
