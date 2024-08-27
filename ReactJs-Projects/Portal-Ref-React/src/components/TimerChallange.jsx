import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallange = ({ title, targetTime }) => {
  const timerRef = useRef();
  const dialog = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timeRemainig, setTimeRemainig] = useState(targetTime * 1000);

  const handleStart = () => {
    timerRef.current = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000);
    setTimerStarted(true);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    setTimerStarted(false);
    checkResult();
  };

  const checkResult = () => {
    if (timeElapsed >= targetTime) {
      setTimerExpired(true);
      dialog.current.showModal();
    }
  };

  return (
    <>
      {timerExpired && (
        <ResultModal
          ref={dialog}
          targetTime={targetTime}
          result={timeElapsed >= targetTime ? "LOST" : "WON"}
          timeElapsed={timeElapsed}
        />
      )}

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time Is running..." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallange;

