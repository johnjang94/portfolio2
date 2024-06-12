import { Link } from "react-router-dom";

// Photos
import TuGo from "../../assets/design/tugo.png";

export default function DesignHome() {
  return (
    <div className="my-64">
      <h1 className="text-xl md:text-4xl text-center">DESIGN AT THE LATEST</h1>
      <h2 className="text-4xl md:text-8xl my-2 text-center">TuGo Travel</h2>
      <img
        src={TuGo}
        alt="TuGo Travel Insurance logo"
        width={680}
        className="mx-auto rounded-2xl"
      />
      <div className="text-center">
        <Link to="/tugo">
          <button className="bg-teal-300 hover:bg-white p-3 rounded-full my-3">
            DISCOVER MORE
          </button>
        </Link>
      </div>
    </div>
  );
}
