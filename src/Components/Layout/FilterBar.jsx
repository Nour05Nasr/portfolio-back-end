import React, { Component } from 'react';
import "./FilterBar.css";

const FilterBar = () => {
return (
<div className="filter-bar">
<button className="filter-btn">Filter By</button>
<select className="filter-btn"><option>Date</option></select>
<select className="filter-btn"><option>Category</option></select>
<select className="filter-btn"><option>Project ID</option></select>
<span className="reset-filter">Reset Filter</span>
</div>
);
}
export default FilterBar;