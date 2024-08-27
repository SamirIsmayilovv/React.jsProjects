import { useEffect, useState } from "react";

const QuestionTimer = ({ timeOut, onTimeOut }) => {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeOut();
    }, timeOut);

    return () => clearTimeout(timer);
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    if (remainingTime <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [remainingTime]);

  return (
    <progress
      id="question-time"
      max={timeOut}
      value={timeOut - remainingTime}
    />
  );
};

export default QuestionTimer;
