import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./mainNav.css";
import { useState } from "react";
import PropTypes from "prop-types";

// Photos
import Home from "../assets/home.png";
import Profile from "../assets/profile.png";
import Design from "../assets/design.png";
import Development from "../assets/development.png";

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

  const logoSrc = pathname === "/lock" ? Logo2 : Logo;
  const textColor = pathname === "/lock" ? "text-white" : "text-black";

  return (
    <div
      className={`px-10 justify-between flex py-5 border-b border-gray-300 items-center ${textColor}`}
    >
      <button onClick={toggleMenu}>
        <RxHamburgerMenu className={`text-2xl ${textColor}`} />
      </button>
      {/* Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50"
          onClick={closeMenu}
        >
          <div
            className={`fixed inset-y-0 left-0 md:max-w-xs w-full bg-emerald-200 shadow h-full overflow-y-scroll ${
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
              <div
                className={`${
                  isMenuOpen ? "development-slide-in" : ""
                } text-3xl text-end sm:text-base sm:text-start border-white-2 hover:bg-slate-300 sm:hover:bg-transparent sm:hover:text-blue-400 hover:cursor-pointer rounded-3xl`}
              >
                <Link to="/development">
                  <img
                    src={Development}
                    alt="development picture"
                    width={300}
                    className="md:hidden mx-auto"
                  />

                  <button className="p-2 md:pr-0 text-3xl sm:text-base">
                    Software Development
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      )}
      {/* Menu */}
      <Link to="/home">
        <img src={logoSrc} alt="Logo" width={30} />
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </div>
  );
}
