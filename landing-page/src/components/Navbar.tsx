import React from "react";
import Link from "next/link";
import Image from "next/image"; 

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-blue-200 sticky top-0 font-serif">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={140} height={100} />
        </div>

        <div className="flex-grow">
          <ul className="flex justify-center gap-x-6 text-black">
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            <li className="border-l border-orange-500 pl-6">
              <Link href="/sales">
                <p>Sales</p>
              </Link>
            </li>
            <li className="border-l border-orange-500 pl-6">
              <Link href="/rentals">
                <p>Rentals</p>
              </Link>
            </li>
            <li className="border-l border-orange-500 pl-6">
              <Link href="/sell-or-rent">
                <p>Sell or Rent Property</p>
              </Link>
            </li>
            <li className="border-l border-orange-500 pl-6">
              <Link href="/contact">
                <p>Contact Us</p>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Link href="/login">
            <button className="bg-orange-500 text-black font-bold px-9 py-2 rounded-md hover:bg-orange-600">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
