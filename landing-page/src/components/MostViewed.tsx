'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Property {
  id: number;
  name: string;
  price: string;
  image: string;
}

const MostViewed: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('allProperties');

  const properties: Property[] = [
    { id: 1, name: 'Minimalist House', price: '$100,000', image: '/mostviewed.png' },
    { id: 2, name: 'Modern House', price: '$140,000', image: '/mostviewed.png' },
    { id: 3, name: 'Industrial House', price: '$80,000', image: '/mostviewed.png' },
    { id: 4, name: 'Minimalist House', price: '$100,000', image: '/mostviewed.png' },
    { id: 5, name: 'Modern House', price: '$140,000', image: '/mostviewed.png' },
    { id: 6, name: 'Industrial House', price: '$80,000', image: '/mostviewed.png' }
  ];

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center p-4 md:p-8">
      <div className="relative w-full max-w-6xl bg-slate-200 rounded-xl p-6 md:p-8 shadow-md">
        
        <div className="absolute top-0 right-0 p-2" style={{ position: 'absolute', top: '-20px', right: '-20px' }}>
          <Image
            src="/pic.png"
            alt="Pic"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        </div>

        <div className="text-center mb-8 font-serif">
          <h2 className="text-3xl md:text-4xl mb-2">Most Viewed</h2>
          <p className="text-sm md:text-base">We offer a wide selection of the newest properties ready for you to explore</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 bg-white p-4 rounded-xl max-w-2xl mx-auto">
          {['New Developments', 'Used Properties', 'Rentals', 'All Properties'].map((name) => (
            <button
              key={name}
              onClick={() => handleButtonClick(name.toLowerCase().replace(' ', ''))}
              className={`px-4 py-2 md:px-4 md:py-4 rounded-xl transition ${
                activeButton === name.toLowerCase().replace(' ', '')
                  ? 'bg-blue-950 text-white'
                  : 'bg-white text-gray-400 hover:bg-blue-950 hover:text-white '
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition">
              <div className="bg-white p-3 rounded-xl">
                <Image
                  src={property.image}
                  alt={property.name}
                  width={500}
                  height={300}
                  className="w-full h-48 md:h-60 object-cover rounded-xl mb-4"
                />
              </div>
              <h3 className="text-xl md:text-2xl text-center font-bold mb-1">{property.name}</h3>
              <p className="text-gray-600 text-sm md:text-base mb-2">Description of the house you are offering</p>
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-bold">{property.price}</p>
                <button className="bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-920">View More</button>
              </div>
              <div className="text-gray-600 text-xs md:text-sm flex flex-wrap gap-2 md:gap-4">
                <span>🛌🏻 5 Bedroom</span>
                <span>🛀🏻 3 Bathrooms</span>
                <span>📌 72 m²</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MostViewed;
