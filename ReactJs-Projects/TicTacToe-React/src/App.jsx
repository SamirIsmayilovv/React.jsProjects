import React, { useState } from "react";
import Player from "./Components/Player";
import GameBoard from "./Components/Gameboard";
import Log from "./Components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("O");

  const handleSelectSquare = () => {
    setActivePlayer(activePlayer === "X" ? "O" : "X");
    setGameTurns();
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
