import { useEffect, useRef, useState } from "react";
import DesignNav from "../../components/designNav";
import { distroImages, distroVideo } from "../../utils/designImages";
import { FoodDistroNav } from "../../components/designSubNav";
import "./foodDistro.css";
import Footer from "../../components/footer";

export default function FoodDistro() {
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
      <FoodDistroNav />
      <header>
        <h3 className="mt-14 mb-4 md:w-7/12 md:text-center mx-10 text-2xl">
          Product Design
        </h3>
        <h1 className="mt-9 md:w-8/12 md:text-center mx-10 md:mx-14 md:text-5xl text-3xl">
          FOOD DISTRO
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
          <DesignNav currentSection={currentSection} isDemoApplicable={false} />
        </div>
        <div className="md:my-28 px-7 md:w-4/6">
          {/* ================ BACKGROUND =================== */}
          <div>
            <h3 id="background" className="text-2xl mt-5">
              BACKGROUND
            </h3>
            <h1 className="md:text-4xl text-2xl font-medium my-3">
              Hands needed to reduce the growing waste of food
            </h1>
            <p className="my-5 md:text-2xl text-xl">
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
            <h3 id="research" className="text-2xl my-3">
              RESEARCH
            </h3>
            <h1 className="md:text-4xl text-2xl font-medium my-3">
              To understand why they say that the existing services do not
              exactly meet their needs
            </h1>
            <ul className="my-5 md:text-2xl text-xl list-disc">
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
            <button
              className="text-blue-500"
              onClick={() => handleToggle("research")}
            >
              More detail
            </button>
            {visibleSections["research"] && (
              <div
                ref={(el) => (contentRef.current["research"] = el)}
                className={`content transition-max-height duration-500 ease-in-out overflow-hidden`}
                style={{
                  maxHeight: visibleSections["research"]
                    ? `${contentRef.current["research"]?.scrollHeight}px`
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
            <div className="space-y-5">
              <p className="text-center">Silvia as Food Donor and her story</p>
              <img src={distroImages.FoodDonor} alt="Food Donor" />
              <img
                src={distroImages.FoodDonorJourney}
                alt="Food Donor Journey"
              />
              <p className="text-center">Jack as Food Taker and his story</p>
              <img src={distroImages.FoodTaker} alt="Food Taker" />
              <img
                src={distroImages.FoodTakerJourney}
                alt="Food Taker Journey"
              />
            </div>
          </div>
          {/* ======================== COMPETITIVE ANALYSIS =================== */}
          <div>
            <h3 id="competitive-analysis" className="md:text-2xl text-lg mt-10">
              COMPETITIVE ANALYSIS
            </h3>
            <h1 className="md:text-4xl text-2xl font-medium my-3">
              To benchmark and let Food Distro app be competitive
            </h1>
            <p className="my-5 md:text-2xl text-xl list-disc">
              Team Food Distro compared and analyzed the following four brands
              to examine what services they offer, who they target, and what
              blindspots they might have
            </p>
            <div>
              <div className="flex">
                <img
                  src={distroImages.OLIO}
                  alt="Olio logo"
                  className="w-3/6 p-5 rounded-xl"
                />
                <img
                  src={distroImages.NextDoor}
                  alt="Next Door logo"
                  className="w-3/6 p-5 rounded-xl"
                />
              </div>
              <div className="text-center space-x-28 md:space-x-96 ml-3">
                <span>OLIO</span>
                <span>NextDoor</span>
              </div>
              <div className="flex">
                <img
                  src={distroImages.BuyNothing}
                  alt="Buy Nothing logo"
                  className="w-3/6 p-5 rounded-xl"
                />
                <img
                  src={distroImages.TooGood}
                  alt="Too Good To Go logo"
                  className="w-3/6 p-5 rounded-xl"
                />
              </div>
              <div className="text-center space-x-8 md:space-x-80 ml-3">
                <span>BuyNothing</span>
                <span>Too Good To Go</span>
              </div>
            </div>
            <button
              className="text-blue-500 my-5 md:my-3"
              onClick={() => handleToggle("competitive-analysis")}
            >
              More detail
            </button>
            {visibleSections["competitive-analysis"] && (
              <div
                ref={(el) => (contentRef.current["competitive-analysis"] = el)}
                className={`content transition-max-height duration-500 ease-in-out overflow-hidden`}
                style={{
                  maxHeight: visibleSections["competitive-analysis"]
                    ? `${contentRef.current["competitive-analysis"]?.scrollHeight}px`
                    : "0",
                }}
              >
                <div className="grid-cols-2 space-y-3">
                  <div className="md:flex">
                    <div className="md:flex gap-5 space-y-3 md:space-y-0 my-3 md:my-0">
                      <img
                        src={distroImages.Audience}
                        alt="customers"
                        className="rounded-xl md:w-3/6"
                      />
                      <ul className="md:w-3/6 list-disc">
                        <span className="font-semibold">Target audience</span>
                        <li className="text-blue-500">Local</li>
                        <li className="text-blue-500">Over 18 years old</li>
                        <li className="text-blue-500">
                          Socially & environmentally conscious
                        </li>
                      </ul>
                    </div>
                    <div className="md:flex gap-5 space-y-3 md:space-y-0 my-3 md:my-0">
                      <img
                        src={distroImages.Credibility}
                        alt="credibility"
                        className="rounded-xl md:w-3/6"
                      />
                      <ul className="md:w-3/6 list-disc">
                        <span className="font-semibold">
                          Credibility Management
                        </span>
                        <li className="text-blue-500">
                          BuyNothing, Olio, and NextDoor utilize user identity
                          (user profiles are mandatory)
                        </li>
                        <li className="text-blue-500">
                          Too Good To Go users are anonymous, and the business
                          assumes risk
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:flex">
                    <div className="md:flex gap-5 space-y-3 md:space-y-0 my-3 md:my-0">
                      <img
                        src={distroImages.Focus}
                        alt="focus"
                        className="rounded-xl md:w-3/6"
                      />
                      <ul className="md:w-3/6 list-disc">
                        <span className="font-semibold">Platform focus</span>
                        <li className="text-blue-500">
                          Mainly food (fresh produce, meals, canned goods)
                        </li>
                        <li className="text-blue-500">
                          Sometimes supplies (household items and goods)
                        </li>
                      </ul>
                    </div>
                    <div className="md:flex space-y-3 md:space-y-0 my-3 md:my-0">
                      <img
                        src={distroImages.Security}
                        alt="security"
                        className="rounded-xl md:w-4/6"
                      />
                      <ul className="md:w-3/6 list-disc">
                        <span className="font-semibold">
                          Security Check and Delivery
                        </span>
                        <li className="text-blue-500">
                          Terms and Conditions / Terms of Service
                        </li>
                        <li className="text-blue-500">Verification</li>
                        <li className="text-blue-500">Consent</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <p className="my-5 md:text-2xl text-xl">
              We came to understand that, despite the fact that the existing
              platforms aim the locals whose ages are over 18 and focuses
              primarily on sharing groceries,{" "}
              <span className="text-red-500">
                a&#x29; people who can donate their leftovers do not know where
                and how to donate
              </span>
              , and{" "}
              <span className="text-red-500">
                b&#x29; people who wish to take the donations could not exactly
                find the items that they need
              </span>
              .
            </p>
          </div>
          {/* ======================== DESIGN-PROCESS =================== */}
          <div>
            <h3 id="design-process" className="md:text-2xl text-xl mt-10 mb-5">
              DESIGN PROCESS - brainstorm
            </h3>
            <h1 className="md:text-4xl text-2xl font-medium my-3">
              How might we meet the needs of the individuals differently?
            </h1>
            <ul className="md:text-2xl text-xl space-y-5">
              Whether it is the people who donate their leftover or the people
              who take the donations, we have taken the following questions as
              part of our consideration:
              <li className="text-xl pt-5">
                Q. Will the app handle no-shows, save my time and energy in
                general, and be able to manage messages for communication?
              </li>
              <li className="text-xl">
                Q. will the app provide accurate information about the location
                and the quality of the products?
              </li>
              <li className="text-xl">
                Q. Will it be safe to meet the strangers?
              </li>
            </ul>
            <p className="md:text-2xl text-xl my-3">
              As for the solution, we thought of using the features of Google
              Maps
            </p>
            <p className="md:text-2xl text-xl">
              In addition, we were thinking about using various SNS network in
              order to raise the awareness of the app, and at last but not
              least...
            </p>
            <p className="md:text-2xl text-xl my-5">
              How might we measure success once it launches?
            </p>
            <ul className="list-disc text-xl mx-5">
              <li>
                We could track the number of downloads from Google Play or Apple
                Store
              </li>
              <li>
                We could track the screen time among individuals and the most
                popular page on the app
              </li>
              <li>Lastly, we can check the reviews</li>
            </ul>
          </div>
          <div>
            <h3 className="md:text-2xl text-2xl mt-10 mb-5">
              DESIGN PROCESS - iterating ideas
            </h3>
            <h4 className="text-xl">1. The CX Flow - 3 userflows</h4>
            <p className="md:text-2xl text-xl font-medium my-3">
              We imagined how each user should be able to navigate themselves
              through different pages:
            </p>
            <div className="space-y-5">
              <img
                src={distroImages.Login}
                alt="Login & Sign up"
                className="rounded-xl mt-3"
              />
              <img
                src={distroImages.ItemList}
                alt="Item Listing"
                className="rounded-xl"
              />
              <img
                src={distroImages.ItemSearch}
                alt="Item Search"
                className="rounded-xl"
              />
            </div>
          </div>
          <div>
            <p className="md:text-2xl text-xl my-5">
              We also drew the site map to indicate how the sharing journey
              begins. Whether they are the donor or taker, they both need to
              sign up in order to use the app and need to use messenger feature
              to communicate each other. In terms of the donors specifically,
              they would be able to register their products and indicate
              availability in letting the takers to notice and take the
              products. In the meantime, the takers should be able to find the
              items that they are interested in taking the leftover using the
              filter.
            </p>
            <h4 className="text-xl my-3 text-center">The Site Map</h4>
            <img
              src={distroImages.Sitemap}
              alt="Sitemap"
              className="rounded-xl w-full"
            />
          </div>
          <div>
            <h4 className="md:text-2xl text-xl mt-10">2. Sketches</h4>
            <p className="text-center text-lg my-3 hidden md:block">
              Low-Fidelity - Search (left) & Profile (right)
            </p>
            <p className="text-center text-lg mt-3 block md:hidden">
              Low-Fidelity
            </p>
            <p className="text-center text-lg mb-3 block md:hidden">Search</p>
            <div className="md:flex md:space-x-10 md:w-3/6 space-y-5 md:space-y-0 md:pr-5">
              <img
                src={distroImages.SearchLowFi}
                alt="Search Low-Fi"
                className="rounded-xl"
              />
              <p className="text-center text-lg my-3 block md:hidden">
                Profile
              </p>
              <img
                src={distroImages.ProfileLowfi}
                alt="Profile Low-Fi"
                className="rounded-xl"
              />
            </div>
          </div>
          <button
            className="text-blue-500 my-5 md:my-3 text-lg"
            onClick={() => handleToggle("design-process")}
          >
            More examples
          </button>
          {visibleSections["design-process"] && (
            <div
              ref={(el) => (contentRef.current["design-process"] = el)}
              className={`content transition-max-height duration-500 ease-in-out overflow-hidden`}
              style={{
                maxHeight: visibleSections["design-process"]
                  ? `${contentRef.current["design-process"]?.scrollHeight}px`
                  : "0",
              }}
            >
              <p className="text-center text-lg">Product Detail & Calendar</p>
              <img
                src={distroImages.DisplayList}
                alt="Display List"
                className="rounded-xl my-3"
              />
              <p className="text-center text-lg">Request</p>
              <img
                src={distroImages.Request}
                alt="Request"
                className="rounded-xl my-3"
              />
            </div>
          )}
          <div>
            <div className="md:flex items-center my-3 md:space-x-2 md:justify-center">
              <p className="text-center text-lg mt-3 md:mt-0">Mid-Fidelity</p>
              <p className="text-center text-lg mb-3 md:mb-0 hidden md:block">
                (my version vs. team&#39;s pick)
              </p>
            </div>
            <div className="md:flex md:space-x-10 md:w-3/6 space-y-5 md:space-y-0 md:pr-5">
              <p className="text-center text-lg mb-3 md:mb-0 block md:hidden">
                my version
              </p>
              <img
                src={distroImages.SearchMidFi}
                alt="Search Mid-Fi"
                className="rounded-xl"
              />
              <p className="text-center text-lg mb-3 md:mb-0 block md:hidden">
                Team&#39;s pick
              </p>
              <img
                src={distroImages.SearchTeamPick}
                alt="Team's pick"
                className="rounded-xl"
              />
            </div>
          </div>
          <button
            className="text-blue-500 my-5 md:my-3 text-lg"
            onClick={() => handleToggle("mid-fidelity")}
          >
            More examples
          </button>
          {visibleSections["mid-fidelity"] && (
            <div
              ref={(el) => (contentRef.current["mid-fidelity"] = el)}
              className={`content transition-max-height duration-500 ease-in-out overflow-hidden`}
              style={{
                maxHeight: visibleSections["mid-fidelity"]
                  ? `${contentRef.current["mid-fidelity"]?.scrollHeight}px`
                  : "0",
              }}
            >
              <div className="flex grid-cols-3 gap-10">
                <div>
                  <p className="text-center text-lg">Order detail</p>
                  <img
                    src={distroImages.OrderDetail}
                    alt="Order detail"
                    className="rounded-xl my-3"
                  />
                </div>
                <div>
                  <p className="text-center text-lg">Map search</p>
                  <img
                    src={distroImages.MapSearch}
                    alt="Map search"
                    className="rounded-xl my-3"
                  />
                </div>
                <div>
                  <p className="text-center text-lg">Messaging</p>
                  <img
                    src={distroImages.MapSearch}
                    alt="Messaging"
                    className="rounded-xl my-3"
                  />
                </div>
              </div>
            </div>
          )}
          <div>
            <h4 className="text-xl">3. Design System</h4>
            <p className="text-lg my-3">
              The following design system is what we have implemented during our
              mid-fi:
            </p>
            <div className="space-y-5">
              <img
                src={distroImages.CSSInfo}
                alt="CSS"
                className="w-full rounded-xl"
              />
              <div className="md:flex md:space-x-3 md:w-3/6 space-y-5 md:space-y-0 md:pr-2">
                <img
                  src={distroImages.CornerRadius}
                  alt="Corner Roundedness"
                  className="rounded-xl"
                />
                <img
                  src={distroImages.Margins}
                  alt="Margins"
                  className="rounded-xl mr-5"
                />
              </div>
              <img
                src={distroImages.Practice}
                alt="Practice"
                className="w-full rounded-xl"
              />
            </div>
          </div>
          <div>
            <p className="text-center text-lg my-3">High-Fidelity</p>
            <div className="md:flex md:grid-cols-3 md:space-x-5 md:w-3/6 space-y-5 md:space-y-0 md:pr-5">
              <img
                src={distroImages.MapSearchHighFi}
                alt="Search Map Search"
                className="rounded-xl md:w-4/6"
              />
              <img
                src={distroImages.OrderConfirmationHighFi}
                alt="Order confirmation"
                className="rounded-xl md:w-4/6"
              />
              <img
                src={distroImages.ProductDetailHighFi}
                alt="Product detail"
                className="rounded-xl md:w-4/6 w-full"
              />
            </div>
          </div>
          {/* =========================== USABILITY TESTING =================== */}
          <div className="my-10">
            <h3 id="usability-testing" className="md:text-2xl text-lg my-5">
              USABILITY TESTING
            </h3>
            <h1 className="md:text-4xl text-xl font-bold md:font-medium my-3">
              Two types of usability testing with 39 participants
            </h1>
            <p className="my-5 md:text-2xl text-xl">
              We had 6 participants for live-interviews (moderated) tests and 33
              participants for asynchronous tests which we conducted via Maze.
            </p>
            <div>
              <p className="text-center my-3 text-lg">
                Moderated Testing Examples (Zoom)
              </p>
              <div className="space-y-5 md:w-2/6 md:grid-cols-3 md:flex md:gap-5 md:pr-5">
                <img
                  src={distroImages.ModeratedTest1}
                  alt="Participant 1"
                  className="rounded-xl"
                />
                <img
                  src={distroImages.ModeratedTest2}
                  alt="Participant 2"
                  className="rounded-xl"
                />
                <img
                  src={distroImages.ModeratedTest3}
                  alt="Participant 3"
                  className="rounded-xl"
                />
              </div>
            </div>
            <div>
              <p className="text-center my-3 text-lg">
                Unmoderated Testing Examples (Maze) - Food Donators
              </p>
              <div className="space-y-5 md:w-2/6 md:grid-cols-3 md:flex md:gap-5 md:pr-5">
                <img
                  src={distroImages.MazeTest1}
                  alt="Food Donator Participant 1"
                  className="rounded-xl"
                />
                <img
                  src={distroImages.MazeTest2}
                  alt="Food Donator Participant 2"
                  className="rounded-xl"
                />
                <img
                  src={distroImages.MazeTest3}
                  alt="Food Donator Participant 3"
                  className="rounded-xl"
                />
              </div>
              <p className="text-center my-3 text-lg">
                Unmoderated Testing Examples (Maze) - Food Takers
              </p>
              <div className="space-y-5 md:w-2/6 md:grid-cols-3 md:flex md:gap-5 mt-3 md:pr-5">
                <img
                  src={distroImages.MazeTest4}
                  alt="Food Taker Participant 1"
                  className="rounded-xl"
                />
                <img
                  src={distroImages.MazeTest5}
                  alt="Food Taker Participant 2"
                  className="rounded-xl"
                />
                <img
                  src={distroImages.MazeTest6}
                  alt="Food Taker Participant 3"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
          {/* =========================== LESSONS LEARNED =================== */}
          <div className="my-10">
            <h3 id="lessons-learned" className="text-2xl">
              LESSONS LEARNED
            </h3>
            <h1 className="md:text-4xl text-2xl font-medium my-3">
              Touching again on things that we have anticipated and things we
              did not see coming.
            </h1>
            <p className="my-5 md:text-2xl text-xl">
              What have we succeeded in?
            </p>
            <ul className="list-disc px-10 space-y-5 text-green-500 text-xl">
              <li>
                Sign-up: it&#39;s straight-forward; the length of Terms and
                Conditions do not seem burdensome to users
              </li>
              <li>
                Search: when users wish to look up an item or location, they
                know that browsing is easily accessible
              </li>
              <li>
                Chat feature: this also seems to be straight-forward to the
                users; they know what to do
              </li>
              <li>
                Rating & Report: this seems to help in validating and finding
                reliable sources
              </li>
            </ul>
            <p className="my-5 md:text-2xl text-xl">What were the struggles?</p>
            <ul className="list-disc px-10 space-y-5 text-red-500 text-xl">
              <li>
                UX terminology: &#34;reservation&#34; and &#34;listing&#34; were
                not clearly communicating with the users. (i.e. reservation for
                who? the people who donate or the people who wish to take the
                food?)
              </li>
              <li>
                Reviews: we learned that users rely heavy on the reviews because
                they want to find reliable sources
              </li>
              <li>
                Response Delay: the application is interactive with users, but
                the interaction is slow. The app needs to have live update.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
