import React, { Component } from "react";

class UserClass extends Component {
  render() {
    const { name, years } = this.props;
    return (
      <p>
        Pozdrav, moje ime je {name} i imam {years} godina.
      </p>
    );
  }
}

export default UserClass;
