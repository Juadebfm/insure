import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import Footerpat from "../assets/bg-pattern-footer-desktop.svg";

const Footer = () => {
  return (
    <footer className="footer_fix position-relative z-1">
      <div className="footer_container">
        <div className="d-flex align-items-center justify-content-between icons_logo">
          <a className="navbar-brand logo fs-1" href="#">
            Insure
          </a>
          <div className="icons">
            <IoLogoFacebook className="fs-3 social_icon" />
            <FaTwitter className="fs-3 social_icon" />
            <IoLogoPinterest className="fs-3 social_icon" />
            <FaInstagram className="fs-3 social_icon" />
          </div>
        </div>
      </div>

      <div className="footer_lists">
        <ul className="list-group ">
          <span className="text-uppercase">Our Company</span>
          <li className="text-uppercase">How we work</li>
          <li className="text-uppercase">Why insure?</li>
          <li className="text-uppercase">View Plans</li>
          <li className="text-uppercase">Reviews</li>
        </ul>
        <ul className="list-group ">
          <span className="text-uppercase">Help Me</span>
          <li className="text-uppercase">FAQ</li>
          <li className="text-uppercase">Term of use</li>
          <li className="text-uppercase">Privacy policy</li>
          <li className="text-uppercase">Cookies</li>
        </ul>
        <ul className="list-group ">
          <span className="text-uppercase">Contact</span>
          <li className="text-uppercase">Sales</li>
          <li className="text-uppercase">Support</li>
          <li className="text-uppercase">Live chat</li>
        </ul>
        <ul className="list-group ">
          <span className="text-uppercase">Others</span>
          <li className="text-uppercase">Careers</li>
          <li className="text-uppercase">Press</li>
          <li className="text-uppercase">Licenses</li>
        </ul>
      </div>

      <img src={Footerpat} alt="" className="position-absolute top-0 z-n1 "/>
    </footer>
  );
};

export default Footer;
