import { Component, useState } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
    console.log("ComponentDidMount");
  }

  render() {
    console.log("Render");
    const filteredMonsters = this.state.monsters.filter((m) => {
      return m.name.toLowerCase().includes(this.state.searchString);
    });

    return (
      <div className="App">
        <input
          type="search"
          name="txtSearch"
          id="txtSearch"
          className="search-box"
          placeholder="search monsters"
          onChange={(event) => {
            this.setState(() => {
              return { searchString: event.target.value.toLocaleLowerCase() };
            });
          }}
        />
        {filteredMonsters.map((monster) => {
          return <h1 key={monster.key}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
