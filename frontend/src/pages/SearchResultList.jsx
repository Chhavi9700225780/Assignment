import "./SearchResultList.css";
import { SearchResult } from "./SearchResult";
import { Link } from "react-router-dom";
export const SearchResultList = ({ results }) => {
    
  return (
    <div className="wrapper">
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} />;
         
})}


    </div>
    </div>  
  );
};