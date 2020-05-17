import React from "react";
import "./search-box.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      placeholder={placeholder}
      type="search"
      onChange={handleChange}
      className="search"
    />
  );
};
