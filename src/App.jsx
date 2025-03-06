import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [searchString, setSearchString] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) =>
        monster.name
          .toLocaleLowerCase()
          .includes(searchString.toLocaleLowerCase())
      )
    );
  }, [monsters, searchString]);

  const handleSearchStringChange = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <>
      <h1>Monsters</h1>
      <SearchBox
        className="search-box"
        placeHolder="search monsters"
        handleSearchStringChange={handleSearchStringChange}
      />
      <CardList monsters={filteredMonsters}></CardList>
    </>
  );
};

export default App;
