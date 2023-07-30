import React from "react";
import "./AboutSection.css";
import { useNavigate } from "react-router-dom";
const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-top">
          <h1 className="about-heading">Who we are?</h1>
        </div>
        <div className="about-middle">
          <div className="about-image-name">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt="image"
              />
            </div>
            <div className="about-name">
              <h3>John Doe</h3>
              <p>Shop Owner</p>
            </div>
          </div>
          <div className="about-contact">
            <button onClick={() => navigate("/contact")}>Contact Us</button>
          </div>
        </div>

        <div className="about-bottom">
          <p>
            Lorem ipsum dolor sit amet consectetur. Elit in in et massa cursus.
            Sit eu ut diam nec lectus sem. Placerat lectus tortor risus mi ante
            tristique mauris nisi sed. Non tortor nullam consectetur pulvinar
            vel. Pellentesque egestas turpis pretium adipiscing id est dictum
            velit sit. Id commodo dolor fringilla semper cursus facilisis.
            Egestas donec feugiat nec a. Libero malesuada volutpat pulvinar
            tristique non. Gravida euismod ultricies quam vel a sit. Dignissim
            purus nisl rhoncus sit. Volutpat vitae dolor pellentesque est odio
            lobortis egestas. Est varius ut nulla ac neque neque egestas
            volutpat. Massa ac accumsan nunc laoreet quis nunc nisl augue. Leo
            vitae malesuada ac enim magnis purus. Mi elementum ultrices sit
            morbi commodo bibendum suscipit commodo eget. Risus eu nunc augue
            eget proin arcu hac consequat.
          </p>
          <div className="about-service">
            <button onClick={() => navigate("/services")}>
              Services we offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
