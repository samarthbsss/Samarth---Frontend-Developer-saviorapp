import React from "react";
import logoImage from "./Documents/Frame.png";
import background from "./Documents/logomain.png";
import toko from "./Documents/Tokenomics.png";

const TokenomicsComponent = () => {
  return (
    // <div className="relative text-white bg-cover w-full h-auto" style={{ backgroundImage: `url(/src/components/Documents/logomain.png)` }}>
    // <div className="relative text-white bg-cover w-full h-auto" style={{ backgroundImage: `url(/src/components/Documents/logomain.png)` }}>

    <div
      className="relative text-white p-5 w-full h-full bg-black"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-5">
        {/* <h2 className="font-heading text-3xl md:text-4xl text-center mb-8">
          Tokenomics
        </h2> */}
        <img src={toko} alt="alt" className="w-1/4 h-1/4 p-2 mb-4 m-auto" />

        <div className="flex flex-col md:flex-row items-center md:justify-center">
          <div className="border border-red-500 bg-transparent p-6 rounded-lg mb-6 md:mb-0 md:mr-4 w-full md:w-1/2">
            <h3 className="text-red text-xl font-semibold mb-4">
              Token Details
            </h3>
            <p>Name: Saviour</p>
            <p>Symbol: SVR</p>
            <p>Total Supply: 1000 Trillion</p>
            <p>Decimals: 18</p>
          </div>

          <div className="flex justify-center items-center w-full md:w-1/2">
            <img
              src={logoImage}
              alt="Saviour Logo"
              className="max-w-xs md:max-w-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsComponent;
