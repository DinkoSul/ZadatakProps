import React, { Component } from "react";
import StatelessComponent from "./StatelessComponent";

class StatefullComponent extends Component {
  state = { color: "red", count: 0 };

  handleButtonClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <StatelessComponent
          count={this.state.count}
          color={this.state.color}
          onButtonClick={this.handleButtonClick}
        />
        <p>Mogu koristiti state i u parent komponenti: {this.state.count}</p>
      </div>
    );
  }
}

export default StatefullComponent;
