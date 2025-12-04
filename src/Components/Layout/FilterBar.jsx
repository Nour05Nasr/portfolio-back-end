import React, { Component } from 'react';

import "./FilterBar.css";

const FilterBar = () => {
return (
<div className="filter-bar">
<button className="filter-btn">Filter By</button>
<select className="filter-select"><option>Date</option></select>
<select className="filter-select"><option>Category</option></select>
<select className="filter-select"><option>Project ID</option></select>
<span className="reset-filter">Reset Filter</span>
</div>
);
}
export default FilterBar;