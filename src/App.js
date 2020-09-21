import React, {
  Component
} from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  CardList
} from "./components/card-list/card-list.component.jsx";
import {
  SearchBox
} from "./components/search-box/search-box.component.jsx";

class App extends Component {
  constructor() {
    super();

    // By default, the this.state also gives us this.setState
    this.state = {
      monsters: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this); -If you did not use ES6 arrow functions, you would need to bind the context of 'this'
  }

  /* The componentDidMount function is called once when React renders the DOM the first time */
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        return this.setState({
          monsters: users
        });
      });
  }

  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }

  handleChange = e => {
    this.setState({
      searchField: e.target.value
    });
  }

  render() {
    const {
      monsters,
      searchField
    } = this.state;

    const filteredMonster = monsters.filter((monster) => {
      if (monster.name.toLowerCase().includes(searchField.toLowerCase())) {
        return monster;
      }
    });

    // const newApp = new App();
    // console.log(newApp);

    // console.log("====================================");
    // console.log("filtered monsters: " + filteredMonster);
    // console.log("====================================");

    return ( <
      div className = "App" >
      <
      h1 > Monsters Rolodex < /h1> {
        /* Set State is an Asynchronous event so we have to do any outputs after the rerender or you can pass a callback as the second parameter of the setState */ } <
      SearchBox placeholder = "Search Monsters..."
      handleChange = {
        this.handleChange
      }
      /> <
      CardList monsters = {
        filteredMonster
      }
      /> <
      /div>
    );
  }
}

export default App;