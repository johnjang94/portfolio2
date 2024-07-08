import { useEffect, useState } from "react";
import { ProjectNav } from "../../components/secondNav";
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
      <ProjectNav />
      <header>
        <h3 className="mt-14 mb-4 md:w-8/12 md:text-center md:mx-14 mx-10 text-base md:text-2xl">
          Product Design | Web Design
        </h3>
        <h1 className="mt-9 md:w-5/12 md:text-center mx-10 md:mx-48 md:text-5xl text-lg">
          XPERIENCE
        </h1>
        <p className="mt-4 md:w-3/6 md:mx-auto mx-10 md:text-2xl text-xl">
          A New way of sharing your memories with the people in your social
          circle by implementing a decentralized sharing system.
        </p>
      </header>
      <section className="grid-cols-3 justify-between flex my-20 md:w-3/6 md:mx-auto mx-10">
        <div>
          <h4 className="font-base text-xl">Role</h4>
          <p className="font-light text-base">Product Design</p>
        </div>
        <div>
          <h4 className="font-base text-xl">Tools</h4>
          <p className="font-light text-base">Figma</p>
          <p className="font-light text-base">Figjam</p>
        </div>
        <div>
          <h4 className="font-base text-xl">Year</h4>
          <p className="font-light text-base">2024</p>
        </div>
      </section>
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
        <div className="md:my-28 px-7 md:w-4/6">
          {/* ================ BACKGROUND =================== */}
          <div>
            <h3 id={1} className="text-2xl my-5">
              BACKGROUND
            </h3>
            <h1 className="md:text-4xl text-2xl font-medium my-3">
              Less effort to capture the moments
            </h1>
            <p className="md:text-2xl text-xl mb-10">
              Unless you are a professional photographer, you might have this
              desire to capture the right moment and share it with the people
              you know. Even if you captured, the quality of the media taken
              from those lens often breaks the pure quality. In order to resolve
              this, Xperience is designed to provide an easier solution to keep
              the moment and share with others.
            </p>
          </div>
          {/* ================ PROBLEM STATEMENT =================== */}
          <div>
            <h3 id={2} className="text-2xl my-5">
              PROBLEM STATEMENT
            </h3>
            <p className="md:text-2xl text-xl mb-10 my-3">
              Event organizers often struggle to capture the full breadth of
              attendee experiences, especially in larger settings like
              conferences and sports venues. Attendees may also miss out on
              opportunities to share their unique perspectives and connect with
              fellow participants.
            </p>
          </div>
          {/* ================ ABSTRACT =================== */}
          <div>
            <h3 id={3} className="text-2xl my-5">
              ABSTRACT
            </h3>
            <p className="md:text-2xl text-xl mb-10">
              I need to leave a new comment for abstract.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
