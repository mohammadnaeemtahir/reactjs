import React, { Component } from "react";
import { Man } from "./Man";

class Person extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    return (
      <>
        <div>Name: {this.props.name}</div>
        <div>Age: {this.props.age} years</div>
        <Man desc={this.props.desc} />
      </>
    );
  }
}

export default Person;
