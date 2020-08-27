import React, { Component } from "react";

class Cards extends Component {
  render() {
    console.log("im at the card");
    const pokeCardsArray = this.props.currentHand;
    console.log(pokeCardsArray);
    return null;
    pokeCardsArray.map((pokemon) => {
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

export default Cards;
