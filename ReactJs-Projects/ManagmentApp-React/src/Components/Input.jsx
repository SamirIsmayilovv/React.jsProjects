import React, { forwardRef } from "react";

const Input = forwardRef(({ label, isTextArea, ...props }, ref) => {
  return (
    <>
      <p style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <label style={{textAlign:'center'}}>{label}</label>
        {isTextArea ? (
          <textarea style={{border:'2px solid black'}} ref={ref} {...props} />
        ) : (
          <input style={{border:'2px solid black'}} ref={ref} {...props} />
        )}
      </p>
    </>
  );
});

export default Input;
