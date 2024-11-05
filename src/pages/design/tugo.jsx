import { useEffect, useState } from "react";
import { tugoInsurance } from "../../utils/tugo-insurance";
import ContentNav from "../../components/contentNav";
import Overview from "./tugo-insurance/overview";
import DataMetrics from "./tugo-insurance/data-metrics";
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
      <section className="my-10 mx-auto">
        <div className="bg-gradient-to-b from-slate-500 to-transparent mx-10 p-5 rounded-xl">
          <img
            src={tugoInsurance.Demo}
            alt="Demo showcase"
            width={800}
            className="rounded-xl mx-auto m-5"
          />
        </div>
        <div className="md:mx-14">
          <h1 className="text-center md:text-7xl text-lg my-5">
            TUGO INSURANCE
          </h1>
          <div className="md:mx-44 space-y-5">
            <p className="px-8">
              An insurance brokerage that offers the most optimized travel
              insurance packages to travelers.
            </p>
          </div>
          <div className="flex items-center space-x-5 my-10 md:mx-52 mx-8">
            <p>My role</p>
            <p className="font-bold">Associate UX/UI Designer</p>
          </div>
        </div>
      </section>
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
            <Overview />
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
          <div id={2}>
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
