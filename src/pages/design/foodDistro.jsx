import { useEffect, useState } from "react";
import DesignNav from "../../components/designNav";
import { distroImages } from "../../utils/designImages";
import { distroVideo } from "../../utils/designImages";
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
        <h3 className="mt-14 mb-4 md:w-7/12 md:text-center mx-10 text-2xl">
          Product Design
        </h3>
        <h1 className="mt-9 md:w-8/12 md:text-center mx-10 md:mx-14 text-5xl">
          FOOD DISTRO
        </h1>
        <p className="mt-4 md:w-3/6 md:mx-auto mx-10 text-2xl">
          A food donation mobile app that connects individual donators and
          takers locally to reduce the food waste and the poverty around in the
          communities.
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
          <p className="font-light text-base">2023</p>
        </div>
      </section>
      <section className="bg-slate-500 p-5 rounded-xl w-5/6 mx-auto">
        <video
          width="300"
          className="mx-auto bg-transparent rounded-xl"
          controls
        >
          <source src={distroVideo.DistroDemo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="md:flex md:flex-1">
        <div>
          <DesignNav currentSection={currentSection} />
        </div>
        <div className="md:my-28 mb-28 px-7 md:w-4/6">
          {/* ================ BACKGROUND =================== */}
          <div>
            <h3 id="background" className="text-2xl">
              BACKGROUND
            </h3>
            <h1 className="text-4xl font-medium">
              Chaos in medical sector due to COVID-19 and how the boom in IT
              seeks to help --- but challenges
            </h1>
            <img src={distroImages.Listing} alt="List" />
            <p className="my-5 text-2xl">
              From smartphones to cars, the popularity of technology during the
              pandemic seemed unbreakable. In the meantime, a huge red flag was
              raised in hospitality across Canada. Finally, here comes an IT
              company that pulled off the sleeves to assist the medical
              professionals “remotely”
            </p>
            <p className="my-5 text-2xl font-semibold">
              Remote, it is indeed the fresh approach that filters out the
              patient cases depending on its severity and urgency.
            </p>
            <p className="text-2xl mb-24">
              Still, my colleagues and I noticed that there are some challenges
              that the clinicians are facing in terms of use and decided to come
              up with a different design plan to improve the product’s
              usability, starting from the market research.
            </p>
          </div>
          {/* =========================== RESEARCH =================== */}
          <div>
            <h3 id="research" className="text-2xl">
              RESEARCH
            </h3>
            <h1 className="text-4xl font-medium">
              To understand why they would choose other platforms than what is
              already offered
            </h1>
            <ul className="text-2xl my-5 list-disc">
              After exploring the existing platform, my colleagues and I have
              come to the hypothesis that the instructions are not clear:
              <div className="px-7">
                <li className="text-red-500 my-3">
                  It is difficult to understand the navigation
                </li>
                <li className="text-red-500">
                  The technical structure of the video-call web pages do not
                  follow the industry standard
                </li>
              </div>
            </ul>
            <p className="my-5 text-2xl">
              We have interviewed about 10 participants in two different groups.
              One group have received a tutorial on how to use the platform when
              the other group did not receive any tutorial.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
