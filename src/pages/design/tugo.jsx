import { useEffect, useState } from "react";
import { tugoInsurance } from "../../utils/tugo-insurance";
import ContentNav from "../../components/contentNav";
import Summary from "./tugo-insurance/summary";
import Overview from "./tugo-insurance/overview";
import Motive from "./tugo-insurance/motive";
import DataMetrics from "./tugo-insurance/data-metrics";
import Project from "./tugo-insurance/project";
import Assumption from "./tugo-insurance/assumption";
import Opportunities from "./tugo-insurance/opportunities";
import CompetitiveAnalysis from "./tugo-insurance/competitive-analysis";
import Surveys from "./tugo-insurance/surveys";
import Solutions from "./tugo-insurance/solutions";
import Impact from "./tugo-insurance/impact";
import NextSteps from "./tugo-insurance/next-steps";
import Retrospective from "./tugo-insurance/retrospective";
import OtherMenu from "../../components/footer2";

export default function TuGo() {
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
        <h3 className="mt-14 mb-4 md:w-8/12 md:text-center md:mx-24 mx-9 text-lg md:text-2xl">
          UX/UI Design for a web application
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
          <div>
            <Overview />
          </div>
          <div>
            <Project />
          </div>
          <div id={2}>
            <Motive />
          </div>
          <div>
            <DataMetrics />
          </div>
          {/* <div>
            <Insights />
          </div> */}
          <div>
            <Assumption />
          </div>
          <div>
            <Opportunities />
          </div>
          <div>
            <CompetitiveAnalysis />
          </div>
          <div>
            <Surveys />
          </div>
          <div id={3}>
            <Solutions />
          </div>
          <div>
            <Impact />
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
