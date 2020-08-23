import React, { Component } from "react";

class Card extends Component {
  render() {
    const pokeCardsArray = Object.entries(this.props.pokeCards);
    return pokeCardsArray.map((pokemon) => {
      console.log(pokemon);
      return (
        <section key={pokemon[0]} className={`Pokemon ${pokemon[1].type}`}>
          <h3>{pokemon[0]}</h3>
          <img
            className="PokemnonImage"
            src={pokemon[1].url}
            alt={pokemon[0]}
          ></img>
          <p className="HP">HP: {pokemon[1].hp}</p>
          <p className="AttackPoints">Attack Points: {pokemon[1].attack}</p>
          <p className="Type">Type: {pokemon[1].type}</p>
        </section>
      );
    });
  }
}

export default Card;
