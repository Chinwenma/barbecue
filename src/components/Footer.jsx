import React from 'react';
import Logo  from"../assets/logo.png"
const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white py-8">
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
              <a href="/" className=" hover:text-slate-900">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className=" hover:text-slate-900">
                Twitter
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className=" hover:text-slate-900">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
          <h4 className="font-bold mb-2">Links</h4>
          <ul className="list-none">
            <li className="mb-2">
              <a href="/" className=" hover:text-slate-900">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className="t hover:text-slate-900">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className=" hover:text-slate-900">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <p className="text-sm text-slate-600">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
