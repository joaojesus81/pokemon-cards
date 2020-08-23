import React, { Component } from "react";

class ChampSelect extends Component {
  render() {
    const trainers = Object.entries(this.props.trainers);

    return trainers.map((trainer) => {
      return (
        <section key={trainer[0]} className="Trainer">
          <h1>{trainer[0]}</h1>
          <img
            src={trainer[1].url}
            alt={trainer[0]}
            className="TrainerImage"
          ></img>
        </section>
      );
    });
  }

  displayPokemons = (pokeballArray) => {
    const pokeCardsObject = this.props.pokeCards;
    return pokeballArray.map((pokeball) => {
      return (
        <img
          key={pokeball}
          src={pokeCardsObject[pokeball].url}
          alt={pokeball}
          className="PokemonIcons"
        ></img>
      );
    });
  };
}

export default ChampSelect;
