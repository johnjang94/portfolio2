// ================ RELATED TO ABOUT ME SECTION ===============
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavLinks({ primaryTo, primaryText, secondaryLinks }) {
  return (
    <div className="flex justify-between px-10 my-3">
      <Link to={primaryTo}>
        <button>{primaryText}</button>
      </Link>
      <div className="flex gap-5">
        {secondaryLinks.map((link, index) => (
          <Link key={index} to={link.to}>
            <button>{link.text}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

NavLinks.propTypes = {
  primaryTo: PropTypes.string.isRequired,
  primaryText: PropTypes.string.isRequired,
  secondaryLinks: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// ==== RELATED TO THE SECOND LAYER OF NAVIGATION IN DESIGN SECTION ====
import { useState } from "react";

function DesignLinks({ primaryTo, primaryText, secondaryLinks }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <div className="flex justify-between px-10 text-sm md:text-base my-3">
      <Link to={primaryTo}>
        <button>{primaryText}</button>
      </Link>
      <div className="flex gap-5">
        {secondaryLinks.map((link, index) => (
          <div key={index} className="relative">
            <button onClick={() => link.dropdown && toggleDropdown(index)}>
              {link.text}
            </button>
            {/* Check if dropdown should be displayed */}
            {activeDropdown === index && link.dropdown && (
              <div className="absolute left-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {link.dropdown.map((dropdownLink, dropdownIndex) => (
                    <Link key={dropdownIndex} to={dropdownLink.to}>
                      <button
                        className="block p-5 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
                        role="menuitem"
                        // Close dropdown on item click
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropdownLink.text}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

DesignLinks.propTypes = {
  primaryTo: PropTypes.string.isRequired,
  primaryText: PropTypes.string.isRequired,
  secondaryLinks: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export function ProjectNav() {
  return (
    <DesignLinks
      primaryTo="/home"
      primaryText="DESIGN HOME"
      secondaryLinks={[
        {
          to: "",
          text: "MORE PROJECTS",
          dropdown: [
            { to: "/lock", text: "Xperience" },
            { to: "/lock", text: "THE SAHKI" },
            { to: "/tugo-insurance", text: "TuGo Travel" },
            { to: "/food", text: "Food Distro" },
            { to: "/televu", text: "TELEVU" },
          ],
        },
      ]}
    />
  );
}
