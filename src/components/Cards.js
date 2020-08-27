import React, { Component } from "react";

class Cards extends Component {
  render() {
    const pokeCardsArray = this.props.currentHand;
    return pokeCardsArray.map((pokemon) => {
      // console.log(pokemon);
      return (
        <section
          key={pokemon.name}
          className={`Pokemon ${pokemon.types[0].type.name.toLowerCase()}`}
        >
          <h3>{pokemon.name}</h3>
          <img
            className="PokemonImage"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          ></img>
          <p className="HP">HP: {pokemon.stats[0].base_stat}</p>
          <p className="AttackPoints">AP: {pokemon.stats[1].base_stat}</p>
          <p className="Type">Type: {pokemon.types[0].type.name}</p>
        </section>
      );
    });
  }
}

export default Cards;
