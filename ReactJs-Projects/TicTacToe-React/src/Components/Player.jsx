// Player.js
import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => { 
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);
  };

  const handlerChange = (name) => {
    setName(name);
    console.log(name);
  };

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = (
      <input
        required
        defaultValue={name}
        type="text"
        onChange={(e) => {
          handlerChange(e.target.value);
        }}
      ></input>
    );
  }
  return (
    <>
      <li className={isActive ? 'active' : undefined}> 
        <span className="player">
          {playerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
};

export default Player;
