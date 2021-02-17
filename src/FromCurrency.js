import React from "react";
import "./FromCurrency.css"

function FromCurrency(props) {
  const handleBtn = (e) => {
    props.fromCurrencySource(e.target.value);
  };
  return (
    <div className="fromcurrency">
    
      <span >From</span>
      <div className="inputs">
          <div className="each-currency">
      <input onChange={handleBtn} type="radio" name="from" id="BTC" value="BTC" />
            <label>BTC</label>
            </div>

            <div className="each-currency">
            <input onChange={handleBtn} type="radio" name="from" id="LTC" value="LTC" />
            <label>LTC</label>
            </div> 
            
            <div className="each-currency">
            <input onChange={handleBtn} type="radio" name="from" id="ETH" value="ETH" />
            <label>ETH</label>
            </div>
            </div>

      {/* <select onChange={handleBtn} name="from" id="fromCurrency">
        <option id="BTC" value="BTC">
          BTC
        </option>
        <option id="LTC" value="LTC">
          LTC
        </option>
        <option id="ETH" value="ETH">
          ETH
        </option>
      </select> */}
    </div>
  );
}

export default FromCurrency;
