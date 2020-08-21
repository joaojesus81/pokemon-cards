import React from "react";
import "./App.css";
import Owner from "./components/owner";
import Wild from "./components/wild";
import Card from "./components/cards";

class App extends React.Component {
  state = {
    pokeCards: {
      Bulbasaur: {
        url:
        "https://vignette.wikia.nocookie.net/pokemon/images/2/21/001Bulbasaur.png/revision/latest/scale-to-width-down/350?cb=20200620223551",
        hp: 45,
        attack: 49,
        type: "Grass",
      },
      Charmander: {
        url:
        "https://vignette.wikia.nocookie.net/pokemon/images/7/73/004Charmander.png/revision/latest/scale-to-width-down/350?cb=20200620223744",
        hp: 39,
        attack: 52,
        type: "Fire",
      },
      Pikachu: {
        url:
        "https://vignette.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/350?cb=20200620223403",
        hp: 35,
        attack: 55,
        type: "Electric",
      },
      Squirtle: {
        url:
        "https://vignette.wikia.nocookie.net/pokemon/images/3/39/007Squirtle.png/revision/latest/scale-to-width-down/350?cb=20200620223922",
        hp: 44,
        attack: 48,
        type: "Water",
      },
    },
    trainers: {
      Ash: {
        url: "https://vignette.wikia.nocookie.net/pokemon/images/6/6a/Ash_PJ_2.png/revision/latest/scale-to-width-down/223?cb=20191027002145",
        pokeballs: ["Pikachu", "Charmander"]
      },
      Brock: {
        url: "https://vignette.wikia.nocookie.net/pokemon/images/6/6a/Brock_SM.png/revision/latest?cb=20170831053247",
        pokeballs: ["Squirtle", "Bulbasaur"]
      }
    }
  };
  render() {
    return (
      <div className="App">
        <header>
          <h1>The Pokemon Game</h1>
        </header>
        <section className="cards">
          <h2>Pokemons </h2>
          <Card pokeCards={this.state.pokeCards}/>
        </section>
        <section>
          <h2>Owners</h2>
          <Owner trainers={this.state.trainers} pokeCards={this.state.pokeCards}/>
        </section>
        <Wild />
      </div>
    );
  }
}

export default App;
