import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Find your recipe"
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
  );
}
