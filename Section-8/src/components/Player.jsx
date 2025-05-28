import { useState, useRef } from "react";
export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  // const [submitted, setSubmitted] = useState(false);
  //function to handle Name
  // function handleName(event){
  //   setSubmitted(false);
  //   setEnteredPlayerName(event.target.value);
  // }
  function handleClick(){
    // setSubmitted(true);
    setEnteredPlayerName(playerName.current.value);
  }
  return (
    <section id="player">
      {/* <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'Unknown User'}</h2> */}
      {/* or */}
      <h2>Welcome {enteredPlayerName ??   'Unknown User'}</h2>
      <p>
        <input  type="text" ref={playerName} />
        {/* <input onChange={handleName} type="text" value={enteredPlayerName} /> */}
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
