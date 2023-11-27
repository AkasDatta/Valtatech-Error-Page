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
    </div>
  );
};

export default MenuItem;
