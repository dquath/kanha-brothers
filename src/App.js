import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./components/common/Navbar/Navbar";
import "./global.css";
import Footer from "./components/common/Footer/Footer";
import SingleService from "./Pages/Services/pages/Single-Service/SingleService";
import Services from "./Pages/Services/Services";
// import Printing from "./Pages/Single-service/Printing";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services/:title" element={<SingleService />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
