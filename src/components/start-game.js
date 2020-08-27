import React from "react";

function StartGame(props) {
  return (
    <div>
      <h2>Start the Game</h2>
      <button onClick={props.onStepForward}>Click to Start</button>
    </div>
  );
}

export default StartGame;
