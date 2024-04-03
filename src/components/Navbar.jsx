import {useState } from "react";

import { close, logo, menu } from "../assets";

import {navLinks} from "../constants";

import Login from "./login";

import Apply from "./Apply";


const Navbar = () => {

  const [toogle, setToogle] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 w-full flex py-6 justify-between items-center navbar p-12 bg-white shadow-md'>
      <img src={logo} alt="hoobank"  className="w-[124px] h-[32px] lg:ml-24"/>

      <ul className="list-none sm:flex hidden justify-center items-center flex-1 ml-32">
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] text-[#374B5C] ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`} className="hover:text-[#EEA10D] duration-500 transition ease-out">
              {nav.title}
            </a>
          </li>
          
        ))}
      </ul>
      <div className="justify-start flex">
      <div className="ml-10 hidden lg:block">
        <Login />
      </div>

      <div className="ml-10 hidden lg:block">
        <Apply />
      </div>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toogle ? close : menu} alt="menu" 
        className="w-[28px] h-[28px] object-contain cursor-pointer text-[#374B5C]"
        onClick={() => setToogle((prev) => !prev)}
        />

        <div
        className={`${toogle ? 'flex' : 'hidden'} p-6 z-10 shadow-2xl bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
      <ul className="list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] text-[#374B5C] ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'}`}
          >
            <a href={`#${nav.id}`} className="hover:text-[#EEA10D] duration-500 transition ease-out">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar