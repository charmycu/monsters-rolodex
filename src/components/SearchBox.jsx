import "./SearchBox.css";

const SearchBox = ({ className, placeHolder, handleSearchStringChange }) => {
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
};

export default SearchBox;
