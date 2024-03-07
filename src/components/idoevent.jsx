import React from "react";
import Reactangle from "./Documents/Rectangle1.png";
import pra from "./Documents/Participate.png";

const IDOEventComponent = () => {
  return (
    <div
      className="bg-black text-white"
      style={{
        backgroundImage: `url(${Reactangle}})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <h2 className="text-4xl font-extrabold mb-10 text-center text-red-600 uppercase tracking-widest">Participate in our IDO Event!</h2> */}
      <img src={pra} alt={pra} className="w-1/2 h-1/2 p-2 mb-4 m-auto" />

      <div className="md:flex md:justify-between md:items-start">
        <div className="md:w-1/2 p-8 rounded-lg mb-5 md:mr-5">
          <p className="mb-5">
            During our IDO event, you will gain early access to our
            revolutionary ecosystem, designed to empower everyone to share
            wealth and achieve success.
          </p>

          <div className="border border-red-500 bg-transparent bg-opacity-50 p-4 rounded-lg mb-5">
            <h3 className="text-2xl font-bold mb-3 text-red-300">Token Info</h3>
            <p className="mb-2">Total Token Supply: 20%</p>
            <p className="mb-2">Soft Cap: 200 BNB</p>
            <p className="mb-2">Initial exchange rate: 1 BNB</p>
            <p>
              Recommended Referral Commission: 1st Generation 5%, 2nd Generation
              2%
            </p>
          </div>

          <button className="bg-gradient-to-br from-red-700 via-red-600 to-orange-500 text-white px-4 py-2 rounded-md my-4">
            Connect wallet
          </button>
          <div className="mb-5">
            <h3 className="text-2xl font-bold mb-3 text-red-300">
              Become an affiliate and earn 7%
            </h3>
            <div className="flex">
              <input
                type="text"
                placeholder="Your affiliate link"
                className="flex-grow text-black p-2 rounded-l-lg border border-red-500 bg-transparent"
              />
              <button className="bg-red-600 px-6 py-2 rounded-r-lg hover:bg-red-700 transition duration-300">
                Generate
              </button>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 p-8 rounded-lg mb-5 md:ml-5">
          <div className="bg-red-800 bg-opacity-90 p-4 rounded-lg mb-5">
            <div className="mb-5 text-5xl font-bold text-center text-red-300">
              {/* Timer goes here */}
              00:00
            </div>
            <p className="mb-2">PRESALE 1: 1 Saviour = 0.657 USDT</p>
            <p className="mb-2">Next Stage Price = 0.723 USDT</p>
            <p className="mb-2">Sold - $34,56,56,764/$50,00,00,000</p>
            <p>Raised - $34,56,56,764/$40,00,00,000</p>
          </div>

          <div className="bg-red-800 bg-opacity-90 p-4 rounded-lg">
            <input
              type="text"
              placeholder="Enter the amount (BNB)"
              className="w-full text-black p-2 rounded mb-3"
            />
            <input
              type="text"
              placeholder="Minimum Quantity to Buy"
              className="w-full text-black p-2 rounded mb-3"
            />
            <input
              type="text"
              placeholder="Maximum Quantity of Tokens"
              className="w-full text-black p-2 rounded mb-3"
            />
            <div className="flex gap-3">
              <button className="flex-grow bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition duration-300">
                Buy
              </button>
              <button className="flex-grow bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition duration-300">
                Claim Drop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDOEventComponent;
