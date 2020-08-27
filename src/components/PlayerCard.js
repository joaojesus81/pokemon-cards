import React, { Component } from "react";
import fetchPokemon from "../api";

class PlayerCard extends Component {
  onPokeGeneration = (selectedPokemons) => {
    this.props.handlePokemonSelection(selectedPokemons);
  };

  componentDidMount() {
    const randomArray = this.props.trainer.currentHand;
    const selectedPokemons = fetchPokemon(randomArray);
    this.onPokeGeneration(selectedPokemons);
  }

  render() {
    const trainer = this.props.trainer;
    const trainerName = Object.keys(trainer.champ)[0];
    return (
      <section key={trainerName} className="Trainer">
        <h1>{trainerName}</h1>
        <img
          src={trainer.champ[trainerName].url}
          alt={trainerName}
          className="TrainerImage"
        ></img>
      </section>
    );
  }
}

export default PlayerCard;
