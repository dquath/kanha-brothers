// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./components/common/Navbar/Navbar";
import "./global.css";
import Footer from "./components/common/Footer/Footer";
// import Services from "./Pages/Services/Services";
import Printing from "./Pages/Single-service/Printing";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/services" element={<Printing/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
