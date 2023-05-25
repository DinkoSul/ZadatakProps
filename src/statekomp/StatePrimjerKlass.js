import React, { Component } from "react";

class StatePrimjerKlass extends Component {
  state = {
    city: "Zagreb",
    state: "Hrvatska",
  };
  changeState = () => {
    const newCity = this.state.city === "Zagreb" ? "Osijek" : "Zagreb";
    this.setState({ city: newCity });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Grad: {this.state.city}</h1>
          <h1>Država: {this.state.state}</h1>
          <button onClick={this.changeState}>Drugi grad</button>
          <button onClick={this.dontChangeLikeThis}>Drugi grad1</button>
        </div>
      </div>
    );
  }
}

export default StatePrimjerKlass;
