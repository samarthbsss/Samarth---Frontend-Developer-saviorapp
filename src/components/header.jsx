import React from "react";
import Hero from "./Documents/Hero.png";

const Header = () => {
  return (
    <div className="relative">
      <img src={Hero} alt="Background" className="w-full h-auto" />

      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-5">
        <div className="text-white ">
          <span className="font-bold text-lg">SAVIOUR</span>
        </div>
        <div className="space-x-4 px-10 py-4 bg-black rounded-lg bg-opacity-80">
          <a href="#home" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#ido" className="text-white hover:text-gray-300">
            IDO
          </a>
          <a href="#tokenomics" className="text-white hover:text-gray-300">
            Tokenomics
          </a>
          <a href="#roadmap" className="text-white hover:text-gray-300">
            Roadmap
          </a>
          <a href="#coming-soon" className="text-white hover:text-gray-300">
            Coming Soon
          </a>
        </div>
        <button className="bg-gradient-to-br from-red-700 via-red-600 to-orange-500 text-white px-4 py-2 rounded-md">
          Connect wallet
        </button>
      </nav>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-white text-2xl font-bold">
          Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
        </p>
      </div>
    </div>
  );
};

export default Header;
