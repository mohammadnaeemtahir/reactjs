import logo from "./logo.svg";
import "./App.css";
import Person from "./Components/Person";

function App() {
  return (
    <div className="App">
      <Person name="Jhon Doe" desc="I am a MALE" age="43" />
      <Person name="Silivia" desc="I am a FEMALE" age="21" />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
