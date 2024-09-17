import { useState } from "react";


import { SearchBar } from "./SearchBar";
import { SearchResultList } from "./SearchResultList";

function Search() {
  const [results, setResults] = useState([]);

  return (
    <div className="Search">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        
        { results && results.length > 0 && <SearchResultList results={results} />}
      </div>
    </div>
  );
}

export default Search;