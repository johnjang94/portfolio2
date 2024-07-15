import { useEffect, useState } from "react";
import { tugoImages } from "../../utils/designImages";
import { ProjectNav } from "../../components/secondNav";
import ContentNav from "../../components/contentNav";
import Footer from "../../components/footer";

export default function Tugo() {
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
      { id: 7 },
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
        <h3 className="mt-14 mb-4 md:w-8/12 md:text-center md:mx-24 mx-9 text-lg md:text-2xl">
          UX/UI Design for a Web Application
        </h3>
        <h1 className="mt-9 md:w-8/12 md:text-center mx-9 md:mx-52 my-10 md:text-5xl text-lg">
          TUGO TRAVEL INSURANCE
        </h1>
      </header>
      <section className="bg-slate-500 p-5 rounded-xl w-5/6 mx-auto">
        <img
          src={tugoImages.Showcase}
          alt="Demo showcase"
          className="rounded-xl mx-auto"
        />
      </section>
      <section className="md:flex md:flex-1">
        <div>
          <ContentNav
            currentSection={currentSection}
            isDemoApplicable={false}
            pathname="/tugo"
          />
        </div>
        <div className="md:my-28 px-7 md:w-4/6">
          {/* ================ BACKGROUND =================== */}
          <div>
            <h3 id={1} className="text-2xl my-5">
              BACKGROUND
            </h3>
            <h1 className="md:text-4xl text-2xl font-medium my-3">
              Relief & Comfort vs. Liability
            </h1>
            <p className="md:text-2xl text-xl mb-10">
              TuGo Travel Insurance is one of the insurance companies that
              offers a wide range of financial coverages on different
              circumstances. On the other hand, the company is facing low
              recognition among potential travelers.
            </p>
          </div>
          {/* ================ PROBLEM STATEMENT =================== */}
          <div>
            <h3 id={2} className="text-2xl my-5">
              AT ISSUE
            </h3>
            <p className="md:text-2xl text-xl mb-3">
              TuGo Travel Insurance is{" "}
              <span className="text-red-500">struggling to raise</span> the rate
              of sign-ups.
            </p>
            <div className="bg-slate-300 p-5 rounded-xl">
              <p className="md:text-2xl text-xl">
                How can we help the current and the potential travelers to be
                well-informed of TuGo Travel Insurance services and remain as
                loyal customers to TuGo Travel Insurance?
              </p>
            </div>
          </div>
          <section>
            <div>
              <h3 className="text-2xl my-5">My Role</h3>
              <p className="md:text-2xl text-xl">
                While collaborating with UX Researchers, I was focused on
                developing new UIs. Keeping the original product design
                concepts, I have led a few stand up sessions with the
                stakeholders and have joined iteration session with the
                researchers.
              </p>
            </div>
            <div>
              <h3 className="text-2xl my-5">Tools I used</h3>
              <div className="md:flex md:items-center gap-20 md:justify-center">
                <div className="text-center">
                  <span>Figma</span>
                  <img
                    src={tugoImages.Figma}
                    alt="Figma logo"
                    width={200}
                    className="rounded-xl mx-auto"
                  />
                </div>
                <div className="text-center">
                  <span>Figjam</span>
                  <img
                    src={tugoImages.Figjam}
                    alt="Figjam logo"
                    width={200}
                    className="rounded-xl mx-auto"
                  />
                </div>
              </div>
            </div>
          </section>
          <div>
            <h3 id={3} className="text-2xl mt-10 mb-5">
              DESIGN PROCESS
            </h3>
            {/* ================ RESEARCH =================== */}
            <h1 className="md:text-4xl text-2xl font-medium my-3">
              To discover TuGo Travel&#39;s{" "}
              <span className="italics text-red-500">weak points</span>
            </h1>
            <p className="md:text-2xl text-xl">
              SWOT analysis was completed to identify{" "}
              <span className="text-blue-400">the strengths</span> and{" "}
              <span className="text-red-400">the weaknesses</span> to find out
              the opportunity where the improvement can take its place.
            </p>
            <div className="mx-auto my-5 space-y-5">
              <img
                src={tugoImages.SWOT}
                alt="SWOT Analysis"
                className="rounded-2xl mx-auto"
              />
            </div>
            <div>
              <p className="md:text-2xl text-xl">
                For this phase, the team has decided to come up with a different
                UI to keep things simple and easy-to-follow.
              </p>
              <div>
                <p className="text-2xl mt-10 mb-5">Competitive Analysis</p>
                <p className="md:text-2xl text-xl">
                  For competitive analysis, we examined 2 leading insurance
                  companies to understand how their web platforms are
                  communicating with the current and the potential clients.
                </p>
                <ul className="md:text-2xl text-xl my-5 space-y-5 list-disc mx-5">
                  <p className="md:text-2xl text-xl my-2">This involved:</p>
                  <li>
                    studying the structure of their UI using the grid system.
                  </li>
                  <li>
                    identifying industry standards and conventions to guide the
                    new design.
                  </li>
                  <li>the use of proper terminologies.</li>
                </ul>
              </div>
              <div className="md:flex md:gap-20 md:mr-10">
                <img
                  src={tugoImages.Manulife}
                  alt="Manulife Logo"
                  className="md:w-3/6 md:mx-auto"
                />
                <img
                  src={tugoImages.SunLife}
                  alt="SunLife logo"
                  className="md:w-3/6 md:mx-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl my-5">Customer Journey Map</h3>
                <p className="md:text-2xl text-xl">
                  This helps us to understand how a potential client comes to
                  acknowledge the company, explores around the see how they
                  might cover the travel risks, and decide whether they would
                  continue the contract with the company.
                </p>
              </div>
              <img
                src={tugoImages.CustomerJourneyMap}
                alt="Customer Journey Map"
                className="rounded-2xl mt-10"
              />
              <div className="space-y-5">
                <h3 className="text-2xl mt-10 mb-5">Personas</h3>
                <p className="md:text-2xl text-xl mb-5">
                  Creating well-defined user personas is essential for designing
                  the better experience and to meet the needs for target
                  audience.
                </p>
                <img
                  src={tugoImages.Chris}
                  alt="User Persona: Chris"
                  className="rounded-2xl"
                />
                <img
                  src={tugoImages.Olivier}
                  alt="User Persona: Olivier"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
          {/* ================ ITERATION =================== */}
          <div>
            <h3 id={5} className="text-2xl mt-20">
              DESIGN CHANGES
            </h3>
            <h4 id="" className="text-xl my-5 text-center mt-5">
              ITERATION
            </h4>
            <p className="md:text-2xl text-xl">
              Hearing the voices, the brainstorm was focused on how to provide
              designs that are simple, aesthetic, catchy, and engaging. Though,
              first, we wanted to provide a simple navigation.
            </p>
            <img
              src={tugoImages.SiteMap}
              alt="Site Map"
              width={1000}
              className="rounded-2xl my-5"
            />
            <div>
              <p className="md:text-2xl text-xl mt-10">
                I began with rough sketches, contemplating on what might be
                simple and catchy navigation for the users. Then I gradually
                added more detail to the design.
              </p>
              <p className="text-center mt-10 mb-5">Low-Fidelity</p>
              <div className="md:flex md:gap-10 md:grid-cols-3 md:w-72 md:pr-3 space-y-5 md:space-y-0">
                <img
                  src={tugoImages.AboutUsLowFi}
                  alt="About Us Low-Fi"
                  className="rounded-2xl"
                />
                <img
                  src={tugoImages.InsuranceIntroLowFi}
                  alt="Insurance Introduction Low-Fi"
                  className="rounded-2xl"
                />
                <img
                  src={tugoImages.SignUpLowFi}
                  alt="Sign Up Low-Fi"
                  className="rounded-2xl"
                />
              </div>
              <p className="text-center mt-10 mb-5">Mid-Fidelity</p>
              <div className="md:flex md:gap-10 md:grid-cols-3 md:w-72 md:pr-3 space-y-5 md:space-y-0">
                <img
                  src={tugoImages.ContactMidFi}
                  alt="Contact Mid-Fi"
                  className="rounded-2xl"
                />
                <img
                  src={tugoImages.InsuranceMidFi}
                  alt="Insurance Mid-Fi"
                  className="rounded-2xl"
                />
                <img
                  src={tugoImages.LoginMidFi}
                  alt="Login Mid-fi"
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl mt-10 mb-5">
              <p className="text-center">Sample Design Guide</p>
              <img
                src={tugoImages.DesignGuide}
                alt="Design Guide"
                className="rounded-2xl"
              />
            </div>
          </div>
          {/* ================ DESIGN CHANGES =================== */}
          <div>
            <p className="text-center my-5">New Design Concept</p>
            <div className="md:flex md:gap-10 md:grid-cols-3 md:w-72 md:pr-3 space-y-5 md:space-y-0">
              <img
                src={tugoImages.NewInsurancePage}
                alt="New insurance page"
                className="rounded-2xl"
              />
              <img
                src={tugoImages.NewContactPage}
                alt="New Contact Concept page"
                className="rounded-2xl"
              />
              <img
                src={tugoImages.NewSignUpPage}
                alt="New Sign Up page"
                className="rounded-2xl"
              />
            </div>
          </div>
          {/* =========================== NEXT STEPS =================== */}
          <div>
            <h3 id={6} className="text-2xl mt-10 mb-5">
              Key Changes
            </h3>
            <li className="md:text-2xl text-xl mt-5">
              Enhancements on the navigation, the home page, and each menu page
              were made.
            </li>
          </div>
          {/* =========================== SHORTCOMING =================== */}
          <div>
            <h3 id={7} className="text-2xl mt-10 mb-5">
              What Could Have Been Better
            </h3>
            <ul className="md:text-2xl text-xl mt-5 space-y-5">
              <li>
                We could have taken more time to conduct usability testing on
                the design.
              </li>
              <li>
                We could have seeked out more help in different online
                communities.
              </li>
            </ul>
          </div>
          {/* =========================== NEXT STEPS =================== */}
          <div>
            <h3 id={8} className="text-2xl mt-10 mb-5">
              Lessons Learned
            </h3>
            <ul className="md:text-2xl text-xl mt-5 space-y-5">
              <li>
                Understand there can be conflicts between what the users want
                and the stakeholders prefer.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
