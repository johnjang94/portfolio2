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

export function AboutNav() {
  return (
    <NavLinks
      primaryTo="/about"
      primaryText="ABOUT ME"
      secondaryLinks={[
        { to: "/tools", text: "Tools" },
        { to: "/my-hobby", text: "My Hobby" },
      ]}
    />
  );
}

export function HobbyNav() {
  return (
    <NavLinks
      primaryTo="/my-hobby"
      primaryText="MY HOBBY"
      secondaryLinks={[
        { to: "/about", text: "About Me" },
        { to: "/tools", text: "Tools" },
      ]}
    />
  );
}

export function ToolsNav() {
  return (
    <NavLinks
      primaryTo="/tools"
      primaryText="MY TOOLS"
      secondaryLinks={[
        { to: "/about", text: "About Me" },
        { to: "/my-hobby", text: "My Hobby" },
      ]}
    />
  );
}
