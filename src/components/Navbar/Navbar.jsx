import React, { useState } from "react";
import { CTABtn } from "../CTABtn/CTABtn";
import { FaTimes } from "react-icons/fa";
// import logo from "./images/logo.png";
import "./style.css";

export const Navbar = () => {
  //   const [click, setClick] = useState(false);
  //   const handleClick = () => setShow(!show);

  const [show, setShow] = useState(false);

  const changeShow = () => {
    if (window.scrollY > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", changeShow);
  return (
    <div className={show ? "header header-opacity" : "header"}>
      <nav className="navbar">
        <CTABtn bgcolor="#FFCC1D" color="black" />
        {/* <div className="hamburger" onClick={handleClick}>
          {click ? (
            window.removeEventListener("scroll", changeShow)
          ) : (
            <FaTimes size={15} style={{ color: "black" }} />
          )}
        </div> */}
        {/* <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" onClick={closeMenu}>
              Testimonials
            </a>
          </li>
          <li className="nav-item">
            <a href="#demo" onClick={closeMenu}>
              Demo
            </a>
          </li>
        </ul> */}
      </nav>
    </div>
  );
};
