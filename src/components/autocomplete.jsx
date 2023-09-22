import React, { useRef, useState } from 'react';
import { movies } from '../data';

function AutoComplete() {
  const [moviesState, setMoviesState] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  const handleSearchMovies = (inputVal) => {
    setInput(inputVal);
    const searchQuery = inputVal.toLowerCase();

    const filteredMovies = movies.filter((data) =>
      data.name.toLowerCase().includes(searchQuery)
    );

    setMoviesState(filteredMovies);
  };

  const handleSelectedMovies = (name) => {
    const selectedMovie = moviesState.find((data) => data.name === name);
    selectedMovie.selected = !selectedMovie.selected;
    setMoviesState(moviesState);

    if (selectedMovie.selected) {
      setSelectedMovies((prevState) => [...prevState, selectedMovie]);
    } else {
      const filteredList = selectedMovies.filter((data) => data.name !== name);
      setSelectedMovies(filteredList);
    }

    setInput('');
    handleSearchMovies('');
    inputRef.current.focus();
  };

  return (
    <div className="input-container">
      <h1> AutoComplete </h1>{' '}
      <div className="input-box">
        {' '}
        <div className="movie-box">
          {' '}
          {selectedMovies.map(({ name }) => (
            <div className="movie-item">
              <p
                style={{
                  width: '100%',
                  display: 'block',
                  whiteSpace: 'nowrap',
                }}
              >
                {' '}
                {name}{' '}
              </p>{' '}
              <button
                onClick={() => handleSelectedMovies(name)}
                style={{
                  background: 'none',
                  color: 'white',
                  fontSize: '900',
                  width: '2em',
                }}
              >
                {' '}
                X{' '}
              </button>{' '}
            </div>
          ))}{' '}
          <input
            ref={inputRef}
            onChange={(e) => handleSearchMovies(e.target.value)}
            autoFocus
            className="movie-input"
            value={input}
          />{' '}
        </div>{' '}
      </div>{' '}
      <div className="search-container">
        {' '}
        {moviesState.map(({ name, selected }, idx) => (
          <div
            onClick={() => handleSelectedMovies(name)}
            className={`search-item ${selected ? 'search-item-selected' : ''}`}
          >
            <p> {name} </p> {selected ? <span> ✅ </span> : ''}{' '}
          </div>
        ))}{' '}
      </div>{' '}
    </div>
  );
}

export default AutoComplete;
