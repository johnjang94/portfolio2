import { useEffect, useState } from "react";
import { ProjectNav } from "../../components/secondNav";
import OtherMenu from "../../components/footer2";
import { foodDistroImages } from "../../utils/foodDistroImages";
import ContentNav from "../../components/contentNav";
import Summary from "./food-distro/summary";
import Overview from "./food-distro/overview";
import Objectives from "./food-distro/project-objectives";
import Insights from "./food-distro/insights";
import CXmap from "./food-distro/CXmap";
import Solutions from "./food-distro/solutions";
import Outcomes from "./food-distro/outcomes";
import Takeaways from "./food-distro/key-takeaways";

export default function FooddistrO() {
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);

    const sectionIds = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
    ];

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div>
      <ProjectNav />
      <header>
        <h3 className="mt-14 mb-4 md:w-8/12 md:text-center md:mx-52 mx-9 text-lg md:text-2xl">
          Product Design for a mobile application
        </h3>
        <h1 className="mt-9 md:w-8/12 md:text-center mx-9 md:mx-36 my-10 md:text-5xl text-lg">
          FOOD DISTRO
        </h1>
      </header>
      <section className="bg-slate-500 p-5 rounded-xl w-5/6 mx-auto">
        {/* Demo banner */}
        <img
          src={foodDistroImages.Demo}
          alt="Demo showcase"
          className="rounded-xl mx-auto"
        />
      </section>
      {/* Main content */}
      <section className="md:flex md:flex-1 gap-10">
        <div>
          <ContentNav
            currentSection={currentSection}
            isDemoApplicable={false}
            pathname="/food-distro"
          />
        </div>
        <section className="md:w-4/6 mx-10 my-5 md:my-28 space-y-20">
          <div id={1}>
            <Summary />
          </div>
          <div id={2}>
            <Overview />
          </div>
          <div id={3}>
            <Objectives />
          </div>
          <div id={4}>
            <Insights />
          </div>
          <div id={5}>
            <CXmap />
          </div>
          <div id={6}>
            <Solutions />
          </div>
          <div id={7}>
            <Outcomes />
          </div>
          <div id={8}>
            <Takeaways />
          </div>
        </section>
      </section>
      <footer>
        <OtherMenu />
      </footer>
    </div>
  );
}
