import { Link } from "react-router-dom";

export default function AboutNav() {
  return (
    <div className="flex justify-between px-10 my-3">
      <Link to="/about">
        <button>ABOUT ME</button>
      </Link>
      <div className="flex gap-5">
        <Link to="/tools">
          <button>Tools</button>
        </Link>
        <Link to="/my-hobby">
          <button>My Hobby</button>
        </Link>
      </div>
    </div>
  );
}
