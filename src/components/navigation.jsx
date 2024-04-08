import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./navigation.css";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="px-10 justify-between flex py-5 border-b border-gray-300 items-center">
      <button onClick={toggleMenu}>
        <RxHamburgerMenu className="text-2xl" />
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
                    src="src/assets/home.png"
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
                    src="src/assets/profile.png"
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
                    src="src/assets/design.png"
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
                    src="src/assets/development.png"
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
        <img src="src/assets/logo512.png" alt="Logo" />
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </div>
  );
}
