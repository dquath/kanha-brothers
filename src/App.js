import "./global.css";

import { Route, HashRouter as Router, Routes } from "react-router-dom";

// import Printing from "./Pages/Single-service/Printing";
import Contact from "./Pages/Contact/Contact";
import Footer from "./components/common/Footer/Footer";
import Home from "./Pages/Home/Home";
import Jobs from "./Pages/Jobs/Jobs";
import Navbar from "./components/common/Navbar/Navbar";
import Product from "./Pages/Product/Product";
import React from "react";
import ScrollToTop from "./ScrollToTop";
import Services from "./Pages/Services/Services";
import SingleProduct from "./Pages/Product/pages/Single-Product/SingleProduct";
import SingleService from "./Pages/Services/pages/Single-Service/SingleService";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/job-news" element={<Jobs/>} />
        <Route path="/services/:title" element={<SingleService />} />
        <Route path="/products/:title" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
