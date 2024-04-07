import { Link } from "react-router-dom";

export default function ToolsNav() {
  return (
    <div className="flex justify-between px-10 my-3">
      <Link to="/tools">
        <button>MY TOOLS</button>
      </Link>
      <div className="flex gap-5">
        <Link to="/about">
          <button>About Me</button>
        </Link>
        <Link to="/my-hobby">
          <button>My Hobby</button>
        </Link>
      </div>
    </div>
  );
}
