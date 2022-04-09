import React, { useState } from "react";
import "./Navbar.css";
import { GiAnimalHide } from "react-icons/gi";
import { AiOutlineBars } from "react-icons//ai";
import { RiCloseLine } from "react-icons/ri";
import Button from "../button/Button";
import "../button/Button.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="container navbar">
      <div className="logo">
        <p className="logo-text">
          SYSTEM
          <span>
            <GiAnimalHide
              color="orangered"
              size={28}
              style={{ marginLeft: "6px" }}
            />
          </span>
        </p>
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#download">Download</a>
          </li>
          <li>
            <a href="#subscribe">Subscribe</a>
          </li>
          <li className="nav-btn">
            <Button text="Get Started" btnClass="btn-dark" href="#faq" />
          </li>
        </ul>
      </menu>
      <div
        className="menu-icons"
        onClick={() => setShowMenu(!showMenu)}
        style={{ cursor: "pointer" }}
      >
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
