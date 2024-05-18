import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

// Photos
import Logo from "../../public/logo500.png";

export default function Banner() {
  return (
    <div className="flex justify-between items-center px-10 py-10 bg-black text-white">
      <img src={Logo} width={30} alt="Logo" />
      <div className="flex space-x-1">
        <span className="text-blue-500">&copy;</span>
        <div className="md:flex mt-1 md:mt-0 md:space-x-1">
          <p className="text-xs md:text-base">Designed & Built by John Jang.</p>
          <p className="text-xs md:text-base">All Rights Reserved. 2024</p>
        </div>
      </div>
      <div className="flex space-x-3 text-3xl hover:cursor-pointer">
        <Link to="https://github.com/johnjang94">
          <FaGithub />
        </Link>
        <Link to="http://www.linkedin.com/in/johnjang94">
          <FaLinkedin className="text-blue-500" />
        </Link>
      </div>
    </div>
  );
}
