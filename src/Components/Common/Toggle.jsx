import React from "react";
import "./Toggle.css";

export default function Toggle({ label, checked, onChange }) {
  return (
    <div className="toggle-row">
      <label className="toggle-switch">
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={onChange} 
        />
        <span className="slider"></span>
      </label>
      <span className="label">{label}</span>
    </div>
  );
}
