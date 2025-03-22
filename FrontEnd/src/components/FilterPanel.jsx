import React, { useState } from "react";
import "./FilterPanel.css";

import Nav from "./Nav";

const FilterPanel = () => {
  const [popularity, setPopularity] = useState([1, 10]);

  return (
    <>
    <Nav />
    <div className="filter-container">
      <h1>Explore the public figure rankings</h1>
      <p>Discover top individuals based on your criteria</p>

      {/* Search Bar */}
      <input type="text" placeholder="Search for a figure by name..." className="search-bar" />

      {/* Category Dropdown */}
      <label>Category</label>
      <select className="dropdown">
        <option>All Categories</option>
        <option>Entertainment</option>
        <option>Technology</option>
        <option>Politics</option>
        <option>Sports</option>
      </select>

      {/* Popularity Range Slider */}
      <label>Popularity Range</label>
      <div className="range-container">
        <input
          type="range"
          min="1"
          max="10"
          value={popularity[0]}
          onChange={(e) => setPopularity([parseInt(e.target.value), popularity[1]])}
        />
        <input
          type="range"
          min="1"
          max="10"
          value={popularity[1]}
          onChange={(e) => setPopularity([popularity[0], parseInt(e.target.value)])}
        />
        <div className="range-labels">
          <span>{popularity[0]}</span>
          <span>{popularity[1]}</span>
        </div>
      </div>

      {/* Credibility Factors Dropdown */}
      <label>Credibility Factors</label>
      <select className="dropdown">
        <option>All Factors</option>
        <option>Public Trust</option>
        <option>Expert Opinions</option>
      </select>
    </div>
    </>
  );
};

export default FilterPanel;
