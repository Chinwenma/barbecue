import React from 'react';
import MAP from '../assets/Rectangle 16.png';

const Contact = () => {
  return (
    <div className="container mx-auto p-4 md:w-full">
      <h1 className="text-3xl  mb-4 text-center leading-9 font-extrabold pl-6  sm:text-4xl  md:text-center lg:text-start sm:leading-10">Contact Us</h1>
      <div className="flex   justify-between items-center flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-4">
          <img src={MAP} alt="Map of San Francisco" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-4">
          <div className="mb-4">
            <h2 className="text-lg font-bold">Phone:</h2>
            <p className="text-gray-600 font-semibold">+234 9011039271</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-bold">Email:</h2>
            <p className="text-gray-600 font-semibold">dosamarvis@gmail.com</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-bold">Location:</h2>
            <p className="text-gray-600 font-semibold">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
