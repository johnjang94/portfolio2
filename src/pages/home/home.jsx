import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import "./home.css";

import TeleVU from "../../assets/home/televu.png";
import FoodDistro from "../../assets/home/foodDistro.png";
import TuGo from "../../assets/home/tugo.png";
import Sahki from "../../assets/sahki/home-page-logo.jpeg";

const titles = [
  "systemic thinker",
  "creative designer",
  "innovative problem solver",
];

const data = [
  {
    id: 1,
    imgSrc: TuGo,
    imgAlt: "TuGo",
    icon: "",
    title: "TuGo Travel Insurance | 2024",
    category: ["UX/UI Design", "Website Redesign", "Web App"],
    link: "/tugo-insurance",
  },
  {
    id: 2,
    imgSrc: FoodDistro,
    imgAlt: "Food Distro",
    icon: "",
    title: "Food Distro",
    category: ["UX/UI Design", "Mobile App"],
    link: "/food-distro",
  },
  {
    id: 3,
    imgSrc: TeleVU,
    imgAlt: "TeleVU",
    title: "TeleVU Innovation Incorporation",
    category: ["UX Research", "UX/UI Design", "Web App"],
    link: "/televu",
  },
  {
    id: 5,
    imgSrc: Sahki,
    imgAlt: "The Sahki",
    icon: "🔒",
    title: "The Sahki | 2024",
    category: ["Product Design", "Web Design", "Currently in Progress"],
    link: "/lock",
  },
];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header className="lg:my-24 md:mx-auto mx-8 lg:w-6/12 w-11/12 mt-20 mb-82 2xl:my-80">
        <h1 className="lg:text-9xl text-5xl">John Jang</h1>
        <div className="rotating-text-container lg:mt-5 mt-5 lg:text-2xl text-xl">
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
        <p className="mt-6 lg:text-2xl text-xl leading-relaxed">
          Currently, I&#39;m a Product Designer at{" "}
          <span className="font-bold">THE SAHKI</span>.
        </p>
        <div className="md:flex justify-between">
          <Link
            to="/about"
            className="mt-5 text-blue-500 hover:underline hover:cursor-pointer flex space-x-2 items-center"
          >
            <button>More about me</button>
            <FaArrowRight />
          </Link>
        </div>
        <div className="my-56 md:hidden">
          <FaArrowDownLong className="text-3xl mx-auto" />
        </div>
      </header>
      <section className="my-40 md:mx-36 mx-12 grid grid-cols-1 md:grid-cols-2 md:gap-20 space-y-10 md:space-y-0">
        {data.map((item) => (
          <div
            key={item.id}
            className="transition-transform duration-300 ease-in-out hover:-translate-y-2 space-y-3 p-2 rounded-xl w-full"
          >
            <div
              className={`p-3 rounded-xl hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] ${
                item.id === 1
                  ? "bg-[radial-gradient(circle_311px_at_8.6%_27.9%,rgba(62,147,252,0.57)_12.9%,rgba(239,183,192,0.44)_91.2%)] relative"
                  : item.id === 2
                  ? "bg-[radial-gradient(_circle_farthest-corner_at_10%_20%,rgba(255,209,67,1)_0%,rgba(255,145,83,1)_90%_)]"
                  : item.id === 3
                  ? "bg-[radial-gradient(_circle_farthest-corner_at_48.4%_47.5%,rgba(122,183,255,1)_0%,rgba(21,83,161,1)_90%_)]"
                  : "bg-slate-400"
              }`}
            >
              <Link
                to={item.id === 5 ? "/lock" : item.link}
                state={{ fromId: item.id }}
              >
                <img
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  className="rounded-xl mx-auto md:h-[300px]"
                />
              </Link>
            </div>
            <p className="font-bold">
              {item.icon} {item.title}
            </p>
            <div className="flex md:space-x-5 space-x-1">
              {item.category.map((category, index) => (
                <span
                  key={index}
                  className="bg-slate-400 rounded-lg md:px-2 px-1 py-1 text-white text-xs md:text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
