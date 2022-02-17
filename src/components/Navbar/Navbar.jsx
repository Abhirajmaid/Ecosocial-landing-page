import React, { useState } from "react";
import { CTABtn } from "../CTABtn/CTABtn";
// import { FaTimes } from "react-icons/fa";
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
      </nav>
    </div>
  );
};
