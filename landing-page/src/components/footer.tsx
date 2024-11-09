import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className=" max-w-screen-lg mx-auto container  flex justify-between items-start">
        
        <div className="text-gray-700">
          <p>123 Anywhere</p>
          <p>St., Any City, ST</p>
          <p>12345</p>
        </div>

        <div className="flex space-x-16">
          <div>
            <h3 className="text-gray-900 font-semibold">About Us</h3><br />
            <ul className="text-gray-600">
              <li>How It Works</li>
              <li>Contact Us</li>
              <li>Blog & News</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold">Terms</h3><br />
            <ul className="text-gray-600">
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>Copyrights</li>
              <li>Payment</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold">Social Media</h3><br />
            <ul className="text-gray-600">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>

        <div className="text-right">
          <h3 className="text-gray-900 font-bold">We Are</h3>
          <h3 className="text-gray-900 font-bold">Ready To</h3>
          <h3 className="text-orange-500 font-bold">Help You</h3>
        </div>
      </div>
      <br />
      <div className="text-center text-gray-600 mt-8">
        <p>@2027 Hanenova. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
