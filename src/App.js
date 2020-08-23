import React from "react";
import "./App.css";
import ChampSelect from "./components/ChampSelect";
import Card from "./components/cards";
import StartGame from "./components/start-game";
import PlayerOne from "./components/playerOne";

class App extends React.Component {
  state = {
    isStarted: true,
    trainerOne: { champ: {}, currentHand: {} },
    trainerTwo: { champ: {}, currentHand: {} },
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
      "Ash Ketchum": {
        url:
          "https://vignette.wikia.nocookie.net/pokemon/images/6/6a/Ash_PJ_2.png/revision/latest/scale-to-width-down/223?cb=20191027002145",
      },
      Misty: {
        url:
          "https://vignette.wikia.nocookie.net/pokemon/images/f/f5/SM_Misty.png/revision/latest/scale-to-width-down/213?cb=20191106145216",
      },
      Brock: {
        url:
          "https://vignette.wikia.nocookie.net/pokemon/images/6/6a/Brock_SM.png/revision/latest?cb=20170831053247",
      },
      Jessie: {
        url:
          "https://vignette.wikia.nocookie.net/pokemon/images/7/7d/Jessie_SM.png/revision/latest?cb=20181129161917",
      },
      James: {
        url:
          "https://vignette.wikia.nocookie.net/pokemon/images/2/2f/James_SM.png/revision/latest?cb=20181129164055",
      },
    },
  };
  render() {
    return (
      <div className="App">
        <header>
          <h1>The Pokemon Game</h1>
          {this.state.isStarted && (
            <button onClick={this.onStartGame}>Start Again</button>
          )}
        </header>
        <main>
          <section>
            {!this.state.isStarted && (
              <StartGame
                isStarted={this.state.isStarted}
                onStartGame={this.onStartGame}
              />
            )}
          </section>
          {/* <section>
            {this.state.isStarted && <h2>Pokemons</h2>}
            {this.state.isStarted && <Card pokeCards={this.state.pokeCards} />}
          </section> */}
          <section>
            {this.state.isStarted &&
              Object.values(this.state.trainerOne.champ).length < 1 && (
                <h2>Trainer 1: Pick your Champion!</h2>
              )}
            {this.state.isStarted &&
              Object.values(this.state.trainerOne.champ).length < 1 && (
                <ChampSelect
                  trainers={this.state.trainers}
                  pokeCards={this.state.pokeCards}
                />
              )}
          </section>
          <section>
            {this.state.isStarted &&
              !Object.values(this.state.trainerOne.champ).length < 1 && (
                <h2>Trainer 2: Pick your Champion!</h2>
              )}
            {this.state.isStarted &&
              !Object.values(this.state.trainerOne.champ).length < 1 && (
                <ChampSelect
                  trainers={this.state.trainers}
                  pokeCards={this.state.pokeCards}
                />
              )}
          </section>
        </main>
      </div>
    );
  }

  onStartGame = () => {
    this.setState((currentState) => {
      return { isStarted: !currentState.isStarted };
    });
  };

  onChampSelect = () => {
    this.setState((currentState) => {
      console.log(currentState);
    });
  };
}

export default App;
