import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { useSearchParams } from "react-router-dom";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState(["Date", "Prices"]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((item, id) => {
        dataCopy.push([`${new Date(item[0]).toLocaleDateString()}`]);
      });
    }
  }, [historicalData]);
  return (
     <div>


  </div>
  );
};

export default LineChart;
