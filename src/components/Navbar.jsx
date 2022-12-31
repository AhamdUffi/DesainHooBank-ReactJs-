import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../contents";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // function to change a image of toggle
  const toggleHandler = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <nav className="w-full flex justify-between items-center py-6 navbar">
      <img src={logo} alt="Logo-brand" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex justify-end items-center flex-1 hidden">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`font-poppins font-normal text-white font-medium ${
              index === navLinks.length - 1 ? `mr-0` : `mr-10`
            } text-[16px]  cursor-pointer`}
          >
            <a href="#" className=" hover:text-blue-400">
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="toogle-menu"
          onClick={toggleHandler}
        />

        <div
          className={`${
            toggle ? "flex" : `hidden`
          } p-6 bg-black-gradient min-w-[140px] rounded-[5px] absolute top-20 right-5 sidebar`}
        >
          <ul className="list-none flex flex-col justify-center items-center p-3">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`font-poppins font-medium text-white ${
                  index === navLinks.length - 1 ? `mb-0` : `mb-4`
                } text-[16px]  cursor-pointer `}
              >
                <a href="#" className="hover:text-blue-400 ">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
