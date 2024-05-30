import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

import "./home.css";
import Work from "./work/work";
import DesignHome from "./designProject";
import DevelopmentHome from "./developmentProject";

const titles = ["UX Designer", "Product Designer", "Software Developer"];

export default function Home() {
  const workRef = useRef(null);
  const designRef = useRef(null);
  const developmentRef = useRef(null);

  const scrollToWork = () => {
    const workElement = workRef.current;
    const topOffset = workElement.getBoundingClientRect().top + window.scrollY;
    const offset = window.innerWidth <= 768 ? 360 : 335;
    const scrollPosition = topOffset - window.innerHeight / 2 + offset;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  const scrollToDesign = () => {
    const designElement = designRef.current;
    const topOffset =
      designElement.getBoundingClientRect().top + window.scrollY;
    const offset = window.innerWidth <= 768 ? 280 : 330;
    const scrollPosition = topOffset - window.innerHeight / 2 + offset;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  const scrollToDevelopment = () => {
    const developmentElement = developmentRef.current;
    const topOffset =
      developmentElement.getBoundingClientRect().top + window.scrollY;
    const offset = window.innerWidth <= 768 ? 310 : 330;
    const scrollPosition = topOffset - window.innerHeight / 2 + offset;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const workElement = workRef.current;
      const topOffset =
        workElement.getBoundingClientRect().top + window.scrollY;
      const isNearWorkSection = topOffset < window.innerHeight / 2;
      if (isNearWorkSection) {
        workElement.scrollIntoView({ behavior: "smooth" });
      } else {
        const designElement = designRef.current;
        const designTopOffset =
          designElement.getBoundingClientRect().top + window.scrollY;
        const isNearDesignSection = designTopOffset < window.innerHeight / 2;
        if (isNearDesignSection) {
          scrollToDesign();
        } else {
          const developmentElement = developmentRef.current;
          const developmentTopOffset =
            developmentElement.getBoundingClientRect().top + window.scrollY;
          const isNearDevelopmentSection =
            developmentTopOffset < window.innerHeight / 2;
          if (isNearDevelopmentSection) {
            scrollToDevelopment();
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lg:my-24 my-20 mx-auto lg:w-7/12 w-10/12">
      <header>
        <h1 className="lg:text-9xl text-5xl">John Jang</h1>
        <div className="rotating-text-container lg:mt-5 mt-5 lg:text-3xl text-3xl">
          {titles.map((title, index) => (
            <h2
              key={index}
              className="rotating-text"
              style={{ animationDelay: `${index * 2}s` }}
            >
              {title}
            </h2>
          ))}
        </div>
        <h4 className="mt-6 lg:text-3xl text-xl">
          I specialize in designing and building digital products for the web.
          Currently, I am focused on redesigning a web application at TuGo
          Travel Insurance.
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
            <FaArrowAltCircleDown className="lg:mt-14 md:my-28 my-20 mx-auto text-3xl animate-bounce hover:cursor-pointer" />
          </button>
        </div>
      </header>
      <section ref={workRef}>
        <Work />
        <div className="text-center">
          <button onClick={scrollToDesign}>
            <FaArrowAltCircleDown className="mx-auto text-3xl animate-bounce hover:cursor-pointer" />
          </button>
        </div>
      </section>
      <section ref={designRef}>
        <DesignHome />
        <div className="text-center -mt-52">
          <button onClick={scrollToDevelopment}>
            <FaArrowAltCircleDown className="mx-auto text-3xl animate-bounce hover:cursor-pointer" />
          </button>
        </div>
      </section>
      <section ref={developmentRef} className="-mb-28 md:mb-0">
        <DevelopmentHome />
      </section>
    </div>
  );
}
