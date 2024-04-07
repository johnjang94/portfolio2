import { Link } from "react-router-dom";

export default function TelevuNav() {
  return (
    <div className="flex justify-between px-10 my-3">
      <Link to="/televu">
        <button>TELEVU</button>
      </Link>
      <div className="flex gap-5">
        <Link to="/design">
          <button>Design Home</button>
        </Link>
        <Link to="/tugo">
          <button>Tugo Travel</button>
        </Link>
      </div>
    </div>
  );
}
