
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {

  const [input, setInput] = useState("");

  const fetchData = async (value) => {
   
        try {
          const res = await fetch("/api/users/users");
          const data = await res.json();
         
         
          
          const results = data.filter((user) => {
            return (
              value &&
              user &&
              user.username &&
              user.username.includes(value)
            );
          });
        
          setResults(results);

          if (!res.ok) {
            throw new Error(data.error || "Something went wrong!");
          }
        } catch (error) {
          throw new Error(error.message);
        }
    
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="wrapper ">
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
    </div>
  );
};