import React from "react";
import { Eye, Edit, Trash2 } from "lucide-react";
import "./ActionButton.css";

const ActionButton = () => {
    return ( 
<div className="action-buttons">
<button className="action-button"><Eye size={18} /></button>
<button className="action-button"><Edit size={18} /></button>
<button className="action-button delete"><Trash2 size={18} /></button>
</div>
);
}
export default ActionButton;