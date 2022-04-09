import React, { useEffect } from "react";
import "./Header.css";
import phoneHeader from "../../images/phone-header-bg.png";
import Button from "../button/Button";
import { BsMouse } from "react-icons/bs";

// animate on scroll
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="flip-left">
          <h1>
            <span>The World's Leading</span>
            <span>Cross-Platfrom Secure</span>
            <span>Messaging System</span>
          </h1>
          <p className="u-text-small u-text-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            atque esse sequi molestias harum praesentium a quo, nemo dolore
            expedita?
          </p>
          <div className="header-cta">
            <Button text="Get Started" btnClass="btn-light" href="#" />
            <Button text="How It Works" btnClass="btn-dark" href="#faq" />
          </div>
        </div>
        <div className="header-right">
          <img src={phoneHeader} alt="image" data-aos="flip-left" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="white" size="25" className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
