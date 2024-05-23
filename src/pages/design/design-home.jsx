import { Link } from "react-router-dom";
import DesignHomeNav from "../../components/second-nav/design/design-home-nav";
import { useEffect } from "react";

// Photo
import TeleVU from "../../assets/televu.png";
import TuGo from "../../assets/tugo.png";

const data = [
  {
    id: 1,
    imgSrc: TeleVU,
    imgAlt: "TeleVU",
    imgWidth: 600,
    imgHeight: 400,
    title:
      "TeleVU Innovation Incorporation | Connecting clinicians and patients remotely",
    category: ["UX Research", "UX Design", "Web App"],
    link: "/televu",
  },
  {
    id: 2,
    imgSrc: TuGo,
    imgAlt: "TuGo",
    imgWidth: 570,
    imgHeight: 400,
    icon: "🔒",
    title: "TuGo Travel Insurance | Assurance in your hands wherever you go",
    category: ["UX Design", "Web Redesign", "Currently in Development"],
    link: "/lock",
  },
];

export default function DesignHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <DesignHomeNav />
      <h1 className="my-20 text-center md:text-5xl text-3xl">
        Welcome to my design home
      </h1>
      <section className="my-10 py-10 md:mx-36 mx-12 grid-cols-2 md:flex gap-20 space-y-20 md:space-y-0">
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
                height={item.imgHeight}
                className="rounded-xl hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
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
