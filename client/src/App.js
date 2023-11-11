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
import Blogs from "./Pages/Blogs";
import BlogDetails from "./Pages/BlogDetails";

// import ProductPage from "./Pages/ProductPage";
import CategoryContent from "./Pages/CategoryContent";

import ProductSection from "./Pages/Detail";
import Trainers from "./Pages/Trainers";
import TrainerDetails from "./Pages/TrainerDetails";
import Category from "./Components/Landing/Category";
import Pricing from "./Pages/Pricing";
import Payment from "./Pages/Payment";
import OurClass from "./Pages/OurClass";



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
            <Route exact path="/blogs" element={<Blogs/>} />
             <Route path="/blog-details/:id" element={<BlogDetails/>} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/" exact element={<Category/>} />
        <Route path="/category/:title" element={<CategoryContent/>} />
        <Route path="/" exact element={<Pricing/>} />
        <Route path="/payment" element={<Payment/>} />
            <Route path="/trainers/:id" element={<TrainerDetails/>} />
        <Route path="/trainers" element={<Trainers/>} />
        <Route path="/OurClass" element={<OurClass/>} />
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
