
import React,{useState,useEffect} from 'react'
import Input from "./Input";
import FromCurrency from './FromCurrency';
import ToCurrency from './ToCurrency';
import Display from "./Display";
import Convert from "./Convert";
import "./App.css"

function App() {

  const APP_KEY = "dc73dec16af446d8212258e22b365472c7c6d0509db9da0a1f403aa3b17a4a10";
  const API_URL = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD,EUR,GBP${APP_KEY}`

  const [dataPool,setDataPool]=useState(null)
  const [inputValue,setInputValue]=useState(0);
  const [fromCurrency,setFromCurrency]=useState("");
  const [toCurrency,setToCurrency]= useState("");
  const [result,setResult]=useState("");

  // const inputRef = useRef(null);


  const fetchData = async()=>{
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data;
  }
  
  useEffect(() => {
    fetchData()
      .then((data)=>{
        setDataPool(data);
      })
      // inputRef.current.focus()

   
  }, [])


  const handleConversion = ()=>{
    const rate = (dataPool[fromCurrency][toCurrency] )
   return setResult(rate * inputValue)
  }


  // useEffect(() => {
  //   if(dataPool !== null){
  //     handleConversion();
  //   }
    
  // }, [inputValue,toCurrency,fromCurrency])

const handleInput = (e)=> setInputValue(e.target.value)

const handleFromCurrency = (currencyType)=>{
  setFromCurrency(currencyType);
}
const handleToCurrency = (currencyType)=>{
  setToCurrency(currencyType);
}


  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
        <Display display={result}/>
      <FromCurrency fromCurrencySource={handleFromCurrency} />
      <Input  inputChange={handleInput}/>
      <ToCurrency toCurrencyTarget = {handleToCurrency} />
      
      <Convert onChange={handleConversion} />
   
      

      
    </div>
  )
}

export default App
