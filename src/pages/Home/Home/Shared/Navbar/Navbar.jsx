import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className='bg-white shadow'>
      <nav className="p-3 md:flex md:items-center md:justify-between max-w-screen-xl mx-auto lg:px-10 overflow-x-hidden">
        <div className="flex justify-between items-center">
            <button className="text-3xl text-white bg-[#31334E] px-5 py-3 rounded font-semibold">
              valtatech
            </button>

            <span
              className="text-3xl cursor-pointer mx-2 md:hidden block"
              onClick={toggleMenu}
            >
              {menuOpen ? <FaXmark/> : <FaBars />}
            </span>
        </div>

        <ul
          className={`md:flex md:items-center z-[+1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
            menuOpen ? 'opacity-100 top-[80px]' : 'opacity-0 top-[-400px]'
            } transition-all ease-in duration-500`}
        >

    
            <li className="m-2 text-sm">
              <button className="text-xl text-white bg-[#47496f] px-6 py-3 font-semibold">
                Contact us
              </button>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
