import { useEffect, useState } from "react";
import { ProjectNav } from "../../components/secondNav";
import { tugoInsurance } from "../../utils/tugoinsuranceImages";
import ContentNav from "../../components/contentNav";
import Summary from "./tugo-insurance/summary";
import Overview from "./tugo-insurance/overview";
import Objectives from "./tugo-insurance/project-objectives";
import Insights from "./tugo-insurance/insights";
import Principles from "./tugo-insurance/design-principles";
import Solutions from "./tugo-insurance/solutions";
import Outcomes from "./tugo-insurance/outcomes";
import Takeaways from "./tugo-insurance/key-takeaways";
import OtherMenu from "../../components/footer2";

export default function TuGoInsurance() {
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
        <h3 className="mt-14 mb-4 md:w-8/12 md:text-center md:mx-28 mx-9 text-lg md:text-2xl">
          Concept Design for a Web Application
        </h3>
        <h1 className="mt-9 md:w-8/12 md:text-center mx-9 md:mx-52 my-10 md:text-5xl text-lg">
          TUGO TRAVEL INSURANCE
        </h1>
      </header>
      <section className="bg-slate-500 p-5 rounded-xl w-5/6 mx-auto">
        {/* Demo banner */}
        <img
          src={tugoInsurance.Demo}
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
            pathname="/tugo-insurance"
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
            <Principles />
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
