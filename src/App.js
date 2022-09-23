import React, { Component } from "react";

import "./App.css";
import Person from "./Components/Person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyText: "testing,",
    };
  }

  buttonClick() {
    // let name = prompt(`What's your name?`);
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Person name="Muhammad Naeem Tahir" age="22" desc="student" />

        {/* event rebinding */}
        <button type="button" onClick={() => this.buttonClick()}>
          Click me
        </button>
      </div>
    );
  }
}

export default App;
