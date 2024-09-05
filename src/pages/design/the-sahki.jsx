import { useEffect, useState } from "react";
import ContentNav from "../../components/contentNav";
import Summary from "./sahki/summary";
import Overview from "./sahki/overview";
import Project from "./sahki/project";
import Password from "../../components/lock/password";
import Project2 from "./sahki/project2";
import { sahki } from "../../utils/sahki";

export default function SAHKI() {
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
          THE SAHKI
        </h1>
      </header>
      <section className="bg-slate-500 p-5 rounded-xl w-5/6 mx-auto">
        <img
          src={sahki.Home}
          alt="Demo showcase"
          width={500}
          className="rounded-3xl mx-auto"
        />
      </section>
      <section className="md:flex md:flex-1">
        <div>
          <ContentNav
            currentSection={currentSection}
            isDemoApplicable={false}
            pathname="/experience"
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
          {isPasswordCorrect && (
            <div id="4">
              <Project2 />
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
