import { FaFacebookF, FaInstagram, FaLinkedinIn , FaTwitter } from "react-icons/fa";

const MenuItem = () => {
  return (
    <div>
      <div className="flex text-white mx-5 mt-44 items-center justify-center">
        <div className="hover:bg-[#230000] cursor-pointer bg-[#936565] rounded-full p-4">
            <FaFacebookF />
        </div>
        <div className="hover:bg-[#230000] cursor-pointer bg-[#936565] rounded-full p-4 mx-3">
            <FaLinkedinIn />
        </div>
        <div className="hover:bg-[#230000] cursor-pointer bg-[#936565] rounded-full p-4">
            <FaTwitter />
        </div>
        <div className="hover:bg-[#230000] cursor-pointer bg-[#936565] rounded-full p-4 mx-3">
            <FaInstagram />
        </div>
      </div>

      <div className="flex justify-center my-12">
      <div className="text-center md:text-left lg:text-left xl:text-left">
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 text-black">
          <div className="xl:mx-24 lg:mx-12 md:mx-6 mx-6 text-lg my-4">
            <h2 className="cursor-pointer">Menu Item 1</h2>
            <h2 className="cursor-pointer">Sub-menu Item 1</h2>
            <h2 className="cursor-pointer">Another Item</h2>
            <h2 className="cursor-pointer">Sub-menu Item 2</h2>
          </div>
          <div className="xl:mx-24 lg:mx-12 md:mx-6 mx-6 my-4">
            <h2 className="cursor-pointer">Menu Item 2</h2>
            <h2 className="cursor-pointer">Yet Another Item</h2>
          </div>
          <div className="xl:mx-24 lg:mx-12 md:mx-6 mx-6 my-4">
            <h2 className="cursor-pointer">Menu Item 3</h2>
          </div>
          <div className="my-4">
            <h2 className="cursor-pointer">Menu Item 4</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="xl:mx-28">
      <hr className="bg-black border-1 h-0.5 mx-4 md:mx-4 lg:mx-12 xl:mx-32" />
    </div>

    </div>
  );
};

export default MenuItem;
