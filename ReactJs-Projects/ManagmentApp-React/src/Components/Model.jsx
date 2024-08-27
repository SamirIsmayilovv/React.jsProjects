import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";


const Modal = forwardRef(({ children }, ref) => {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    close: () => {},
    open: () => {
      dialogRef.current.showModal();
    },
  }));

  return createPortal(
    <dialog ref={dialogRef} className="border-2 border-black px-10 py-10">
      {children}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;

