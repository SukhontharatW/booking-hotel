"use client";
import { useState } from "react";

function SearchBox() {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div className="searchbox">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search city , Country, Place for Travel advisory"
        className="searchbox__input color__text--grey-3 text__m--400"
      />
    </div>
  );
}

export default SearchBox;
