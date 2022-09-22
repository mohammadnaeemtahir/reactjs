import React, { Component } from "react";
import { Man } from "./Man";

class Person extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      user: [
        ["Muhammad Ali", 22, "No, desc available"],
        ["Aleeha Fatima", 15, "I am a female"],
      ],
    };
  }
  render() {
    return (
      <>
        <div>Name: {this.state.user[1][0]}</div>
        <div>Age: {this.state.user[1][1]} years</div>
        <Man desc={this.state.user[1][2]} />
      </>
    );
  }
}

export default Person;
