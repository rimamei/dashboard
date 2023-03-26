import { Textfield } from '@/components/atoms';
import React from 'react';
import * as Fi from 'react-icons/fi';

const Header = () => {
  return (
    <header className="top-0 z-30 bg-white flex">
      <div className="flex items-center w-[100px] md:w-[350px] justify-center">
        <div className="p-2 bg-sky-600 rounded-md mr-2">
          <Fi.FiCloud className="text-white text-xs md:text-lg" />
        </div>
        <h1 className="text-sky-600">HR</h1>
      </div>
      <nav className="pr-4 md:pr-8 py-4 border-b border-gray-200 flex justify-between w-full">
        <div className="w-[200px] md:w-[300px]">
          <Textfield
            icon={<Fi.FiSearch className="text-gray-800" size={20} />}
            placeholder="Search here..."
            type="search"
          />
        </div>
        <div className="flex items-center">
          <Fi.FiUser size={28} />
          <div className="items-center hidden md:flex">
            <div className="mr-6">
              <p className="ml-4 text-gray-700 font-semibold">Rima</p>
              <p className="ml-4 text-gray-600 text-[14px]">Admin</p>
            </div>
            <Fi.FiChevronDown />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
