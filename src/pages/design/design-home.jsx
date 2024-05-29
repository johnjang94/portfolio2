import { Link } from "react-router-dom";
import { useEffect } from "react";

// Photo
import TeleVU from "../../assets/design/televu.png";
import FoodDistro from "../../assets/design/foodDistro.png";
import TuGo from "../../assets/design/tugo.png";

const data = [
  {
    id: 1,
    imgSrc: TuGo,
    imgAlt: "TuGo",
    imgWidth: 570,
    icon: "🔒",
    title: "TuGo Travel Insurance | Assurance in your hands wherever you go",
    category: ["UX Design", "Web Redesign", "Currently in Development"],
    link: "/lock",
  },
  {
    id: 2,
    imgSrc: FoodDistro,
    imgAlt: "Food Distro",
    imgWidth: 265,
    icon: "",
    title:
      "Food Distro | Reducing Your Stress on Sharing Your Food with Others",
    category: ["Product Design", "Mobile App"],
    link: "/food",
  },
  {
    id: 3,
    imgSrc: TeleVU,
    imgAlt: "TeleVU",
    imgWidth: 600,
    title:
      "TeleVU Innovation Incorporation | Connecting clinicians and patients remotely",
    category: ["UX Research", "UX Design", "Web App"],
    link: "/televu",
  },
];

export default function DesignHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="flex justify-between px-10 my-3">
        <h1>UX DESIGN</h1>
        <h1>OVERVIEW</h1>
      </div>
      <h1 className="my-20 text-center md:text-5xl text-3xl">
        Welcome to my design home
      </h1>
      <section className="my-10 py-10 md:mx-36 mx-12 grid grid-cols-1 md:grid-cols-2 gap-20 space-y-20 md:space-y-0">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-fit transition-transform duration-300 ease-in-out hover:-translate-y-2"
          >
            <Link to={item.link}>
              <img
                src={item.imgSrc}
                alt={item.imgAlt}
                width={item.imgWidth}
                className="rounded-xl hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] mx-auto"
              />
            </Link>
            <p className="my-3">
              {item.icon} {item.title}
            </p>
            <div className="flex md:space-x-5 space-x-1">
              {item.category.map((category, index) => (
                <span
                  key={index}
                  className="bg-slate-400 rounded-lg md:p-2 p-1 text-white"
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
