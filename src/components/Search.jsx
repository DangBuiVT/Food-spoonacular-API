import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import "./Search.css";

export default function SearchPage() {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState("");
  return (
    <div className="search-page">
      <h1>RECIPE FINDER</h1>
      <div className="search-section">
        <input
          type="text"
          placeholder="Find your recipe (maximum 10 results)"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <div className="search-icon-container">
          <button
            className="SearchBtn"
            onClick={() => {
              navigate(`/result?query=${inputVal}`);
            }}
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
