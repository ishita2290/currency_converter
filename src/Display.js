import React from 'react'
import "./Display.css"

function Display(props) {
    return (
        <div className="display">
        <div className="result">
           {props.display} 
        </div>
        </div>
    )
}

export default Display
