import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    // By default, the this.state also gives us this.setState
    this.state = {
      monsters: [
        {
          id: 1,
          name: "Frankenstein",
        },
        {
          id: 2,
          name: "Dracula",
        },
        {
          id: 3,
          name: "Zombie",
        },
      ],
    };
  }

  render() {
    console.log("====================================");
    console.log(this.state);
    console.log("====================================");
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
