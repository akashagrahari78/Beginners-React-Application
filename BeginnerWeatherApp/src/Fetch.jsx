import React, { useEffect, useState } from "react";
import "./Weather";

const Fetch = () => {
 

  if (loading) return <div>Loading...</div>;
  if (err) return <div>Error: {err}</div>;

  return (
    <div>
      {weatherData.wind ? weatherData.wind.speed : "No wind data"}
    </div>
  );
};

export default Fetch;
