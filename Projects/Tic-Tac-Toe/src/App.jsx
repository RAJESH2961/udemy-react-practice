// Add this at the top of App.jsx or index.js
import { useState } from 'react';
import './index.css';
import Player from "./Components/Player";
// index.js or App.js
import Log from './Components/Log';
import GameBoard from "./Components/GameBoard";
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const[activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if(prevTurns.length>0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O';
      }
      const updatedTurns = [{square:{row : rowIndex, col: colIndex}, player:activePlayer},...prevTurns];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
    <Log/>
    </main>
  );
}

export default App;
