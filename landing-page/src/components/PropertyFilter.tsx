import React from 'react';


const PropertyFilter: React.FC = () => {
  return (
    <div className="absolute bottom-8 w-full px-10">
      <div className="container mx-auto bg-white shadow-lg p-4 px-8 md:px-16">
        <div className="flex flex-wrap justify-center space-x-6 gap-y-4">
          <div className="flex flex-col items-start w-48">
            <p className="text-gray-400 font-semibold mb-2 text-left w-full">Property Type</p>
            <select className="px-4 py-2 rounded-md border border-gray-300 w-full">
              <option>Small House</option>
              <option>Apartment</option>
            </select>
          </div>
          <div className="flex flex-col items-start w-48">
            <p className="text-gray-400 font-semibold mb-2 text-left w-full">Location</p>
            <select className="px-4 py-2 rounded-md border border-gray-300 w-full">
              <option>Los Angeles</option>
              <option>New York</option>
            </select>
          </div>
          <div className="flex flex-col items-start w-48">
            <p className="text-gray-400 font-semibold mb-2 text-left w-full">Price Range</p>
            <select className="px-4 py-2 rounded-md border border-gray-300 w-full">
              <option>$50K - $100K</option>
              <option>$100K - $200K</option>
            </select>
          </div>
          <div className="flex flex-col items-start w-48">
            <p className="text-gray-400 font-semibold mb-2 text-left w-full">Filter</p>
            <select className="px-4 py-2 rounded-md border border-gray-300 w-full">
            </select>
          </div>
          <button className="bg-orange-500 text-black px-6 py-1 h-12 my-6">Search Property</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;
