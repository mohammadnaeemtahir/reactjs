import React, { Component } from "react";
import { Man } from "./Man";
import "./demo.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    return (
      <div className="bg-main color-light">
        <div>Name: {this.props.name}</div>
        <div>Age: {this.props.age} years</div>
        <Man desc={this.props.desc} />
      </div>
    );
  }
}

export default Person;
