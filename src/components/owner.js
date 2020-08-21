import React, { Component } from "react";

class Owner extends Component {
  state = { myCards: {} };
  render() {
    return (
      <div>
        <header>Owner</header>
        <section>My Cards</section>
      </div>
    );
  }
}

export default Owner;
