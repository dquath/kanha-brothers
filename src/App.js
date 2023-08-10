import "./global.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import Printing from "./Pages/Single-service/Printing";
import Contact from "./Pages/Contact/Contact";
import Footer from "./components/common/Footer/Footer";
import Home from "./Pages/Home/Home";
import Navbar from "./components/common/Navbar/Navbar";
import Product from "./Pages/Product/Product";
import React from "react";
import Services from "./Pages/Services/Services";
import SingleService from "./Pages/Services/pages/Single-Service/SingleService";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
