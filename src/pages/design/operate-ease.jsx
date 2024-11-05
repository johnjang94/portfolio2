import { useEffect, useState } from "react";
import { OperateEase } from "../../utils/operate";
import ContentNav from "../../components/contentNav";
import Password from "../../components/lock/password";
import Overview from "./operate/overview";
import Insight from "./operate/insights";
import ProblemStatement from "./operate/problem-statement";
import UserPersona from "./operate/user-persona";
import UserStory from "./operate/user-story";
import CompetitiveAnalysis from "./operate/competitive-analysis";
import Opportunity from "./operate/opportunities";
import Solutions from "./operate/solutions";
import Collaboration from "./operate/collaboration";
import Impact from "./operate/impact";
import Retrospective from "./operate/retrospective";
import StyleGuide from "./operate/style-guide";
import OtherMenu from "../../components/footer2";
import InitialSketch from "./operate/initial-sketch";
import TheStory from "./operate/the-story";
import MidFi from "./operate/mid-fi";

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
      <section className="my-10 w-5/6 mx-auto">
        <div className="bg-gradient-to-b from-slate-500 to-transparent p-5 rounded-xl">
          <img
            src={OperateEase.Demo}
            alt="Demo showcase"
            width={800}
            className="rounded-3xl mx-auto my-5"
          />
        </div>
        <h1 className="text-center md:text-7xl text-lg my-5">OPERATE-EASE</h1>
        <div className="md:mx-44 space-y-5">
          <p className="px-8">
            An innovative SaaS start-up platform that aims to automate hotel
            management, reducing stress, and enhancing customer experiences in
            the areas of restaurant, lodging, and finance.
          </p>
        </div>
        <div className="flex items-center space-x-5 my-10 md:mx-52 mx-8">
          <p>My role</p>
          <p className="font-bold">Associate Product Designer</p>
        </div>
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
            <TheStory />
          </div>
          <div>
            <Overview />
          </div>
          {isPasswordCorrect && (
            <div className="my-5 md:my-28 space-y-20">
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
                <InitialSketch />
              </div>
              <div>
                <MidFi />
              </div>
              <div>
                <StyleGuide />
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
                <Collaboration />
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
