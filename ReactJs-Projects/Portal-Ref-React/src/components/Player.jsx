import { Fragment, useState } from "react";
import { useRef } from "react";

const Player = () => {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  const playerInputRef = useRef();

  const handleClick = () => {
    setEnteredPlayerName(playerInputRef.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName || "unknown entity"}</h2>
      <p>
        <input ref={playerInputRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;

export const Person = ({ initialName, symbol }) => {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const nameChangeHandler = (name) => {
    setName(name);
  };

  let playerName = <p>{name}</p>;

  if (isEditing) {
    playerName = (
      <input
        placeholder="name.."
        onChange={(e) => {
          nameChangeHandler(e.target.value);
        }}
      />
    );
  }

  return (
    <>
      <div>
        {playerName}
        <button
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </>
  );
};





