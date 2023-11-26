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
          <Link to="/">
            <span className="text-2xl font-[Poppins] text-blue-600 font-bold cursor-pointer">
              CampusGo
            </span>
          </Link>

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

          <li className="mx-2 my-3 md:my-0">
            <Link to="/" className="text-sm text-gray-600  hover:text-blue-600 duration-600">
              Home
            </Link>
          </li>
          <li className="mx-2 my-3 md:my-0">
            <Link to="/colleges" className="text-sm text-gray-600 hover:text-blue-600 duration-600">
              Colleges
            </Link>
          </li>
          <li className="mx-2 my-3 md:my-0">
            <Link to="/admission" className="text-sm text-gray-600 hover:text-blue-600 duration-600">
              Admission
            </Link>
          </li>

            <li className="mx-2 my-3 md:my-0">
              <Link to="/mycollege" className="text-sm text-gray-600 hover:text-blue-600 duration-600">
                My College
              </Link>
            </li>
      

          <div className="form-control mx-2 sm:my-5">
            <input type="text" placeholder="Search" className="border border-gray-300 rounded-md bg-white w-36 px-2 py-1" />
          </div>

    
            <li className="m-2 text-sm">
          
                <span className="text-black">displayName</span>
          
            </li>
         
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
