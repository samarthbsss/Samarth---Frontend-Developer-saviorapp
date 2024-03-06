import React from 'react';
import Logo from './Documents/Frame 1790.png'; // Replace with your logo file
// import { ReactComponent as TwitterIcon } from './twitter.svg'; // Replace with your Twitter icon file
// import { ReactComponent as TelegramIcon } from './telegram.svg'; // Replace with your Telegram icon file
// import { ReactComponent as GmailIcon } from './gmail.svg'; // Replace with your Gmail icon file

const NavbarComponent = () => {
    return (
        <nav className="bg-black text-white p-4">
            {/* Logo */}
            <div className="flex justify-center">
                <img src={Logo} alt='logo' className=' h-48 w-68' />
            </div>

            {/* Navigation Links */}
            <div className="flex justify-center space-x-4 my-2">
                <a href="#home" className="hover:text-gray-300">Home</a>
                <a href="#ido" className="hover:text-gray-300">IDO</a>
                <a href="#tokenomics" className="hover:text-gray-300">Tokenomics</a>
                <a href="#roadmap" className="hover:text-gray-300">Road Map</a>
                <a href="#whitepaper" className="hover:text-gray-300">Whitepaper</a>
                <a href="#pledge" className="hover:text-gray-300">Pledge</a>
                <a href="#nft" className="hover:text-gray-300">NFT</a>
                <a href="#games" className="hover:text-gray-300">Games</a>
            </div>

            {/* Social Media Icons */}
            {/* <div className="flex justify-center space-x-4 my-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon className="w-6 h-6" />
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                    <TelegramIcon className="w-6 h-6" />
                </a>
                <a href="mailto:example@gmail.com">
                    <GmailIcon className="w-6 h-6" />
                </a>
            </div> */}
        </nav>
    );
};

export default NavbarComponent;
