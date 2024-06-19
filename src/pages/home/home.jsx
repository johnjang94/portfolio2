import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

import "./home.css";

// Project Images
// Photo
import TeleVU from "../../assets/home/televu.png";
import FoodDistro from "../../assets/home/foodDistro.png";
import TuGo from "../../assets/home/tugo.png";
import Xperience from "../../assets/home/xperience.png";

const titles = ["UX Designer", "Product Designer", "Web Designer"];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      id: 1,
      imgSrc: Xperience,
      imgAlt: "Xperience",
      icon: "🔒",
      title: "Xperience | Share your memories in a new style",
      category: ["Product Design", "Web Design"],
      link: "/lock",
    },
    {
      id: 2,
      imgSrc: TuGo,
      imgAlt: "TuGo",
      icon: /*"🔒"*/ "",
      title: "TuGo Travel Insurance | Assurance in your hands wherever you go",
      category: ["UX Design", "Web Redesign"],
      link: "/tugo",
    },
    {
      id: 3,
      imgSrc: FoodDistro,
      imgAlt: "Food Distro",
      icon: "",
      title:
        "Food Distro | Reducing Your Stress on Sharing Your Food with Others",
      category: ["Product Design", "Mobile App"],
      link: "/food",
    },
    {
      id: 4,
      imgSrc: TeleVU,
      imgAlt: "TeleVU",
      title:
        "TeleVU Innovation Incorporation | Connecting clinicians and patients remotely",
      category: ["UX Research", "Product Design", "Web App"],
      link: "/televu",
    },
  ];

  return (
    <div>
      <header className="lg:my-24 mx-auto lg:w-7/12 w-10/12 mt-20 mb-82 2xl:my-80">
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
          I specialize in crafting digital experiences and products for the web
          and mobile applications. Currently, I am designing a decentralized
          media sharing application called{" "}
          <span className="font-bold">Xperience</span> for Lab Academy.
        </h4>
        <div className="md:flex justify-between">
          <Link
            to="/about"
            className="mt-5 text-blue-500 hover:underline hover:cursor-pointer flex space-x-2 items-center"
          >
            <button>More about me</button>
            <FaArrowRight />
          </Link>
          <a
            href="mailto:jscolbe9675@gmail.com"
            className="hidden mt-5 text-blue-500 hover:underline hover:cursor-pointer md:flex space-x-2 items-center"
          >
            <button>Contact Me</button>
            <FaArrowRight />
          </a>
        </div>
        <div className="my-40 md:hidden">
          <FaArrowDownLong className="text-3xl mx-auto" />
        </div>
      </header>
      <section className="my-40 md:mx-36 mx-12 grid grid-cols-1 md:grid-cols-2 md:gap-20 space-y-10 md:space-y-0">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-fit transition-transform duration-300 ease-in-out hover:-translate-y-2"
          >
            <Link to={item.link}>
              <img
                src={item.imgSrc}
                alt={item.imgAlt}
                className="rounded-xl hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] mx-auto md:h-[300px] h-auto w-auto"
              />
            </Link>
            <p className="my-3">
              {item.icon} {item.title}
            </p>
            <div className="flex md:space-x-5 space-x-1">
              {item.category.map((category, index) => (
                <span
                  key={index}
                  className="bg-slate-400 rounded-lg md:p-2 p-1 text-white text-xs md:text-base"
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
