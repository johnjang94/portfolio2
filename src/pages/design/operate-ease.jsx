import { useEffect, useState } from "react";
import { OperateEase } from "../../utils/operate";
import ContentNav from "../../components/contentNav";
import Summary from "./operate/summary";
import Password from "../../components/lock/password";
import Overview from "./operate/overview";
import Client from "./operate/client";
import Assumptions from "./operate/assumptions";
import Insight from "./operate/insights";
import ProblemStatement from "./operate/problem-statement";
import UserPersona from "./operate/user-persona";
import UserStory from "./operate/user-story";
import CompetitiveAnalysis from "./operate/competitive-analysis";
import Opportunity from "./operate/opportunities";
import Solutions from "./operate/solutions";
import Collaboration from "./operate/collaboration";
import Impact from "./operate/impact";
import NextSteps from "./operate/next-steps";
import Retrospective from "./operate/retrospective";

export default function OPERATE() {
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
        <h3 className="mt-14 mb-4 md:w-7/12 md:text-center md:mx-14 mx-10 text-base md:text-2xl">
          Product Design for Hospitality
        </h3>
        <h1 className="my-9 md:w-5/12 md:text-center mx-10 md:mx-44 md:text-5xl text-lg">
          OPERATE-EASE
        </h1>
      </header>
      <section className="bg-slate-500 p-5 rounded-xl w-5/6 mx-auto">
        <img
          src={OperateEase.Demo}
          alt="Demo showcase"
          width={1200}
          className="rounded-3xl mx-auto"
        />
      </section>
      <section className="md:flex md:flex-1">
        <div>
          <ContentNav
            currentSection={currentSection}
            isDemoApplicable={false}
            pathname="/operate"
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
            <Client />
          </div>
          {isPasswordCorrect && (
            <div className="my-5 md:my-28 space-y-20">
              <div>
                <Assumptions />
              </div>
              <div id={2}>
                <Insight />
              </div>
              <div>
                <UserPersona />
              </div>
              <div>
                <ProblemStatement />
              </div>
              <div>
                <UserStory />
              </div>
              <div>
                <CompetitiveAnalysis />
              </div>
              <div>
                <Opportunity />
              </div>
              <div>
                <Collaboration />
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
            </div>
          )}
        </section>
      </section>
      {!isPasswordCorrect && (
        <section className="w-full">
          <Password onCorrectPassword={handleCorrectPassword} />
        </section>
      )}
    </div>
  );
}
