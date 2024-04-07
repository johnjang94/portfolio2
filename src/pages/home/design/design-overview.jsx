import { Link } from "react-router-dom";

export default function DesignHome() {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl text-center">DESIGN AT THE LATEST</h1>
      <h2 className="text-7xl md:text-9xl my-2 text-center">TELEVU</h2>
      <img
        src="../../src/assets/televu.png"
        alt="TeleVU"
        width={650}
        className="mx-auto"
      />
      {/* I need to center the following button */}
      <div className="text-center">
        <Link to="/televu">
          <button className="bg-teal-300 hover:bg-white p-3 rounded-full my-3">
            DISCOVER MORE
          </button>
        </Link>
      </div>
    </div>
  );
}
