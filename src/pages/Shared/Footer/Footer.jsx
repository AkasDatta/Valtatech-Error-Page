
const Footer = () => {
  return (
    <div className='bg-white py-8'>
    <div className="p-3 md:flex md:items-center md:justify-between max-w-screen-xl mx-auto lg:px-10 py-10 overflow-x-hidden">
      <div className="">
        <div className="text-3xl text-white bg-[#31334E] px-5 py-3 rounded font-semibold cursor-pointer mb-4">
          <p>valtatech</p>
        </div>
        <div>
            <p className="text-lg">123 Waverly Pl., Boston, MA 02135</p>
        </div>
      </div>

      <ul
        className="md:flex md:items-center md:justify-end z-[+1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-2 md:opacity-100 "
      >
        <li className="m-2">
          <div className="text-lg mb-20">
          Copyright © 2023, Valtatech
          </div>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default Footer;
