import Player from "./Components/Player";
// index.js or App.js
import './index.css';  // or './App.css'
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player 1" symbol="X" />
          <Player name="player 2" symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
