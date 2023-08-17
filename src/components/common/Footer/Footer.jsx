import "./Footer.css";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import facebookIcon from "../../../Assets/icons/facebook-icon.svg";
import footerLogo from "../../../Assets/images/Logo-mobile.svg";
import instagramIcon from "../../../Assets/icons/instagram-icon.svg";
import messageIcon from "../../../Assets/icons/message-icon.svg";
import phoneFooterIcon from "../../../Assets/icons/phone-icon-footer.svg";
import twitterIcon from "../../../Assets/icons/twitter-icon.svg";

const Footer = () => {
  const [serviceCategories, setServiceCategories] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  useEffect(() => {
    fetch(
      "https://kanhna-brothers-website.onrender.com/api/services/categories/all-Categories"
    )
      .then((response) => response.json())
      .then((data) => {
        setServiceCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching service categories:", error);
      });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productCategoriesResponse = await fetch(
          "https://kanhna-brothers-website.onrender.com/api/products/categories/allProductCategories"
        );
        const productCategoriesData = await productCategoriesResponse.json();
        setProductCategories(productCategoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="footer">
      <div className="footer-top-section">
        <div className="footer-logo">
          <img src={footerLogo} alt="footer-logo" />
        </div>
        <div className="footer-row">
          <div className="footer-links-section">
            <div className="footer-columns">
              <h1 className="footer-column-title">Services</h1>
              <div className="footer-links">
                {serviceCategories.map((category) => (
                  <Link to={`/services/${category.Tittle}`}>
                    <p>{category.Tittle}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="footer-columns">
              <h1 className="footer-column-title">Products</h1>
              <div className="footer-links">
                {productCategories.map((category) => (
                  <Link to={`/products/${category.Tittle}`}>
                    <p>{category.Tittle}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-address">
            <div className="footer-columns">
              <h1 className="footer-column-title">Address</h1>
              <div className="footer-links">
                <a href="https://goo.gl/maps/pM3uCPJioHS4ai4TA" target="_blank">
                  <p>
                    Market Complex, Jyoti Vihar, <br /> Burla, Odisha 768019
                  </p>
                </a>
                <iframe
                  className="displayed-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.791540291418!2d83.87897397526304!3d21.47669457224302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213c30d3c00001%3A0x57a50679ae0cef7a!2sKanha%20%26%20Brothers!5e0!3m2!1sen!2sin!4v1691683540070!5m2!1sen!2sin"
                  width="223"
                  height="200"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-section">
        <div className="copyright-text">
          <p>
            © 2023 <Link to={"/"}>Kanha & Brothers</Link>.
          </p>
          <p>
            Crafted by <span>DQuath</span>
          </p>
        </div>
        <div className="social-icons">
          <a
            target="_blank"
            href="https://www.facebook.com/Kanhaandbrothers.in?mibextid=ZbWKwL"
          >
            <img src={facebookIcon} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/kanha_and_brothers/?igshid=MzRlODBiNWFlZA%3D%3D"
          >
            <img src={instagramIcon} alt="" />
          </a>
          <a target="_blank" href="https://twitter.com/home">
            <img src={twitterIcon} alt="" />
          </a>
          <a href="mailto:kanhaandbrothers@gmail.com">
            <img src={messageIcon} alt="" />
          </a>

          <a href="tel:+91-9439223702">
            <img src={phoneFooterIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
