import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";

class App extends Component {
  constructor() {
    super();

    // By default, the this.state also gives us this.setState
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  /* The componentDidMount function is called once when React renders the DOM the first time */
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        return this.setState({ monsters: users });
      });
  }

  render() {
    // console.log('====================================');
    // console.log(this.state);
    // console.log('====================================');
    return (
      <div className="App">
        {/* Set State is an Asynchronous event so we have to do any outputs after the rerender or you can pass a callback as the second parameter of the setState */}
        <input
          type="search"
          placeholder="search monsters..."
          onChange={(e) => {
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            );
          }}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
