import React, { forwardRef } from "react";

const ResultModal = forwardRef(({ result, targetTime }, ref) => {
  return (
    <>
      <dialog ref={ref} className="result-modal" open>
        <h2>You {result}</h2>
        <p>The Target Time was {targetTime} seconds.</p>
        <p>
          You stopped the timer with <strong>X seconds left</strong>
        </p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
});

export default ResultModal;


