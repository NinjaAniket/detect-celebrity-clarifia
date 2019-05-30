import React from "react";

const SearchBar = ({ onInputChange, onFormSubmit, value }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <div className="ui category search">
        <div className="ui icon input">
          <input
            value={value}
            style={{ width: "400px" }}
            onChange={onInputChange}
            className="prompt"
            type="text"
            placeholder="Enter Url Here..."
          />
          <i className="search icon" />
        </div>
        <div className="results" />
      </div>
    </form>
  );
};

export default SearchBar;
