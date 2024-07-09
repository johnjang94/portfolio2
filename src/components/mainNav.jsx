import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./mainNav.css";
import { useState } from "react";
import PropTypes from "prop-types";

// Photos
import Home from "../assets/accessory/home.png";
import Profile from "../assets/accessory/profile.png";
import Design from "../assets/accessory/design.png";

import Logo from "/logo512.png";
import Logo2 from "/logo500.png";

Nav.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default function Nav({ pathname }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
    return !registeredPaths.includes(pathname);
  };

  const logoSrc = pathname === "/lock" || isNotRegistered() ? Logo2 : Logo;

  const textColor =
    pathname === "/lock" || isNotRegistered() ? "text-white" : "text-black";

  return (
    <>
      <div
        className={`px-10 flex md:hidden justify-between w-full py-5 border-b border-gray-300 items-center ${textColor}`}
      >
        <div>
          <button onClick={toggleMenu}>
            <RxHamburgerMenu className={`text-2xl ${textColor}`} />
          </button>
        </div>
        {/* Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50"
            onClick={closeMenu}
          >
            <div
              className={`fixed inset-y-0 left-0 md:max-w-xs w-full max-h-screen bg-emerald-200 shadow overflow-y-scroll md:overflow-auto ${
                isMenuOpen ? "slide-in" : "slide-out"
              }`}
            >
              <button className="float-right px-10 pt-10" onClick={closeMenu}>
                &#10060;
              </button>
              <ul className="py-24 px-10 space-y-5">
                <div
                  className={`${
                    isMenuOpen ? "home-slide-in" : ""
                  } text-3xl text-end sm:text-base sm:text-start border-white-2 hover:bg-slate-300 sm:hover:bg-transparent sm:hover:text-blue-400 hover:cursor-pointer rounded-3xl`}
                >
                  <Link to="/home">
                    <img
                      src={Home}
                      alt="Home"
                      width={300}
                      className="md:hidden rounded-xl mx-auto"
                    />

                    <button className="p-2">Home</button>
                  </Link>
                </div>
                <div
                  className={`${
                    isMenuOpen ? "about-slide-in" : ""
                  } text-3xl text-end sm:text-base sm:text-start border-white-2 hover:bg-slate-300 sm:hover:bg-transparent sm:hover:text-blue-400 hover:cursor-pointer rounded-3xl`}
                >
                  <Link to="/about">
                    <img
                      src={Profile}
                      alt="Profile picture"
                      width={300}
                      className="md:hidden mx-auto"
                    />

                    <button className="p-2">About Me</button>
                  </Link>
                </div>
                <div
                  className={`${
                    isMenuOpen ? "design-slide-in" : ""
                  } text-3xl text-end sm:text-base sm:text-start border-white-2 hover:bg-slate-300 sm:hover:bg-transparent sm:hover:text-blue-400 hover:cursor-pointer rounded-3xl`}
                >
                  <Link to="/design">
                    <img
                      src={Design}
                      alt="design picture"
                      width={300}
                      className="md:hidden mx-auto"
                    />

                    <button className="p-2">UX Design</button>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        )}
        {/* Menu */}
        <div>
          <Link to="/home">
            <img src={logoSrc} alt="Logo" width={30} />
          </Link>
        </div>
        <div>
          <a href="mailto:jscolbe9675@gmail.com">
            <button>Contact</button>
          </a>
        </div>
      </div>
      <div
        className={`px-10 justify-between hidden md:flex py-5 border-b border-gray-300 items-center ${textColor}`}
      >
        <div className="block">
          <Link to="/home">
            <img src={logoSrc} alt="Logo" width={30} />
          </Link>
        </div>
        <div className="flex space-x-5 items-center">
          <div className="block">
            <Link to="/about">
              <button>About Me</button>
            </Link>
          </div>
          <div>
            <a href="mailto:jscolbe9675@gmail.com">
              <button>Contact</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
