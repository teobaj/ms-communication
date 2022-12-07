import React from "react";
import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <input
      type={"search"}
      placeholder={"Look for messages, files and more."}
      className="search-bar"
    ></input>
  );
};
