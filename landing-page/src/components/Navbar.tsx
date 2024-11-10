'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-20 bg-blue-200 sticky top-0 font-serif">
      <div className="container mx-auto px-4 h-full flex items-center justify-between max-w-screen-4xl lg:max-w-full">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" layout="intrinsic" width={180} height={130} />
        </div>

        <div className="flex-grow hidden lg:flex justify-center">
          <ul className="flex justify-center gap-x-10 text-black text-lg">
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            <li className="border-l border-orange-500 pl-10">
              <Link href="/sales">
                <p>Sales</p>
              </Link>
            </li>
            <li className="border-l border-orange-500 pl-10">
              <Link href="/rentals">
                <p>Rentals</p>
              </Link>
            </li>
            <li className="border-l border-orange-500 pl-10">
              <Link href="/sell-or-rent">
                <p>Sell or Rent Property</p>
              </Link>
            </li>
            <li className="border-l border-orange-500 pl-10">
              <Link href="/contact">
                <p>Contact Us</p>
              </Link>
            </li>
          </ul>
        </div>

 
        <div className="hidden lg:flex">
          <Link href="/login">
            <button className="bg-orange-500 text-black font-bold px-12 py-3 rounded-md hover:bg-orange-600 text-lg">
              Login
            </button>
          </Link>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
      
            ☰
          </button>
        </div>
      </div>

  
      <div className={`lg:hidden bg-blue-200 p-4 ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col gap-y-4 text-black text-center">
          <li>
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/sales">
              <p>Sales</p>
            </Link>
          </li>
          <li>
            <Link href="/rentals">
              <p>Rentals</p>
            </Link>
          </li>
          <li>
            <Link href="/sell-or-rent">
              <p>Sell or Rent Property</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p>Contact Us</p>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <button className="w-full bg-orange-500 text-black font-bold py-2 rounded-md hover:bg-orange-600">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
