import React from 'react';
import Logo  from"../assets/logo.png"
const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-orange-500 to-red-500 text-2xl text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-center">
      
        <div className='w-full md:w-1/4 px-4 mb-4 md:mb-0'>
        <img src={Logo} alt=" app logo"  className=" w-12 h-12 md:w-20 md:h-20"/>
      </div>
        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
          <h4 className="font-bold mb-2">Location</h4>
          <p>123 Main St, San Francisco, CA</p>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
          <h4 className="font-bold mb-2">Social</h4>
          <ul className="list-none">
            <li className="mb-2">
              <a href="/" className=" hover:text-slate-900 hover:border-b-2 hover:border-gray-800 transition-all duration-300">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className=" hover:text-slate-900 hover:border-b-2 hover:border-gray-800 transition-all duration-300">
                Instagram
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className=" hover:text-slate-900 hover:border-b-2 hover:border-gray-800 transition-all duration-300">
                Twitter
              </a>
            </li>
          
          </ul>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
          <h4 className="font-bold mb-2">Links</h4>
          <ul className="list-none">
            <li className="mb-2">
              <a href="/" className=" hover:text-slate-900 hover:border-b-2 hover:border-gray-800 transition-all duration-300 font-dm">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className=" hover:text-slate-900 hover:border-b-2 hover:border-gray-800 transition-all duration-300 font-dm">
                Menu
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className=" hover:text-slate-900   hover:border-b-2 hover:border-gray-800 transition-all duration-300 font-dm">
                Gallery
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className=" hover:text-slate-900 hover:border-b-2 hover:border-gray-800 transition-all duration-300 font-dm">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <p className="text-sm text-slate-900 font-dm">&copy; 2021 design by Sofkodes | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
