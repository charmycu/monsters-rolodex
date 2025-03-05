import { Component, useState } from "react";
import "./App.css";
import CardList from "./components/Card-List";
import SearchBox from "./components/SearchBox";

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
    const handleSearchStringChange = (event) => {
      const searchString = event.target.value.toLocaleLowerCase();
      this.setState(() => {
        return { searchString };
      });
    };

    return (
      <div className="App">
        <SearchBox
          className="search-box"
          placeHolder="Search Monsters"
          handleSearchStringChange={handleSearchStringChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
