import { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

const Container = () => {
  console.log("render container");

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
      <SearchBox
        className="search-box"
        placeHolder="search monsters"
        handleSearchStringChange={handleSearchStringChange}
      />
      <CardList monsters={filteredMonsters}></CardList>
    </>
  );
};

export default Container;
