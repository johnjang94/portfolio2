import { useEffect, useState } from "react";
import { tugoImages } from "../../utils/designImages";
import { TuGoProjectNav } from "../../components/secondNav";
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
      <TuGoProjectNav />
      <header>
        <h3 className="mt-14 mb-4 md:w-7/12 md:text-center md:mx-5 mx-9 text-lg md:text-2xl">
          UX/UI Design
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
              It is quite essential that you need an insurance while exploring a
              new place. Insurances are usually meant to give you some level of
              relief and they should be reachable. The current website might
              have good intentions, but travelers might question if this
              insurance is really standing close to them.
            </p>
          </div>
          {/* ================ PROBLEM STATEMENT =================== */}
          <div>
            <h3 id={2} className="text-2xl my-5">
              PROBLEM STATEMENT
            </h3>
            <p className="md:text-2xl text-xl mb-10">
              Some travelers who went abroad might have faced some issues such
              as delayed flights, loss of luggage or health-related issues might
              have seeked for help from TuGo Travel Insurance, but they get
              frustrated once they reach TuGo website because the website
              provides an overwhelming amount of information and the travelers
              often feel lost on where to find the information that interests
              them.
            </p>
          </div>
          {/* ================ RESEARCH =================== */}
          <div>
            <h3 id={3} className="text-2xl my-5">
              RESEARCH
            </h3>
            <h1 className="md:text-4xl text-2xl font-medium my-3">
              To discover TuGo Travel&#39;s{" "}
              <span className="italics text-red-500">weak points</span>
            </h1>
            <p className="md:text-2xl text-xl">
              SWOT analysis was completed regarding TuGo Travel Insurance
              company&#39;s main website to understand its business structure
              and to identify possible risks. After SWOT, competitive analysis
              on other well-known brands was completed to identify services and
              benchmark the websites if applicable. In addition, we had voices
              regarding the experience with TuGo Travel Insurance.
            </p>
            <div className="text-center mx-auto space-y-5">
              <p className="mt-10">SWOT Analysis</p>
              <img
                src={tugoImages.SWOT}
                alt="SWOT Analysis"
                className="rounded-2xl"
              />
              <p className="mt-10">Competitive Analysis</p>
              <img
                src={tugoImages.CompetitiveAnalysis}
                alt="Competitive Analysis"
                className="rounded-2xl"
              />
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
            <p className="my-5 md:text-2xl text-xl text-blue-500">
              According to the research, TuGo Travel Insurance is usually quick
              to respond to the customer inquiries and specifically focuses on
              travel-related products. Users were optimistic regarding the
              visuals as the visuals were helpful in navigating around the
              website.
            </p>
            <p className="md:text-2xl text-xl text-red-500 mb-10">
              Besides, the potential risk that they carry is that they have
              almost zero control on the circumstances of another country
              regardless of the political, economic or safety concerns. Having
              said that, they need to alter the coverages depending on the
              regions. In addition, the users felt that they needed more
              guidance on whichever product to choose that would meet their
              needs.
            </p>
          </div>
          {/* ================ ITERATION =================== */}
          <div>
            <h3 id={4} className="text-2xl my-5">
              ITERATION - Design Process
            </h3>
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
            <h3 id={5} className="text-2xl mt-10 mb-5">
              DESIGN CHANGES
            </h3>
            <p className="text-center my-5">
              Here are sample images for you to compare how the changes were
              made from the old design.
            </p>
            <p className="text-center my-5">Old Design</p>
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
              NEXT STEPS
            </h3>
            <ul className="md:text-2xl text-xl list-disc">
              We only had time to focus on re-designing the screens for the
              desktop use, so the next phase team needs to work on designing the
              mobile screens.
              <li>
                the use of smartphones are increasingly prevalent among the
                users, but we have been focusing refreshing the look on the
                desktop.
              </li>
              <li>
                the website needs to consider AODA-standards. We have many
                people with disabilities in the society, but we have not had a
                chance to respect the Accessibility for Ontarioans and
                Disabilities Act.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
