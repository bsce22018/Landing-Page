import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="bg-blue-200 p-8 font-serif">
      <div className="max-w-screen-lg mx-auto bg-blue-950 p-12 md:p-20 rounded-xl text-white text-4xl text-center">
        <h1>Your Dream Home Is In <br /> Front Of Your Eyes</h1>
      </div><br />

      <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto text-center px-4">
        <h3 className="text-4xl text-black font-bold mb-4">Contact Us Now</h3>
        <p className="text-lg mb-6 px-6 sm:px-12">
          Don’t hesitate to contact our team for more information or to set up an appointment.<br />
          We are ready to help you find your dream home.
        </p>
        <button 
          className="bg-orange-500 text-white px-6 py-2 w-44 rounded-md hover:bg-orange-400 transition duration-300 ease-in-out"
          aria-label="Call us for inquiries"
        >
          Call Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
