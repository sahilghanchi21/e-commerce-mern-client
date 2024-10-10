import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <p>All Rights Reserved &#169; Sahil Ghanchi </p>
        <div className="bottom-footer">
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li id="last-li">
              <Link to="/policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
