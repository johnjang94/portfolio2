import { Link } from "react-router-dom";

// Photos
import DesignHome from "../assets/footer-pictures/design-home.jpeg";
import Profile from "../assets/accessory/profile.png";
import Development from "../assets/footer-pictures/development.png";

export default function NotFound() {
  const getSize = () => {
    if (window.innerWidth < 768) {
      return 300;
    } else {
      return 350;
    }
  };
  return (
    <div>
      <h1 className="text-center my-36 md:text-7xl text-5xl font-bold text-white">
        Where would you like to explore?
      </h1>
      <div className="md:grid-cols-3 md:gap-16 md:flex my-5 text-white md:justify-center">
        <Link to="/design">
          <button className="hover:bg-gray-200 hover:text-black rounded-xl hover:brightness-125">
            <img
              src={DesignHome}
              alt="Design Home"
              width={300}
              className="rounded-xl h-64 mx-8 md:mx-0"
            />
            <h3 className="mx-10 my-5">Design Home</h3>
          </button>
        </Link>
        <Link to="/about">
          <button className="hover:bg-gray-200 hover:text-black rounded-xl hover:brightness-125 my-5 md:my-0">
            <img
              src={Profile}
              alt="My profile"
              width={300}
              className="rounded-xl mx-8 md:mx-0"
            />
            <h3 className="mx-10 my-5">About me</h3>
          </button>
        </Link>
        <Link to="/development">
          <button className="hover:bg-gray-200 hover:text-black rounded-xl hover:brightness-125">
            <img
              src={Development}
              alt="Development"
              width={getSize()}
              className="rounded-xl mx-8 md:mx-0"
            />
            <h3 className="mx-10 my-5">Software Development</h3>
          </button>
        </Link>
      </div>
    </div>
  );
}
