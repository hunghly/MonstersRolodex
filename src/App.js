import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {CardList} from './components/card-list/card-list.component.jsx'

class App extends Component {
  constructor() {
    super();

    // By default, the this.state also gives us this.setState
    this.state = {
      monsters: [],
    };
  }

  /* The componentDidMount function is called once when React renders the DOM the first time */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users)=>{
      console.log(users);
      return this.setState({monsters: users})
    })
  }

  render() {
    console.log("====================================");
    console.log(this.state);
    console.log("====================================");
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;
