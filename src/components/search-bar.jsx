import React from 'react';

function SearchBar({ handleSearch }) {
  return (
    <div className="search-bar">
      <h1> Search Users </h1>{' '}
      <input
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search Users"
      />
    </div>
  );
}

export default SearchBar;
