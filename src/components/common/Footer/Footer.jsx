import React from "react";
import "./Footer.css";
import footerLogo from "../../../Assets/images/Logo-mobile.svg";
import demoMap from "../../../Assets/images/Demo-map.png";
import facebookIcon from "../../../Assets/icons/facebook-icon.svg";
import instagramIcon from "../../../Assets/icons/instagram-icon.svg";
import twitterIcon from "../../../Assets/icons/twitter-icon.svg";
import messageIcon from "../../../Assets/icons/message-icon.svg";
import phoneFooterIcon from "../../../Assets/icons/phone-icon-footer.svg";

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
            <div className="footer-columns">
              <h1 className="footer-column-title">Jobs</h1>
              <div className="footer-links">
                <p>SDE</p>
                <p>Manager</p>
                <p>Internship</p>
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
                <img className="footer-map" src={demoMap} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-section">
        <div className="copyright-text">
          <p>© 2023 Kanha & Brothers.</p>
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
