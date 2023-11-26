import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-white'>
      <nav className="p-3 md:flex md:items-center md:justify-between max-w-screen-xl mx-auto lg:px-10 py-10 overflow-x-hidden">
        <div className="flex justify-between items-center">
          <div className="text-3xl text-white bg-[#31334E] px-5 py-3 rounded font-semibold cursor-default">
            <p>valtatech</p>
          </div>

          <span
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </span>
        </div>

       
          <hr className={`md:hidden w-full border-1 border-gray-300 my-4 ${
            menuOpen ? 'opacity-100 top-[130px]' : 'opacity-0 top-[-400px]'
          } transition-all ease-in duration-500`} />
        

        <ul
          className={`md:flex md:items-center md:justify-end z-[+1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-2 md:opacity-100 ${
            menuOpen ? 'opacity-100 top-[130px]' : 'opacity-0 top-[-400px]'
          } transition-all ease-in duration-500`}
        >
          <li className="m-2 text-sm">
            <button className="text-xl text-white bg-[#718498] hover:bg-[#415239] px-6 py-3 font-semibold">
              Contact us
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
