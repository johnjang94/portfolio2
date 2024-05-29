import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavLinks({ primaryTo, primaryText, secondaryLinks }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <div className="flex justify-between px-10 my-3">
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
              <div className="absolute left-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {link.dropdown.map((dropdownLink, dropdownIndex) => (
                    <Link key={dropdownIndex} to={dropdownLink.to}>
                      <button
                        className="block p-1 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:w-full"
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

export function TelevuNav() {
  return (
    <NavLinks
      primaryTo="/televu"
      primaryText="TELEVU"
      secondaryLinks={[
        {
          to: "/design",
          text: "Design Home",
          dropdown: [
            { to: "/design", text: "Design Home" },
            { to: "/food", text: "Food Distro" },
            { to: "/lock", text: "TuGo Travel" },
          ],
        },
      ]}
    />
  );
}

export function FoodDistroNav() {
  return (
    <NavLinks
      primaryTo="/food"
      primaryText="FOOD DISTRO"
      secondaryLinks={[
        {
          to: "/design",
          text: "Design Home",
          dropdown: [
            { to: "/design", text: "Design Home" },
            { to: "/televu", text: "TeleVU" },
            { to: "/lock", text: "TuGo Travel" },
          ],
        },
      ]}
    />
  );
}

export function TuGoNav() {
  return (
    <NavLinks
      primaryTo="/tugo"
      primaryText="TUGO TRAVEL"
      secondaryLinks={[
        {
          to: "/design",
          text: "Design Home",
          dropdown: [
            { to: "/design", text: "Design Home" },
            { to: "/televu", text: "TeleVU" },
            { to: "/food", text: "Food Distro" },
          ],
        },
      ]}
    />
  );
}
