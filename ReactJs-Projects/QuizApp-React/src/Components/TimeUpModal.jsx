import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const TimeUpModal = forwardRef(({ message }, ref) => {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current.showModal();
    },
    close: () => {
      dialogRef.current.close();
      console.log("closed!");
    }
  }));

  return createPortal(
    <dialog ref={dialogRef}>
      <h2>{message}</h2>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal-container")
  );
});

export default TimeUpModal;
