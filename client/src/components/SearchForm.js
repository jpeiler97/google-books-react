import React from "react";

function SearchForm({handleInputChange, search, handleFormSubmit}) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={handleInputChange}
          value={search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a book"
          id="search"
        />
        <button onClick={handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
