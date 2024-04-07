import { Link } from "react-router-dom";

export default function DevelopmentHomeNav() {
  return (
    <div className="flex justify-between px-10 my-3">
      <Link to="/development">
        <button>DEVELOPMENT</button>
      </Link>
    </div>
  );
}
