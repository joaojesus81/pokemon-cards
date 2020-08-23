import React from "react";

function PlayerOne(props) {
  const trainer = Object.entries(props.trainers);
  return (
    <section key={trainer[0]} className="Trainer">
      <h1>{trainer[0]}</h1>
      <img src={trainer[1].url} alt={trainer[0]} className="TrainerImage"></img>
    </section>
  );
}

export default PlayerOne;
