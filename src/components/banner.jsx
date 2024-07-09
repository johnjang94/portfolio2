import { Link, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import LogoBlack from "/logo512.png";
import LogoTransparent from "/logo500.png";

export default function Banner() {
  const location = useLocation();

  const isNotRegistered = () => {
    const registeredPaths = [
      "/",
      "/home",
      "/about",
      "/tools",
      "/my-hobby",
      "/design",
      "/televu",
      "/food",
      "/tugo",
      "/experience",
      "/development",
      "/contact",
      "/lock",
    ];
    return !registeredPaths.includes(location.pathname);
  };

  const getStyle = () => {
    if (isNotRegistered()) {
      return {
        backgroundColor: "text-white",
        logo: LogoTransparent,
      };
    }

    switch (location.pathname) {
      case "/televu":
      case "/development":
      case "/food":
      case "/tugo":
        return {
          backgroundColor: "bg-black text-white",
          logo: LogoTransparent,
        };
      case "/lock":
        return { backgroundColor: "text-white", logo: LogoTransparent };
      default:
        return {
          backgroundColor: "bg-transparent text-black",
          logo: LogoBlack,
        };
    }
  };

  const { backgroundColor, logo } = getStyle();

  return (
    <div
      className={`flex justify-between items-center px-10 py-10 ${backgroundColor}`}
    >
      <Link to="/home">
        <img src={logo} alt="Logo" width={30} />
      </Link>
      <div className="flex space-x-1">
        <span className="text-blue-500">&copy;</span>
        <div className="md:flex mt-1 md:mt-0 md:space-x-1">
          <p className="text-[9px] md:text-base">
            Designed & Built by John Jang.
          </p>
          <p className="text-[9px] md:text-base">All Rights Reserved. 2024</p>
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
