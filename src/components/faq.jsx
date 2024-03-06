import React from 'react';
import faqImage from './Documents/image 1.png'

const FAQComponent = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-5 bg-black text-white">

            <div className="w-full md:w-1/2 p-4">
                <img src={faqImage} alt="FAQ" className="w-lg rounded-lg shadow-lg" />
            </div>

            {/* Right Side - Questions */}
            <div className="w-full md:w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-5">FAQ</h2>
                <div className="text-left">
                    <p className="mb-3 font-semibold">1. Why choose "Savior"?</p>
                    <p className="mb-3 font-semibold">2. Why is the IDO duration so long?</p>
                    <p className="mb-3 font-semibold">3. When will trading go live?</p>
                    <p className="mb-3 font-semibold">4. When can we claim the tokens?</p>
                    <p className="mt-5">After the IDO concludes, you can claim the tokens on our official website.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQComponent;
