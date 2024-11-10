import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-screen-lg mx-auto container flex flex-col md:flex-row justify-between items-start px-4">

        <div className="text-gray-700 mb-8 md:mb-0">
          <p>123 Anywhere</p>
          <p>St., Any City, ST</p>
          <p>12345</p>
        </div>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16 mb-8 md:mb-0">
          <div>
            <h3 className="text-gray-900 font-semibold">About Us</h3><br />
            <ul className="text-gray-600">
              <li><a href="/how-it-works" className="hover:text-orange-500">How It Works</a></li>
              <li><a href="/contact-us" className="hover:text-orange-500">Contact Us</a></li>
              <li><a href="/blog" className="hover:text-orange-500">Blog & News</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold">Terms</h3><br />
            <ul className="text-gray-600">
              <li><a href="/privacy-policy" className="hover:text-orange-500">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-orange-500">Terms & Condition</a></li>
              <li><a href="/copyrights" className="hover:text-orange-500">Copyrights</a></li>
              <li><a href="/payment" className="hover:text-orange-500">Payment</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold">Social Media</h3><br />
            <ul className="text-gray-600">
              <li><a href="https://facebook.com" className="hover:text-orange-500">Facebook</a></li>
              <li><a href="https://instagram.com" className="hover:text-orange-500">Instagram</a></li>
              <li><a href="https://twitter.com" className="hover:text-orange-500">Twitter</a></li>
              <li><a href="https://youtube.com" className="hover:text-orange-500">Youtube</a></li>
            </ul>
          </div>
        </div>

        <div className="text-right mb-8 md:mb-0 md:text-right">
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
