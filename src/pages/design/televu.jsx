import { useEffect, useState } from "react";
import { televu } from "../../utils/televu";
import ContentNav from "../../components/contentNav";
import Overview from "./televu/overview";
import AtIssue from "./televu/at-issue";
import Opportunity from "./televu/opportunities";
import CompetitiveAnalysis from "./televu/comparative-analysis";
import Solutions from "./televu/solutions";
import NextSteps from "./televu/next-steps";
import OtherMenu from "../../components/footer2";
import Retrospective from "./televu/retrospective";
import Sketching from "./televu/sketching";
import TheStory from "./televu/the-story";
import Impact from "./televu/impact";

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
      <section className="my-10 mx-auto">
        <div className="bg-gradient-to-b from-slate-500 to-transparent mx-10 p-5 rounded-xl">
          <img
            src={televu.Demo}
            alt="Demo"
            width={1200}
            className="rounded-xl mx-auto"
          />
        </div>
        <div className="md:mx-12">
          <h1 className="text-center md:text-7xl text-lg my-5">
            TELEVU INNOVATION
          </h1>
          <div className="md:mx-44 space-y-5">
            <p className="px-8">
              A telecommunication platform that aims to ease the burden of
              hospitals across Canada during pandemic by offering remote
              treatment to the clinicians and the patients.
            </p>
          </div>
          <div className="flex items-center space-x-5 my-10 md:mx-52 mx-8">
            <p>My role</p>
            <p className="font-bold">UX/UI Designer</p>
          </div>
        </div>
      </section>
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
            <TheStory />
          </div>
          <div>
            <Overview />
          </div>
          <div>
            <AtIssue />
          </div>
          <div id={2}>
            <Opportunity />
          </div>
          <div>
            <CompetitiveAnalysis />
          </div>
          <div>
            <Sketching />
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
