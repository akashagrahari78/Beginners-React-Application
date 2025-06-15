import React, { useState, useEffect } from "react";
import rain_icon from "./assets/rain.png";
import { IoSearch } from "react-icons/io5";

const Weather = () => {
  const [inputCity, setInputCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const dataFetcher = async (inputCity) => {
    if (!inputCity.trim()) {
      setErr("Please enter a city name.");
      return;
    }

    try {
      // const city = "London";
      const apiKey = "af8a1fbfa51f5ae6e6f504a21425a015";
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${apiKey}`
      );

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setWeatherData(data);
        setLoading(false);
        setErr(null);
      } else {
        setErr(data.message || "city not found");
        setLoading(false);
      }
    } catch (error) {
      setErr(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    dataFetcher("Delhi");
  }, []);

  const handleSearch = () => {
    dataFetcher(inputCity);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex flex-col  items-center bg-blue-500 rounded-lg w-[400px]">
        <div className="flex justify-center items-center space-x-6 p-16 pl-24 pb-10">
          <input
            type="text"
            placeholder="Enter City"
            className="border-2 p-2 rounded-3xl pl-4 pr-4 border-yellow-500"
            value={inputCity}
            onChange={(e) => {
              // console.log("on change event", e);
              setInputCity(e.target.value);
            }}
            onKeyDown={(e) => {
              // console.log("on keyDown event", e);
              handleKeyDown(e);
            }}
          />

          <button className="rounded-full bg-slate-200 w-10 h-10 flex items-center justify-center" onClick={handleSearch}>
            <IoSearch size={24} color="skyblue" />
          </button>
        </div>

        {weatherData.main && (
          <>
            <div>
              <img src={rain_icon} alt="" className="h-auto" />
            </div>
            <div className="text-4xl font-semibold text-white">
              {Math.round(weatherData.main.temp)} °C
            </div>
            <div className="text-2xl font-semibold mt-5">{weatherData.name} </div>
            <div className="flex mt-6 justify-between space-x-8 mb-4">
              <div>
                <span className="text-2xl">Humidity</span>
                <div></div>
                <span className="text-2xl"> {weatherData.main.humidity} %</span>
              </div>
              <div>
                <span className="text-2xl"> Wind Speed</span>
                <div></div>
                <span className="text-2xl"> {weatherData.wind.speed} km/h</span>
              </div>
            </div>
          </>
        )}
        {
          err & (
            <div className="text-red-500 mb-4"> 
              Error : {err}
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Weather;
