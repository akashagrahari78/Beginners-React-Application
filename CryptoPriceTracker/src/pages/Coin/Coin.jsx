import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams, useSearchParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams(); //here coinId is same as given in the parameter
  const [coinData, setCoinData] = useState({});
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext);

  const fetchHistoricalData = async () => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setHistoricalData(res);
      })
      .catch((err) => console.error(err));
  };

  const fetchCoinData = async () => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setCoinData(res);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
  }, [currency]);

  if(coinData && historicalData){
return (
    <div className="coin">
      <div className="coin-name">
        {coinData.image && coinData.image.large && (
          <img src={coinData.image.large} alt={coinData.name} />
        )}
        {coinData && coinData.name && (
          <p>
            {coinData.name} ( {coinData.symbol.toUpperCase()} ){" "}
          </p>
        )}
        
      </div>
      <div className="coin-chart">
        <LineChart historicalData = {historicalData}/>
      </div>
    </div>
    )
  }else{

    // for page loading 
    return(
      <div className="spinner">
        <div className="spin"></div>
      </div>
    )
  }
   
  ;
};

export default Coin;
