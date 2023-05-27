import React from "react";
import "./Services.css";

const Services = () => {
  return <div className="services">
    <div className="heading">
      <h1 className="hdng">Services</h1>
    </div>
      <div className="btndesc">
        <div className="description">
          <p>Lorem ipsum dolor sit amet consectetur.
          Amet at fermentum ut sed elit adipiscing 
          cursus ullamcorper libero. </p>
        </div>
        <div className="btn">
          <button>Explore our services</button>
        </div>
      </div>
      <div className="our-services">
        <h2>Our Services</h2>
        <div className="image-upper">
          <img src="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img"/>
          <img src="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img"/>
          <img src="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img"/>
        </div>
        <div className="image-lower">
          <img src="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img"/>
          <img src="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img"/>
          <img src="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img"/>
        </div>
      </div>
  </div>;
};

export default Services;
