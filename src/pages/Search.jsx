import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "./search.style.css";
const Search = () => {
  return (
    <div>
      <Navbar />
      <Header type="search" />
      this is the search page
      {/* lets pass the props in header so that we can use it */}
      {/* we want to hide the search components in search page so lets remove the search filter option */}
    </div>
  );
};

export default Search;
