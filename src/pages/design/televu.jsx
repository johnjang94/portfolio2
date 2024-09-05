import { useEffect, useState } from "react";
import { televu } from "../../utils/televu";
import ContentNav from "../../components/contentNav";
import Summary from "./televu/summary";
import Overview from "./televu/overview";
import Project from "./televu/project";
import AboutThat from "./televu/about-that";
import Opportunity from "./televu/opportunities";
import CompetitiveAnalysis from "./televu/comparative-analysis";
import Solutions from "./televu/solutions";
import NextSteps from "./televu/next-steps";
import OtherMenu from "../../components/footer2";
import Retrospective from "./televu/retrospective";

export default function TeleVU() {
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);

    const sectionIds = [{ id: 1 }, { id: 2 }, { id: 3 }];

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
      <header>
        <h3 className="mt-14 mb-4 md:w-8/12 md:text-center md:mx-36 mx-9 text-lg md:text-2xl">
          UX/UI Design for a web application
        </h3>
        <h1 className="mt-9 md:w-8/12 md:text-center mx-9 md:mx-48 my-10 md:text-5xl text-lg">
          TELEVU INNOVATION
        </h1>
      </header>
      <section className="bg-slate-500 p-5 rounded-xl w-5/6 mx-auto">
        {/* Demo banner */}
        <img
          src={televu.Demo}
          alt="Demo"
          width={1200}
          className="rounded-xl mx-auto"
        />
      </section>
      {/* Main content */}
      <section className="md:flex md:flex-1 gap-10">
        <div>
          <ContentNav
            currentSection={currentSection}
            isDemoApplicable={false}
            pathname="/televu"
          />
        </div>
        <section className="md:w-4/6 mx-10 my-5 md:my-28 space-y-20">
          <div id={1}>
            <Summary />
          </div>
          <div>
            <Overview />
          </div>
          <div id={2}>
            <Project />
          </div>
          <div>
            <AboutThat />
          </div>
          <div>
            <Opportunity />
          </div>
          <div>
            <CompetitiveAnalysis />
          </div>
          <div id={3}>
            <Solutions />
          </div>
          <div>
            <NextSteps />
          </div>
          <div>
            <Retrospective />
          </div>
        </section>
      </section>
      <footer>
        <OtherMenu />
      </footer>
    </div>
  );
}
