import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Gaurav Diwakar</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link spy={true} to='Navbar' smooth={true}>
              <li>Home</li>
            </Link>
            <Link spy={true} to='Service' smooth={true} activeClass='activeClass'>
              <li>Service</li>
            </Link>
            <Link spy={true} to='Experience' smooth={true}>
              <li>Experiences</li>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to='Testimonials' smooth={true}>
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to='Contact' smooth={true}>
              
        <button className="button n-button ">Contact us</button>
            </Link>
      </div>
    </div>
  );
};

export default Navbar;
