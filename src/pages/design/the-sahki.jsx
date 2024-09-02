import { useEffect, useState } from "react";
import ContentNav from "../../components/contentNav";

export default function SAHKI() {
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);

    const sectionIds = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
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
      <header>
        <h3 className="mt-14 mb-4 md:w-8/12 md:text-center md:mx-14 mx-10 text-base md:text-2xl">
          Product Design | Web Design
        </h3>
        <h1 className="mt-9 md:w-5/12 md:text-center mx-10 md:mx-48 md:text-5xl text-lg">
          THE SAHKI
        </h1>
      </header>
      <section className="bg-slate-500 p-5 rounded-xl w-5/6 mx-auto">
        <img src="" alt="Demo showcase" className="rounded-xl mx-auto" />
      </section>
      <section className="md:flex md:flex-1">
        <div>
          <ContentNav
            currentSection={currentSection}
            isDemoApplicable={false}
            pathname="/experience"
          />
        </div>
      </section>
    </div>
  );
}
