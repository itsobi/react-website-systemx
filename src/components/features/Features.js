import React, { useEffect } from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../images/phone-features.png";
import Feature from "./Feature";
import { featureList } from "./data.js";

// animate on scroll
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="features">
      <div className="container features">
        <div className="u-title" data-aos="flip-left">
          <BsFillBookmarkStarFill color="orangered" size="30" />
          <h2>Core Features</h2>
          <p className="u-text-small u-text-dark">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
            distinctio quis magni aliquid nulla ea!
          </p>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src={phoneFeatures} alt="image" />
          </div>
          <div className="features-right" data-aos="fade-left">
            {featureList.map((feature) => {
              return (
                <Feature
                  key={feature.id}
                  icon={feature.icon}
                  heading={feature.heading}
                  text={feature.text}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
