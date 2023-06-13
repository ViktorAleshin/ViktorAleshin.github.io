import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="text-white h-24 flex justify-between max-w-[1240px] mx-auto px-4 items-center">
      <h1 className="w-full text-3xl text-[#E94560] font-bold m-4 cursor-default lowercase">1ROWVY</h1>
      <ul className="hidden md:flex text-xl">
        <li className="p-4 cursor-pointer border-b-2 border-[#E94560]">Home</li>
        <li className="p-4 opacity-70 hover:opacity-100 ease-in-out duration-500 cursor-pointer">Catalog</li>
        <li className="p-4 opacity-70 hover:opacity-100 ease-in-out duration-500 cursor-pointer">Soundkits</li>
        <li className="p-4 opacity-70 hover:opacity-100 ease-in-out duration-500 cursor-pointer">Prices</li>
        <li className="p-4 opacity-70 hover:opacity-100 ease-in-out duration-500 cursor-pointer">About</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] opacity-100 ease-in-out duration-500 z-10' : 'md:hidden fixed left-[-100%] h-full border-r border-r-gray-900 bg-[#000300] opacity-0 ease-in-out duration-500'}>
      <h1 className="w-full text-3xl text-[#E94560] font-bold mt-4 ml-4">1ROWVY</h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Catalog</li>
          <li className="p-4 border-b border-gray-600">Soundkits</li>
          <li className="p-4 border-b border-gray-600">Prices</li>
          <li className="p-4 border-b border-gray-600">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
