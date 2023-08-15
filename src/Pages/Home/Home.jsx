import "./Home.css";

import AboutSection from "../../components/Home/About-Section/AboutSection";
// import Footer from "../../components/common/Footer/Footer";
import GallerySection from "../../components/Home/Gallery-Section/GallerySection";
// import Navbar from "../../components/common/Navbar/Navbar";
import Hero from "../../components/Home/Hero-Section/Hero";
import React from "react";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <GallerySection />
      <AboutSection />
    </div>
  );
};

export default Home;
