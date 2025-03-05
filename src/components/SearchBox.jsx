import { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    const { className, placeHolder, handleSearchStringChange } = this.props;
    return (
      <>
        <input
          className={className}
          type="search"
          name="searchField"
          id="searchField"
          placeholder={placeHolder}
          onChange={handleSearchStringChange}
        />
      </>
    );
  }
}

export default SearchBox;
