import React from "react";
import "./ToCurrency.css"

function ToCurrency(props) {
  const handleBtn = (e) => {
    props.toCurrencyTarget(e.target.value);
  };
  return (
    <div className="toCurrency">
      

      <span>To</span>
        <div className="inputs">
            <div className="each-currency">
      <input onChange={handleBtn} type="radio" name="to" id="EUR" value="EUR" />
      <label>EUR</label>
      </div>


      <div className="each-currency">
      <input onChange={handleBtn} type="radio" name="to" id="USD" value="USD" />
      <label>USD</label>
      </div>

      <div className="each-currency">
      <input onChange={handleBtn} type="radio" name="to" id="GBP" value="GBP" />
      <label>GBP</label>
      </div>
      </div>
    </div>
  );
}

export default ToCurrency;
