import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

import "./home.css";
import Work from "./work/work";
import DesignHome from "./design/design-overview";
import DevelopmentHome from "./development/development-overview";

export default function Home() {
  const workRef = useRef(null);

  const scrollToWork = () => {
    const workElement = workRef.current;
    const topOffset = workElement.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = topOffset - window.innerHeight / 2 + 200;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const workElement = workRef.current;
      const topOffset =
        workElement.getBoundingClientRect().top + window.scrollY;
      const isNearWorkSection = topOffset < window.innerHeight / 2;
      if (isNearWorkSection) {
        workElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
          <button onClick={scrollToWork}>
            <FaArrowAltCircleDown className="lg:mt-14 my-28 mx-auto text-3xl animate-bounce hover:cursor-pointer" />
          </button>
        </div>
      </header>
      <section ref={workRef}>
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
