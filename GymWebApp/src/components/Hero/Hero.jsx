import React from "react";
import bgImage from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="relative ">
      <img
        src={bgImage}
        alt="Fitness"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center text-center items-center gap-5">
        <div className="text-5xl bold text-orange-500">Start Your Fitness Journey</div>
        <div className="text-7xl font-serif">Your Fitness <br/> Journey Begins!</div>
        <div className="text-xl mt-5">"The body achieves what the mind believes."</div>
      <button
        type="button"
        className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 mt-6"
      >
        Get Started
      </button>
      </div>
    </div>
  );
};

export default Hero;
