import { useState } from "react";

const UserInput = ({ name, onChange, identifier, value }) => {
  return (
    <>
      <p>
        <label>{name}</label>
        <input
          onChange={(e) => {
            onChange(identifier, e.target.value);
          }}
          type="number"
          required
          value={value}
        />
      </p>
    </>
  );
};

export default UserInput;
