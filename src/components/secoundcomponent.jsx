import React from 'react';
import Logo from './Documents/Brick_Matrix.png';

function SecondComponent() {
    return (
        <div className="bg-black text-white py-12 px-4 md:flex md:items-center md:justify-between">

            <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-3">Introduction</h2>
                <p className="mb-6">
                    We've all been in the mud once, and now we've decided to fight it out.
                    Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain.
                    Save the lucky ones alive, join us to save the future!
                    Our mission is to empower everyone to share wealth and succeed.
                </p>
                <a href="#read-more" className="text-blue-500 hover:text-blue-300">read more...</a>
                <button className="bg-gradient-to-br from-red-700 via-red-600 to-orange-500 text-white px-4 py-2 rounded-md">
                    Document
                </button>
            </div>


            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">

                <div className="text-center">

                    <img src={Logo} alt="Document" className="mt-4" />
                </div>
            </div>
        </div>
    );
}

export default SecondComponent;
