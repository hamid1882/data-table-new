import React from "react";

function SearchBar({ onSearch }) {
    return ( <
        div className = "search-bar" >
        <
        input onChange = {
            (e) => onSearch(e.target.value) }
        type = "text"
        placeholder = "Search for users" /
        >
        <
        /div>
    );
}

export default SearchBar;