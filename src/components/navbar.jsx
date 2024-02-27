import React, { useState } from "react";
import { BsSearch, BsList } from "react-icons/bs";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-center bg-[#212731] p-4">
      <div className="flex items-center md:justify-between">
        <div className="w-full max-w-md relative text-gray-600 ">
          <input
            className="border-2 border-gray-300 bg-white h-10 pr-2 pl-8 rounded-lg text-sm focus:outline-none w-full"
            type="search"
            name="search"
          />
          <button type="submit" className="absolute left-0 top-0 mt-3 ml-2">
            <BsSearch />
          </button>
        </div>

        <div className="lg:flex hidden items-center space-x-4 text-nowrap" >
          <a href="#" className="text-white mx-10">
            Categories
          </a>
          <a href="#" className="text-white mx-10">
            Website Builders
          </a>
          <a href="#" className="text-white mx-10">
            Today's Deal
          </a>
        </div>
      </div>

      <div className="lg:hidden block">
        <button onClick={toggleMobileMenu} className="text-white m-6">
          <BsList size={24} />
        </button>

        {isMobileMenuOpen && (
          <div className="absolute left-0 mt-2 bg-[#212731] p-2 w-full">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <a href="#responsive-header" className="block text-textColor py-2 px-3 hover:bg-gray-100">
              Categories
            </a>
            <a href="#responsive-header" className="block text-textColor  py-2 px-3 hover:bg-gray-100">
              Website Builders
            </a>
            <a href="#responsive-header" className="block text-textColor py-2 px-3 hover:bg-gray-100">
              Today's Deal
            </a>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;