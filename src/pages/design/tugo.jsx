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
        <h3 className="mt-14 mb-4 md:w-8/12 md:text-center md:mx-12 mx-9 text-lg md:text-2xl">
          UX/UI Design | Web Design
        </h3>
        <h1 className="mt-9 md:w-8/12 md:text-center mx-9 md:mx-52 md:text-5xl text-lg">
          TUGO TRAVEL INSURANCE
        </h1>
        <p className="mt-4 md:w-3/6 md:mx-auto mx-10 md:text-2xl text-xl">
          The assurance that you have a back-up wherever you go and whenever you
          need came back with a fresh look.
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
              An insurance is quite an essential protection when you decide to
              visit a new place. Insurances are usually meant to give you some
              level of relief and they should be reachable. TuGo Travel
              Insurance is one of the insurance companies that offer the
              protection on unexpected circumstances. They meant to stand with
              you shoulder-to-shoulder when you need help, and they explain how
              they are going to help on their website. On the other hand,
              despite all the good intentions that TuGo has, some questions are
              arising that if this insurance is really standing close to the
              travelers.
            </p>
          </div>
          {/* ================ PROBLEM STATEMENT =================== */}
          <div>
            <h3 id={2} className="text-2xl my-5">
              PROBLEM STATEMENT
            </h3>
            <p className="md:text-2xl text-xl mb-10">
              Some travelers who might have faced some issues such as delayed
              flights, loss of luggage or health-related issues while traveling
              abroad{" "}
              <span className="text-orange-300">
                might have seeked for some help
              </span>{" "}
              from TuGo Travel Insurance, but they rather{" "}
              <span className="text-red-500">feel disappointed</span> because{" "}
              <span className="text-red-500 italic">
                the insurance they have signed up for might have limited
                coverage in which the travelers were not aware of the exact
                measures.
              </span>{" "}
              Due to the lack of awareness, they are covering the expenses out
              of their own pockets. They express that TuGo Travel Insurance
              needs to provide more concrete, specific, and clear guidelines on
              how far and wide the coverage gets.
            </p>
          </div>
          {/* ================ ABSTRACT =================== */}
          <div>
            <h3 id={3} className="text-2xl my-5">
              ABSTRACT
            </h3>
            <p className="md:text-2xl text-xl mb-10">
              We analyzed the company&#39;s business structure and services to
              find out at what point the current and the potential travelers
              might be attracted to sign up at TuGo Travel Insurance. Using the
              analysis, we have compared what we know to the participants who
              have spared their evaluations on TuGo Travel Insurance products.
              In addition, we studied other insurance companies to learn how
              they are different (or what they are strong at) and to find out
              what TuGo could learn from these competitors.
            </p>
            <h3 className="text-2xl my-5">MISSION OBJECTIVE</h3>
            <p className="md:text-2xl text-xl mb-10">
              Providing a clear guideline to the current and the potential
              travelers was the foremost priority for TuGo Travel Isurance;
              therefore, the key objective was to clean up the UI that TuGo
              Travel Insurance has and let the simplicity speak to them
              directly.
            </p>
            <h3 className="text-2xl my-5">SUCCESS CRITERIA</h3>
            <ul className="text-2xl my-5 list-disc px-10 space-y-3">
              <li>
                Re-design the navigation menu (where appropriate) to meet the
                industry standard.
              </li>
              <li>
                Re-design the contact page to make sure the travelers understand
                what numbers they need to reach out depending on their
                inquiries.
              </li>
              <li>
                Re-design the user flow from the home page to the traveler
                portal, and from the traveler dashboard to filling out their
                inquiries to ensure smoother communication.
              </li>
            </ul>
          </div>
          <div>
            <h3 id={4} className="text-2xl mt-10 mb-5">
              DESIGN PROCESS
            </h3>
            {/* ================ RESEARCH =================== */}
            <h4 id="" className="text-xl my-5 text-center">
              Research
            </h4>
            <h1 className="md:text-4xl text-2xl font-medium my-3">
              To discover TuGo Travel&#39;s{" "}
              <span className="italics text-red-500">weak points</span>
            </h1>
            <p className="md:text-2xl text-xl">
              SWOT analysis was completed regarding TuGo Travel Insurance
              company&#39;s main website to understand its business structure
              and to identify possible risks.
            </p>
            <div className="text-center mx-auto space-y-5">
              <p className="mt-10">SWOT Analysis</p>
              <img
                src={tugoImages.SWOT}
                alt="SWOT Analysis"
                className="rounded-2xl"
              />
              <p className="md:text-2xl text-xl text-start">
                The response ratio of TuGo Travel Insurance service ranged from
                <span className="text-emerald-400"> a couple of hours</span> at
                the shortest period of time to{" "}
                <span className="text-emerald-400">a day</span> for the longest
                time of wait. The travelers who sign up for insurance through
                TuGo Travel service agency tend to be{" "}
                <span className="text-blue-500">pleased and satisfied</span>{" "}
                with the wait times. In addition, TuGo offers a wide range of
                coverage in different issues and this seemed to be attractive to
                many potential travelers.
              </p>
              <p className="md:text-2xl text-xl text-start">
                As no other insurance agency could control some of the external
                causes such as weather circumstances or geo-political issues,
                TuGo Travel Insurance also{" "}
                <span className=" text-fuchsia-600">
                  does not have any possible control
                </span>{" "}
                over the loss of luggages if any traveler faces such incident.
                For these specific cases, most of the travelers wish that{" "}
                <span className="text-fuchsia-600">
                  the coverage was more comprehensive
                </span>{" "}
                rather than sticking to just being affordable.
              </p>
              <p className="md:text-2xl text-xl text-start">
                After SWOT, competitive analysis on other well-known brands was
                completed to identify the complementary services and the
                competency that TuGo Travel Insurance carries. For this step, my
                team has compared TuGo to Manulife and SunLife Financial.
              </p>
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
              <p className="mt-10">Competitive Analysis</p>
              <img
                src={tugoImages.CompetitiveAnalysis}
                alt="Competitive Analysis"
                className="rounded-2xl"
              />
              <p className="md:text-2xl text-xl text-start">
                In this comparison, the main focus was not regarding how many
                packages they offer to the travelers or if they offer a package
                that genuinely accommodates the needs of individual client.
                Rather, the focus was aimed at examining if the visuals that
                each insurance company has employed communicates with the
                current or the potential travelers in a way that is intended.
              </p>
              <p className="md:text-2xl text-xl text-start">
                The study has revealed that the travelers are{" "}
                <span className="text-red-500">
                  technically more familiar with the competitors
                </span>{" "}
                because these brands have been maintaining a good reputation
                among the travelers for a long time. On the other hand, the
                level of awareness or familiarity of these brands{" "}
                <span className="text-blue-500">did not prove</span> that the
                clients were well-aware of the suitability of the products that
                meet their circumstances. It is also proven that the adequate
                amount of visuals actually tend to be{" "}
                <span className="underline">
                  more informative of the products
                </span>{" "}
                than simply outlining in words. The following user personas and
                user journey map samples are the voices that we have heard from
                them:
              </p>
              <p className="mt-10">User Personas</p>
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
              <p className="mt-10">Customer Journey Map</p>
              <img
                src={tugoImages.CustomerJourneyMap}
                alt="Customer Journey Map"
                className="rounded-2xl"
              />
            </div>
            <p className="my-5 md:text-2xl text-xl">
              The packages that TuGo Travel Insurance offers might not be
              exceptional to get a commentary such as &#34;too good to be
              true&#34;, but the opinions are clearly different that more
              visuals certainly help in communication. It is also expressed that
              the individuals do not just want to see the visuals but the
              visuals that help them get the service they need.
            </p>
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
              designs that are simple, aesthetic, catchy, and engaging.
            </p>
            <p className="text-center mt-10 mb-5">Brainstorm</p>
            <img
              src={tugoImages.Brainstorm}
              alt="Brainstorm"
              className="rounded-2xl"
            />
            <div>
              <p className="my-5 md:text-2xl text-xl">
                We focused on simplifying the designs. As an example, the
                previous version of contact page had too much content with the
                overlap of numbers, hours of operation, and office locations.
                Unfortunately, it was clear that the previous design was not
                informative to the travelers. Having said that, the idea was to
                display simple icons to the travelers first that they just
                understand what to expect if they clicked each button.
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
            <p className="my-5 md:text-2xl text-xl">
              Here are sample images for you to compare how the changes were
              made from the previous design.
            </p>
            <p className="text-center my-5">Previous Design</p>
            <div className="md:flex md:gap-10 md:grid-cols-3 md:w-72 md:pr-3 space-y-5 md:space-y-0">
              <img
                src={tugoImages.OldLoginPage}
                alt="Old Login page"
                className="rounded-2xl"
              />
              <img
                src={tugoImages.OldIntroduction}
                alt="Old Introduction page"
                className="rounded-2xl"
              />
              <img
                src={tugoImages.OldContact}
                alt="Old Contact page"
                className="rounded-2xl"
              />
            </div>
            <p className="text-center my-5">New Design</p>
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
              SHORTCOMING & NEXT STEPS
            </h3>
            <div className="space-y-5">
              <p className="md:text-2xl text-xl">
                It might be common for every design project, but the process of
                recruiting the participants for additional design test was{" "}
                <span className="text-red-500">especially challenging</span> to
                complete within given amount of time.
              </p>
              <ul className="md:text-2xl text-xl list-disc">
                We only had time to focus on re-designing the screens for the
                desktop use, so the next phase team needs to work on designing
                the mobile screens.
                <li className="mx-10 my-3">
                  the use of smartphones are increasingly prevalent among the
                  users, but we have been focusing refreshing the look on the
                  desktop.
                </li>
                <li className="mx-10">
                  the website needs to consider AODA-standards. We have many
                  people with disabilities in the society, but we have not had a
                  chance to respect the Accessibility for Ontarioans and
                  Disabilities Act.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
