import { useEffect, useState } from "react";
import DesignNav from "../../components/designNav";
import { FoodDistroNav } from "../../components/designSubNav";

export default function FoodDistro() {
  const [currentSection, setCurrentSection] = useState("background");

  useEffect(() => {
    window.scrollTo(0, 0);

    const sectionIds = [
      "background",
      "research",
      "iteration",
      "competitive-analysis",
      "design-process",
      "usability-testing",
      "design-changes",
      "lessons-learned",
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
      <FoodDistroNav />
      <header>
        <h3 className="mt-14 mb-4 w-3/6 mx-auto text-2xl">Product Design</h3>
        <h1 className="mt-9 w-3/6 mx-auto text-5xl">TELEVU</h1>
        <p className="mt-4 md:w-3/6 md:mx-auto mx-10 text-2xl">
          A video-call service that attains a top-notch security system and that
          is used for the medical professionals to assist remote diagnosis and
          treatment. You might not need to wait too long.
        </p>
      </header>
      <section className="grid-cols-3 justify-between flex my-20 md:w-3/6 md:mx-auto mx-10">
        <div>
          <h4 className="font-base text-xl">Role</h4>
          <p className="font-light text-base">UX/UI Research</p>
          <p className="font-light text-base">UX/UI Design</p>
        </div>
        <div>
          <h4 className="font-base text-xl">Tools</h4>
          <p className="font-light text-base">Figma</p>
          <p className="font-light text-base">Figjam</p>
        </div>
        <div>
          <h4 className="font-base text-xl">Year</h4>
          <p className="font-light text-base">2022</p>
        </div>
      </section>
      <section className="bg-slate-500 p-5 rounded-xl w-5/6 mx-auto">
        <img
          src=""
          alt="Video Conference screenshot"
          width={500}
          className=" md:left-1/4 mx-auto"
        />
        <img
          src=""
          alt="ReportVU screen capture"
          width={500}
          className="my-5 mx-auto md:mx-0"
        />
        <img
          src=""
          alt="List of Contact"
          width={500}
          className="my-5 md:relative md:left-1/4 mx-auto"
        />
      </section>
      <section className="md:flex md:flex-1">
        <div>
          <DesignNav currentSection={currentSection} />
        </div>
      </section>
    </div>
  );
}
