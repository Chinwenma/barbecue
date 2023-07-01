import React from 'react';


const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <img src="map-of-san-francisco.png" alt="Map of San Francisco" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 px-2 mb-4">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Phone:</h2>
            <p className="text-gray-600">123-456-7890</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Email:</h2>
            <p className="text-gray-600">example@example.com</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Address:</h2>
            <p className="text-gray-600">123 Main St, San Francisco, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
