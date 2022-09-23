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

  buttonClick = () => {
    alert("something happened...");
  };

  render() {
    return (
      <div className="App">
        <Person name="Muhammad Naeem Tahir" age="22" desc="student" />

        {/* event rebinding */}
        <button
          type="button"
          onClick={this.buttonClick}
          style={{
            backgroundColor: "#020202",
            color: "#fff",
            cursor: "pointer",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Remove me
        </button>
      </div>
    );
  }
}

export default App;
