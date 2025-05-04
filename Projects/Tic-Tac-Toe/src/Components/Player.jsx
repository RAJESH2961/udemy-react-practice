import { useState } from "react";
export default function Player({initialName,symbol,isActive}){
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName)

    function handleEditClick(){
        // setIsEditing(isEditing ? false : true); its an complex
        // setIsEditing(!isEditing);//it will invert but its not a good practice
        setIsEditing((editing) => !editing);
    }
    function handleChange(event){
        console.log(event);
        setPlayerName(event.target.value);   
    }

    let editableplayerName =<span className="player-name">{playerName}</span>;
    // let btnCaption = "Edit";
    if(isEditing){
        editableplayerName = <input type="text" required value={playerName} onChange={handleChange}/>
        // let btnCaption = "Save";

    }
    return(
        <li className={isActive? 'active' : undefined}>//for applying css 
            <span>
            {editableplayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    );
}