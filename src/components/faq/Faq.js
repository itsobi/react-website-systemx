import React, { useEffect } from "react";
import "./Faq.css";
import { MdOutlineLibraryBooks } from "react-icons/md";
import Questions from "./Questions";
import { questions } from "./data.js";

// animate on scroll
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="faq">
      <div className="container faq">
        <div className="u-title" data-aos="fade-down">
          <MdOutlineLibraryBooks color="orangered" size="30" />
          <h2>FAQs</h2>
          <p className="u-text-small u-text-dark">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
            distinctio quis magni aliquid nulla ea!
          </p>
        </div>
        <div className="questions" data-aos="fade-left">
          {questions.map((question) => {
            const { id, title, answer } = question;
            return <Questions key={id} title={title} answer={answer} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
