import { useEffect, useRef, useState } from "react";
import { TuGoNav } from "../../components/designSubNav";

export default function Tugo() {
  const [currentSection, setCurrentSection] = useState("background");
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);

    const sectionIds = [
      "background",
      "research",
      "design-process",
      "mid-fidelity",
      "competitive-analysis",
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

  const handleToggle = (section) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const contentRef = useRef({});

  useEffect(() => {
    Object.keys(visibleSections).forEach((section) => {
      if (contentRef.current[section]) {
        contentRef.current[section].style.maxHeight = visibleSections[section]
          ? `${contentRef.current[section].scrollHeight}px`
          : "0";
      }
    });
  }, [visibleSections]);

  return (
    <div>
      <TuGoNav />
      <header>
        <h3 className="mt-14 mb-4 md:w-7/12 md:text-center md:mx-5 mx-9 text-lg md:text-2xl">
          UX/UI Design
        </h3>
        <h1 className="mt-9 md:w-8/12 md:text-center mx-9 md:mx-52 md:text-5xl text-xl">
          TUGO TRAVEL INSURANCE
        </h1>
        <p className="mt-4 md:w-3/6 md:mx-auto mx-10 md:text-2xl text-xl">
          A food donation mobile app that connects individual donators and
          takers locally to reduce the food waste and the poverty around in the
          communities.
        </p>
      </header>
      <section className="grid-cols-3 justify-between flex my-20 md:w-3/6 md:mx-auto mx-10">
        <div>
          <h4 className="font-base text-xl">Role</h4>
          <p className="font-light text-base">UX/UI Design</p>
        </div>
        <div>
          <h4 className="font-base text-xl">Tools</h4>
          <p className="font-light text-base">Figma</p>
          <p className="font-light text-base">Figjam</p>
        </div>
        <div>
          <h4 className="font-base text-xl">Year</h4>
          <p className="font-light text-base">2023 ~ 2024</p>
        </div>
      </section>
      <section className="bg-slate-500 p-5 rounded-xl w-5/6 mx-auto">
        {/*  */}
      </section>
    </div>
  );
}
