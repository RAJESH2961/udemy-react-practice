import { useState } from "react";
export default function Player({name,symbol}){
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing(true);
    }
    let playerName =<span className="player-name">Player 1</span>;
    let btnCaption = "Edit";
    if(isEditing){
        playerName = <input type="text" required />
        let btnCaption = "Save";

    }
    return(
        <li>
            <span>
            {playerName}
            <span className="player-symbol">X</span>
            </span>
            <button onClick={handleEditClick}>{isEditing}</button>
          </li>
    );
}