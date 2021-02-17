import React from "react";
import "./Convert.css";

function Convert(props) {
  return (
    <div className="button">
      <button className="convert" onClick={e=>{props.onChange(e.target.event)}}>Convert</button>

     
    </div>
  );
}

export default Convert;
