import React, { Component } from "react";

class Owner extends Component {
  render() {
    const trainers = Object.entries(this.props.trainers)
    
    return (
      trainers.map((trainer)=>{
        return (
          <section key={trainer[0]} className="Trainer">
            <h1>{trainer[0]}</h1>
            <img src={trainer[1].url} alt={trainer[0]} className="TrainerImage"></img>
            <label>Pokeballs</label>
            {this.displayPokemons(trainer[1].pokeballs)}
          </section>
          )
        })
      );
    }
    
    displayPokemons = (pokeballArray) => {
      const pokeCardsObject = this.props.pokeCards
      return (pokeballArray.map((pokeball)=>{
        return (
          <img key={pokeball} src={pokeCardsObject[pokeball].url} alt={pokeball} className="PokemonIcons"></img>
        )
      })
    )
  }
}

export default Owner;
