import React, { useState } from "react";
import "./Questions.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Questions = ({ title, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="container question">
      <div className="question-title">
        <h4>{title}</h4>
        <button
          className="question-icon"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? (
            <AiOutlineMinus color="red" />
          ) : (
            <AiOutlinePlus color="green" />
          )}
        </button>
      </div>
      <div className="question-answer">
        {showAnswer ? <p className="u-text-small">{answer}</p> : null}
      </div>
    </div>
  );
};

export default Questions;
