import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component.jsx";

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
    const { monsters, searchField } = this.state;

    const filteredMonster = monsters.filter((monster) => {
      if (monster.name.toLowerCase().includes(searchField.toLowerCase())) {
        return monster;
      }
    });

    console.log("====================================");
    console.log("filtered monsters: " + filteredMonster);
    console.log("====================================");

    return (
      <div className="App">
        {/* Set State is an Asynchronous event so we have to do any outputs after the rerender or you can pass a callback as the second parameter of the setState */}
        <SearchBox
          placeholder="Search Monsters..."
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
