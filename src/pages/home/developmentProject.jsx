import { Link } from "react-router-dom";

// Photos
import Ruminate from "../../assets/development/ruminate.png";

export default function DevelopmentHome() {
  return (
    <div className="mt-64">
      <h1 className="text-lg md:text-4xl text-center">
        DEVELOPMENT AT THE LATEST
      </h1>
      <h2 className="text-5xl md:text-9xl my-2 text-center">RUMINATE</h2>
      <img src={Ruminate} alt="Ruminate" width={650} className="mx-auto" />
      {/* I need to center the following button */}
      <div className="text-center">
        <Link to="/development">
          <button className="bg-teal-300 hover:bg-white p-3 rounded-full my-3">
            DISCOVER MORE
          </button>
        </Link>
      </div>
    </div>
  );
}