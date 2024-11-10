import React from 'react';
import Image from 'next/image';

const LatestUpdates: React.FC = () => {
  return (
    <div className="bg-blue-200 p-8">
      <div className="max-w-screen-lg mx-auto">
        <header className="flex items-center justify-between mb-12">
          <h2 className="text-4xl text-blue-950 font-serif">Latest Updates</h2>
          <button className="mt-4 btn-orange">
            View All
          </button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <article key={index} className="rounded-lg overflow-hidden">
              <Image 
                src="/mostviewed.png" 
                alt={`Latest Update ${index + 1}`} 
                layout="responsive"
                width={500}
                height={300}
                className="w-full h-full object-cover rounded-lg mb-4" 
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-blue-950 mb-2">
                  {`Update Title ${index + 1}`}
                </h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-400">Read More</button>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-16 flex items-start justify-between">
          <h3 className="text-5xl text-black mb-6 font-serif">
            Complete  <br />
            Solution to  <br />
            Your Property <br />
            Needs
          </h3>
          <div className="flex flex-col ml-6">
            <p className="text-gray-600 mb-5">
              You can explore a wide selection of high-quality <br /> properties to suit your lifestyle and budget.<br /> Let us help you find your dream home!
            </p>
            <button className="mt-4 btn-orange text-black font-semibold">
              More Portfolio
            </button>
          </div>
        </section>

        <section className="mt-12 flex flex-col md:flex-row justify-center items-center mx-auto gap-6">
          <div className="rounded-xl overflow-hidden">
            <Image 
              src="/portfolio1.png" 
              alt="Portfolio 1" 
              width={500} 
              height={300} 
              className="object-cover" 
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-xl overflow-hidden">
              <Image 
                src="/portfolio2.png" 
                alt="Portfolio 2" 
                width={400} 
                height={250} 
                className="object-cover" 
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image 
                src="/portfolio3.png" 
                alt="Portfolio 3" 
                width={400} 
                height={250} 
                className="object-cover" 
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LatestUpdates;
