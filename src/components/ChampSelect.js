import React, { Component } from "react";

class ChampSelect extends Component {
  handleSelecting = (clickEvent) => {
    this.props.onChampSelect(clickEvent.target.alt);
  };

  render() {
    const trainers = Object.entries(this.props.trainers);

    return trainers.map((trainer) => {
      return (
        <section key={trainer[0]} className="Trainer">
          <h1>{trainer[0]}</h1>
          <img
            onClick={this.handleSelecting}
            src={trainer[1].url}
            alt={trainer[0]}
            className="TrainerImage"
          ></img>
        </section>
      );
    });
  }
}

export default ChampSelect;
