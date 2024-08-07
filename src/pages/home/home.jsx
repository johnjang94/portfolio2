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
import Sahki from "../../assets/sahki/home-page-logo.jpeg";

const titles = [
  "systemic thinker",
  "creative designer",
  "innovative problem solver",
];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      id: 1,
      imgSrc: TuGo,
      imgAlt: "TuGo",
      icon: /*"🔒"*/ "",
      title: "TuGo Travel Insurance | 2024",
      descriptionTag:
        "How I elevated tourist engagement with TuGo Insurance by 60%, making it their preferred choice",
      category: ["Web Redesign", "Concept Design"],
      link: "/tugo-insurance",
    },
    {
      id: 2,
      imgSrc: FoodDistro,
      imgAlt: "Food Distro",
      icon: "",
      title: "Food Distro | 2023",
      descriptionTag:
        "Reducing food waste while engaging the locals in a new way",
      category: ["Product Design", "Mobile App"],
      link: "/food-distro",
    },
    {
      id: 3,
      imgSrc: TeleVU,
      imgAlt: "TeleVU",
      title: "TeleVU Innovation Incorporation | 2022",
      descriptionTag: "Reducing wait times by 25% among overwhelmed hospitals",
      category: ["UX Research", "Product Design", "Web App"],
      link: "/televu-brief",
    },
    {
      id: 4,
      imgSrc: Xperience,
      imgAlt: "Xperience",
      icon: "🔒",
      title: "Xperience | 2024",
      descriptionTag: "Share your memories in a new style",
      category: ["Product Design", "Web Design", "Currently in Progress"],
      link: "/lock",
    },
    {
      id: 5,
      imgSrc: Sahki,
      imgAlt: "The Sahki",
      icon: "🔒",
      title: "The Sahki | 2024",
      descriptionTag: "Your Go-To Place for Occasional Shopping",
      category: ["Product Design", "Web Design", "Currently in Progress"],
      link: "/lock",
    },
  ];

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
            className={`w-fit transition-transform duration-300 ease-in-out hover:-translate-y-2 space-y-3 p-2 rounded-xl`}
          >
            <div
              className={`p-3 rounded-xl hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] ${
                item.id === 1
                  ? "bg-[radial-gradient(circle_311px_at_8.6%_27.9%,rgba(62,147,252,0.57)_12.9%,rgba(239,183,192,0.44)_91.2%)]"
                  : item.id === 2
                  ? "bg-[radial-gradient(_circle_farthest-corner_at_10%_20%,rgba(255,209,67,1)_0%,rgba(255,145,83,1)_90%_)]"
                  : item.id === 3
                  ? "bg-[radial-gradient(_circle_farthest-corner_at_48.4%_47.5%,rgba(122,183,255,1)_0%,rgba(21,83,161,1)_90%_)]"
                  : "bg-slate-400"
              }`}
            >
              <Link to={item.link}>
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
            <p>{item.descriptionTag}</p>
            <div className="flex md:space-x-5 space-x-1">
              {item.category.map((category, index) => (
                <span
                  key={index}
                  className="bg-slate-400 rounded-lg md:p-2 p-1 text-white text-xs md:text-sm"
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
