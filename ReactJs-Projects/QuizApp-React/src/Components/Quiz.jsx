import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { QUESTIONS } from "../questions";
import quizCompleateImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import TimeUpModal from "./TimeUpModal";
import { useCallback } from "react";
import { createPortal } from "react-dom";
import { createContext } from "react";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const modalRef = useRef();

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  };

  const handleShipAnswer = useCallback(() => {
    handleSelectAnswer(answer);
  });

  if (quizIsComplete) {
    return (
      <div id="summary">
        <h2>Quiz Completed!</h2>
        <img src={quizCompleateImg} alt="Quiz Completed" />
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <>
      <div id="quiz">
        <div id="question">
          <QuestionTimer
            timeOut={5000}
            onTimeOut={() => {
              modalRef.current.open();
            }}
          />
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
          <ul id="answers">
            {shuffledAnswers.map((answer) => (
              <li key={answer} className="answer">
                <button onClick={() => handleShipAnswer}>{answer}</button>
              </li>
            ))}
          </ul> 
        </div>
      </div>
    </>
  );
};

export default Quiz;



