import React from 'react'
import "./Input.css"

function Input(props) {
    return (
        <div className="amount">
            <label className="amount-label">Amount to convert</label>
            <input type="number" id="amount" onChange={props.inputChange} />
        </div>
    )
}

export default Input
