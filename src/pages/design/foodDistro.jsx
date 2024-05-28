import { useEffect, useRef, useState } from "react";
import DesignNav from "../../components/designNav";
// import { distroImages } from "../../utils/designImages";
import { distroImages, distroVideo } from "../../utils/designImages";
import { FoodDistroNav } from "../../components/designSubNav";
import "./foodDistro.css";

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

  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isVisible
        ? `${contentRef.current.scrollHeight}px`
        : "0";
    }
  }, [isVisible]);

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
            <h3 id="background" className="text-2xl my-3">
              BACKGROUND
            </h3>
            <h1 className="text-4xl font-medium">
              Hands needed to reduce the growing waste of food
            </h1>
            <p className="my-5 text-2xl">
              As the consumption rate on food has increased, so did the food
              waste. This is a growing issue among some of the communities
              because some of the locals who have enough budget in their pockets
              bought more than enough groceries and ending up the untouched
              leftovers to the trash whereas some others who live
              paycheck-to-paycheck are in need of help. Meanwhile the food
              takers also facing the stigma of food bank, both parties are
              looking for another solution.
            </p>
          </div>
          {/* =========================== RESEARCH =================== */}
          <div>
            <h3 id="research" className="text-2xl mb-3">
              RESEARCH
            </h3>
            <h1 className="text-4xl font-medium">
              To understand why they say that the existing services do not
              exactly meet their needs
            </h1>
            <ul className="text-2xl my-5 list-disc">
              After surveys, analyzing other brands, and drawing personas, my
              colleagues and I have drawn the following hypotheses for the cause
              of the dissatisfaction:
              <div className="px-7">
                <li className="text-red-500 my-3">
                  Some locals who use the existing platforms still struggle to
                  find the items that match their needs
                </li>
                <li className="text-red-500">
                  There is not enough community support
                </li>
                <li className="text-red-500">
                  It is true that not everyone has the access to the internet
                </li>
              </div>
            </ul>
            <button className="text-blue-500" onClick={handleToggle}>
              More detail
            </button>
            {isVisible && (
              <div
                ref={contentRef}
                className={`content transition-max-height duration-500 ease-in-out overflow-hidden`}
                style={{
                  maxHeight: isVisible
                    ? `${contentRef.current?.scrollHeight}px`
                    : "0",
                }}
              >
                <p className="my-5 text-2xl">
                  Team Food Distro conducted initial survey to discover the
                  underlying issues on the food waste across the United States
                  and received the total number of 138 responses from 17 states
                  from coast to coast in the period of 14 days.
                </p>
                <img src={distroImages.Demographics} alt="Demographics" />
                <p className="my-5 text-2xl">
                  The respondants varied in age, from less than 18 to over 70,
                  in terms of household income, from less than USD $ 30K to more
                  than USD $ 200K including the ones who preferred not to
                  answer, and in terms of the size of the households, from
                  moved-out individuals to families more than 5.
                </p>
                <div className="md:grid-col-3 gap-10 space-between md:flex">
                  <div className="space-y-5 mb-5 md:mb-0">
                    <img
                      src={distroImages.AppExposure}
                      alt="Used App before yes vs no"
                      className="h-1/2"
                    />
                    <img
                      src={distroImages.Experience}
                      alt="Age & Experience 1"
                      className="h-1/2 w-full"
                    />
                  </div>
                  <img
                    src={distroImages.Experience2}
                    alt="Age & Experience 2"
                    className="w-full md:w-auto"
                  />
                </div>
                <p className="my-8 text-2xl">
                  In addition, the survey also found out that elders tend to
                  value the tendency to reduce the food as important relatively
                  more than the young generations.
                </p>
              </div>
            )}
          </div>
          {/* ======================== COMPETITIVE ANALYSIS =================== */}
          <div>
            <h3 id="competitive-analysis" className="text-2xl mt-10">
              COMPETITIVE ANALYSIS
            </h3>
            <h1 className="text-4xl font-medium mb-5">
              Well-established brands were well-interacting with users
            </h1>
            <p className="text-2xl">
              We compared other platforms that are renowned and well-established
              that many people use:
            </p>
            <div className="md:flex md:justify-between my-5 space-y-5 md:space-y-0"></div>
            <ul className="text-2xl list-disc">
              These brands were...
              <li className="text-2xl mx-5">
                quietly notifying the users if the users have decided to record
                the meeting
              </li>
              <li className="text-2xl mx-5">
                the icons were cleaned for the video-call session (only
                containing what&#39;s most needed)
              </li>
              <li className="text-2xl mx-5">
                the users did not receive any notification on what happened
                after the recording was stopped, but the users were able to
                easily find the records on their dashboard
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
