import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import Footer from "./components/Footer/Footer";
import Features from "./Features";
import Pricing from "./Pricing";
import Blog from "./Blog";


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} caseSensitive />
        <Route path="/Features" element = {<Features/>} caseSensitive/>
        <Route path="/Pricing" element = {<Pricing/>} caseSensitive/>
        <Route path="/Blog" element = {<Blog/>} caseSensitive/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
