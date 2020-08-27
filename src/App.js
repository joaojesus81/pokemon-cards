import React from "react";
import "./App.css";
import ChampSelect from "./components/ChampSelect";
import Cards from "./components/Cards";
import StartGame from "./components/start-game";
import PlayerCard from "./components/PlayerCard";
import { fetchPokemon } from "./utils/api";

class App extends React.Component {
  state = {
    stepLegend: {
      0: "StartGame",
      1: "Trainer 1 Select",
      2: "Trainer 2 Select",
      3: "Trainer 1 Pokemon Select",
      4: "Trainer 2 Pokemon Select",
      5: "Battle",
    },
    step: 1,
    isStarted: true,
    1: { champ: {}, currentHand: [] },
    2: { champ: {}, currentHand: [] },
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
    console.log(this.state.step);
    return (
      <div className="App">
        <header>
          <h1>The Pokemon Game</h1>
          {this.state.step >= 1 && (
            <button onClick={this.onReStart}>Start Again</button>
          )}
        </header>
        <main>
          <section>
            {this.state.step === 0 && (
              <StartGame
                isStarted={this.state.isStarted}
                onStepForward={this.onStepForward}
              />
            )}
          </section>

          <section className="Trainer1">
            {this.state.step === 1 && <h2>Trainer 1: Pick your Champion!</h2>}
            {this.state.step === 1 && (
              <ChampSelect
                onChampSelect={this.onChampSelect}
                trainers={this.state.trainers}
                pokeCards={this.state.pokeCards}
              />
            )}
            <ul className="player-and-poke">
              <li>
                {this.state.step >= 2 && (
                  <PlayerCard
                    trainer={this.state["1"]}
                    handlePokemonSelection={this.handlePokemonSelection}
                  />
                )}
              </li>
              <li>
                {typeof this.state[1].currentHand[0] === "object" && (
                  <Cards currentHand={this.state["1"].currentHand} />
                )}
              </li>
            </ul>
          </section>

          <section>
            {this.state.step === 2 && <h2>Trainer 2: Pick your Champion!</h2>}
            {this.state.step === 2 && (
              <ChampSelect
                onChampSelect={this.onChampSelect}
                trainers={this.state.trainers}
                pokeCards={this.state.pokeCards}
              />
            )}
            <ul className="player-and-poke">
              <li>
                {this.state.step >= 3 && (
                  <PlayerCard
                    trainer={this.state["2"]}
                    handlePokemonSelection={this.handlePokemonSelection}
                  />
                )}
              </li>
              <li>
                {typeof this.state[2].currentHand[0] === "object" && (
                  <Cards currentHand={this.state["2"].currentHand} />
                )}
              </li>
            </ul>
          </section>
        </main>
      </div>
    );
  }

  onReStart = () => {
    this.setState(() => {
      return {
        1: { champ: {}, currentHand: [] },
        2: { champ: {}, currentHand: [] },
        step: 0,
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
    });
  };

  onStepForward = () => {
    this.setState((currentState) => {
      return { step: currentState.step + 1 };
    });
  };

  onChampSelect = (selected) => {
    fetchPokemon().then((data) => {
      this.setState((currentState) => {
        const { trainers } = currentState;
        const remainingTrainers = { ...trainers };
        delete remainingTrainers[selected];
        return {
          [currentState.step]: {
            champ: { [selected]: currentState.trainers[selected] },
            currentHand: data,
          },
          step: currentState.step + 1,
          trainers: remainingTrainers,
        };
      });
    });
  };

  handlePokemonSelection = (selectedPokemons) => {
    if (this.state.step === 2) {
      this.setState((currentState) => {
        return {
          1: { champ: currentState[1].champ, currentHand: selectedPokemons },
        };
      });
    } else if (this.state.step === 3) {
      this.setState((currentState) => {
        return {
          2: { champ: currentState[2].champ, currentHand: selectedPokemons },
        };
      });
    }
  };
}

export default App;
