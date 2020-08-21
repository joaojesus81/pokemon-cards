import React from "react";
import "./App.css";
import Owner from "./components/owner";
import Wild from "./components/wild";
import Card from "./components/cards";

class App extends React.Component {
  state = {
    pokeCards: {
      bulbasaur: {
        url:
          "https://vignette.wikia.nocookie.net/pokemon/images/0/03/001.png/revision/latest?cb=20131102213407",
        hp: "45",
        attack: 49,
        type: "grass",
      },
    },
  };
  render() {
    return (
      <div className="App">
        <Owner />
        <Wild />
        <Card />
      </div>
    );
  }
}

export default App;
