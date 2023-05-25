import React from "react";
import "./Home.css";
import Navbar from "../../components/common/Navbar/Navbar";
import Hero from "../../components/Home/Hero-Section/Hero";
import Footer from "../../components/common/Footer/Footer";
import ServiceSection from "../../components/Home/Service-Section/ServiceSection";
import AboutSection from "../../components/Home/About-Section/AboutSection";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      {/* <ServiceSection /> */}
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
