import { useEffect, useState } from "react";
import ContentNav from "../../components/contentNav";
import Summary from "./sakhi/summary";
import MissionObjective from "./sakhi/mission-objective";
import Accomplishments from "./sakhi/accomplishments";
import Client from "./sakhi/client";
import Motive from "./sakhi/motive";
import Password from "../../components/lock/password";
import CompetitiveAnalysis from "./sakhi/competitive-analysis";
import Insights from "./sakhi/insights";
import UserPersona from "./sakhi/user-persona";
import Opportunity from "./sakhi/opportunity";
import Solutions from "./sakhi/solution";
import Impact from "./sakhi/impact";
import { sakhi } from "../../utils/sakhi";
import Retrospective from "./sakhi/retrospective";
import NextSteps from "./sakhi/next-steps";
import OtherMenu from "../../components/footer2";

export default function SAKHI() {
  const [currentSection, setCurrentSection] = useState(1);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

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

  const handleCorrectPassword = () => {
    setIsPasswordCorrect(true);
  };

  return (
    <div>
      <header>
        <h3 className="mt-14 mb-4 md:w-8/12 md:text-center md:mx-14 mx-10 text-base md:text-2xl">
          Product Design for E-commerce
        </h3>
        <h1 className="my-9 md:w-5/12 md:text-center mx-10 md:mx-44 md:text-5xl text-lg">
          THE SAKHI
        </h1>
      </header>
      <section className="bg-slate-500 p-5 rounded-xl w-5/6 mx-auto">
        <img
          src={sakhi.Demo}
          alt="Demo showcase"
          width={800}
          className="rounded-3xl mx-auto"
        />
      </section>
      <section className="md:flex md:flex-1">
        <div>
          <ContentNav
            currentSection={currentSection}
            isDemoApplicable={false}
            pathname="/sakhi"
          />
        </div>
        <section className="md:w-4/6 mx-10 my-5 md:my-28 space-y-20">
          <div id={1}>
            <Summary />
          </div>
          <div>
            <MissionObjective />
          </div>
          <div>
            <Accomplishments />
          </div>
          <div>
            <Client />
          </div>
          <div>
            <Motive />
          </div>
          {isPasswordCorrect && (
            <div className="my-5 md:my-28 space-y-20">
              <div>
                <CompetitiveAnalysis />
              </div>
              <div>
                <UserPersona />
              </div>
              <div>
                <Insights />
              </div>
              <div id={2}>
                <Opportunity />
              </div>
              <div id={3}>
                <Solutions />
              </div>
              <div>
                <Impact />
              </div>
              <div>
                <Retrospective />
              </div>
              <div>
                <NextSteps />
              </div>
            </div>
          )}
        </section>
      </section>
      {!isPasswordCorrect && (
        <section className="w-full">
          <Password onCorrectPassword={handleCorrectPassword} />
        </section>
      )}
      <footer className="my-5">
        <OtherMenu />
      </footer>
    </div>
  );
}
