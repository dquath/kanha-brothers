import "./Footer.css";

import { Link } from "react-router-dom";
import React from "react";
import demoMap from "../../../Assets/images/Demo-map.png";
import facebookIcon from "../../../Assets/icons/facebook-icon.svg";
import footerLogo from "../../../Assets/images/Logo-mobile.svg";
import instagramIcon from "../../../Assets/icons/instagram-icon.svg";
import messageIcon from "../../../Assets/icons/message-icon.svg";
import phoneFooterIcon from "../../../Assets/icons/phone-icon-footer.svg";
import twitterIcon from "../../../Assets/icons/twitter-icon.svg";

const Footer = () => {
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
                <p>Printing</p>
                <p>Xerox</p>
                <p>Book Binding</p>
                <p>Internet Cafe</p>
                <p>Trophies</p>
                <p>Coffee Mug</p>
                <p>T-Shirt</p>
              </div>
            </div>
            <div className="footer-columns">
              <h1 className="footer-column-title">Products</h1>
              <div className="footer-links">
                <p>Coffee Mug</p>
                <p>T-Shirt</p>
                <p>Trophies</p>
                <p>Office Stationary</p>
              </div>
            </div>
          </div>
          <div className="footer-address">
            <div className="footer-columns">
              <h1 className="footer-column-title">Address</h1>
              <div className="footer-links">
                <p>
                  Market Complex, Jyoti Vihar, <br /> Burla, Odisha 768019
                </p>
                <iframe
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
          <img src={facebookIcon} alt="" />
          <img src={instagramIcon} alt="" />
          <img src={twitterIcon} alt="" />
          <img src={messageIcon} alt="" />
          <img src={phoneFooterIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
