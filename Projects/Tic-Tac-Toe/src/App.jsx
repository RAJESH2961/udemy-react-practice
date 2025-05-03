// Add this at the top of App.jsx or index.js
import './index.css';
import Player from "./Components/Player";
// index.js or App.js
import GameBoard from "./Components/GameBoard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player 1" symbol="X" />
          <Player initialName="player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
