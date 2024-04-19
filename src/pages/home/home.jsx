import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./home.css";
import Work from "./work/work";
import DesignHome from "./design/design-overview";
import DevelopmentHome from "./development/development-overview";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lg:my-24 my-40 mx-auto lg:w-7/12 w-10/12">
      <header>
        <h1 className="lg:text-9xl text-7xl">John Jang</h1>
        <h2 className="lg:mt-5 mt-5 lg:text-3xl text-3xl">
          UX Designer & Frontend Developer
        </h2>
        <h4 className="mt-6 lg:text-3xl text-xl">
          I specialize in designing and building digital products for the web.
          Currently, I am focused on building an e-commerce platform at Tech
          Fleet.
        </h4>
        <div>
          <Link
            to="/about"
            className="flex space-x-3 items-center mt-5 text-blue-500 hover:underline hover:cursor-pointer"
          >
            <button>More about me</button>
            <FaArrowRight />
          </Link>
        </div>
        <div className="text-center">
          <button>
            <FaArrowAltCircleDown className="lg:mt-14 my-28 mx-auto text-3xl animate-bounce hover:cursor-pointer" />
          </button>
        </div>
      </header>
      <section>
        <Work />
      </section>
      <section>
        <DesignHome />
      </section>
      <section>
        <DevelopmentHome />
      </section>
    </div>
  );
}
