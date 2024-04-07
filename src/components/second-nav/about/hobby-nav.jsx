import { Link } from "react-router-dom";

export default function HobbyNav() {
  return (
    <div className="flex justify-between px-10 my-3">
      <Link to="/my-hobby">
        <button>MY HOBBY</button>
      </Link>
      <div className="flex gap-5">
        <Link to="/about">
          <button>About Me</button>
        </Link>
        <Link to="/tools">
          <button>Tools</button>
        </Link>
      </div>
    </div>
  );
}
