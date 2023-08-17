import "./global.css";

import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";

// import Printing from "./Pages/Single-service/Printing";
import Contact from "./Pages/Contact/Contact";
import Footer from "./components/common/Footer/Footer";
import Home from "./Pages/Home/Home";
import Jobs from "./Pages/Jobs/Jobs";
import Navbar from "./components/common/Navbar/Navbar";
import NotFound from "./Pages/404";
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
        <Routes>
          <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
        <Route path="/products" element={<><Navbar /><Product /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
        <Route path="/job-news" element={<><Navbar /><Jobs /><Footer /></>} />
        <Route path="/services/:title" element={<><Navbar /><SingleService /><Footer /></>} />
        <Route path="/products/:title" element={<><Navbar /><SingleProduct /><Footer /></>} />

        </Routes>
    </Router>
  );
}

export default App;
