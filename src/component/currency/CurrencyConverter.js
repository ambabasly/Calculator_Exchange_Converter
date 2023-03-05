import React, { useState, useEffect } from "react";
import axios from "axios";
import { Symbols } from "./Symbols";
import "./Converter.css";

const Converter = () => {
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const getConvertedAmount = async () => {
    await axios
      .get(
        "https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert",
        {
          headers: {
            "x-rapidapi-host":
              "currency-conversion-and-exchange-rates.p.rapidapi.com",
            "x-rapidapi-key":
              "3670434b68mshf9eef8ae6678c93p1c9920jsne43b3e9802c5",
          },
          params: { from: from, to: to, amount: amount },
        },
      )
      .then(response => {
        console.log(response.data);
        setResult(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  //   useEffect(() => getConvertedAmount(), []);

  return (
    <div className="App">
      <div className="heading">
        <h1>Currency converter</h1>
      </div>
      <form>
        <label>From:</label>
        <select
          id="currency"
          className="converter-selecter"
          onChange={e => setFrom(e.target.value)}
        >
          {Symbols.map(symbol => (
            <option value={symbol}>{symbol}</option>
          ))}
        </select>
        <label>To:</label>
        <select
          className="converter-selecter"
          onChange={e => setTo(e.target.value)}
        >
          {Symbols.map(symbol => (
            <option value={symbol}>{symbol}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter the Amount"
          onChange={e => setAmount(e.target.value)}
        />
      </form>
      <button
        style={{
          cursor: "pointer",
        }}
        onClick={getConvertedAmount}
      >
        Convert
      </button>
      <p>Results: {result.result}</p>
    </div>
  );
};

export default Converter;
