import { useEffect, useState } from "react";
import { TelevuNav } from "../../components/designSubNav";
import DesignNav from "../../components/designNav";
import { CgProfile } from "react-icons/cg";
import Footer from "../../components/footer";

// GENERAL OVERVIEW
import Video from "../../assets/televu/overview/video.png";
import ReportVU from "../../assets/televu/overview/reportvu.png";
import List from "../../assets/televu/overview/list.png";

// COMPETITIVE ANALYSIS
import Microsoft from "../../assets/televu/competitive-analysis/Microsoft-Teams-logo.png";
import GoogleMeet from "../../assets/televu/competitive-analysis/Google-Meet-logo.png";

// ITERATION
import Prompt1 from "../../assets/televu/iteration/prompt1.png";
import Prompt2 from "../../assets/televu/iteration/prompt2.png";
import Prompt3 from "../../assets/televu/iteration/prompt3.png";
import Prompt4 from "../../assets/televu/iteration/prompt4.png";
import Prompt5 from "../../assets/televu/iteration/prompt5.png";
import Prompt6 from "../../assets/televu/iteration/prompt6.png";

// DESIGN PROCESS
import LowFi1 from "../../assets/televu/design-process/Low-Fi1.png";
import LowFi2 from "../../assets/televu/design-process/Low-Fi2.png";
import LowFi3 from "../../assets/televu/design-process/Low-Fi3.png";

import HighFi1 from "../../assets/televu/design-process/High-Fi1.png";
import HighFi2 from "../../assets/televu/design-process/High-Fi2.png";
import HighFi3 from "../../assets/televu/design-process/High-Fi3.png";

import DesignSystem from "../../assets/televu/design-process/design-system.png";
import Demo from "../../assets/televu/design-process/televu_demo.mp4";

// DESIGN CHANGES
import OldDesign from "../../assets/televu/design-changes/old-design1.png";
import NewDesign from "../../assets/televu/design-changes/new-design1.png";

import OldDesign2 from "../../assets/televu/design-changes/old-design2.png";
import NewDesign2 from "../../assets/televu/design-changes/new-design2.png";

export default function Televu() {
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
      <TelevuNav />
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
          src={Video}
          alt="Video Conference screenshot"
          width={500}
          className=" md:left-1/4 mx-auto"
        />
        <img
          src={ReportVU}
          alt="ReportVU screen capture"
          width={500}
          className="my-5 mx-auto md:mx-0"
        />
        <img
          src={List}
          alt="List of Contact"
          width={500}
          className="my-5 md:relative md:left-1/4 mx-auto"
        />
      </section>
      <section className="md:flex md:flex-1">
        <div>
          <DesignNav currentSection={currentSection} />
        </div>
        <div className="md:my-28 mb-28 px-7 md:w-4/6">
          {/* ================ BACKGROUND =================== */}
          <div id="background">
            <h3 id="background" className="text-2xl">
              BACKGROUND
            </h3>
            <h1 className="text-4xl font-medium">
              Chaos in medical sector due to COVID-19 and how the boom in IT
              seeks to help --- but challenges
            </h1>
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
          <div id="research">
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
          <div className="bg-gray-200 p-3 rounded-xl text-2xl">
            <ul>Participants who have not received tutorial training:</ul>
            <div className="flex space-x-3 items-center my-3">
              <CgProfile className="md:text-5xl text-3xl shrink-0" />
              <p>“The navigation button names were not familiar.”</p>
            </div>
            <div className="flex space-x-3 items-center my-3">
              <CgProfile className="md:text-5xl text-3xl shrink-0" />
              <p>“Where can I find my recording after it&#39;s done?”</p>
            </div>
            <ul className="mt-10">
              Participants who have received tutorial training:
            </ul>
            <div className="flex space-x-3 items-center my-3">
              <CgProfile className="md:text-5xl text-3xl shrink-0" />
              <p>
                “If you are not a quick learner with technology, this could be
                challenging to use, I assume”
              </p>
            </div>
            <div className="flex space-x-3 items-center my-3">
              <CgProfile className="md:text-5xl text-3xl shrink-0" />
              <p>
                “It&#39;s a good tool, but I know that the newbies find it hard
                to use”
              </p>
            </div>
          </div>
          {/* ======================== RESEARCH INSIGHT =================== */}
          <div>
            <h3 className="text-2xl mt-10">RESEARCH INSIGHT</h3>
            <h1 className="text-4xl font-medium mb-5">
              Too much time wasted just to be familiar with the use
            </h1>
            <ul className="list-disc space-y-5 text-2xl">
              After in-depth conversation with the participants, we have
              discovered the following pain points:
              <li className="mx-5">
                the login is slow and it&#39;s two-step. two-step does not mean
                “two-step verification”
              </li>
              <li className="mx-5">
                the navigation menu is neither familiar nor conventional
              </li>
              <li className="mx-5">
                video-call windows have two different navigation menus, but it
                is unclear which menu is for the mobile-use or for the
                video-call window
              </li>
              <li className="mx-5">
                the video-call window does not acknowledge what happens after
                the recording, nor do the clinicians know where to find the
                videos after the recording is finished
              </li>
              <li className="mx-5">the recorded videos cannot be modified</li>
            </ul>
          </div>
          {/* ======================== ITERATION =================== */}
          <div id="iteration">
            <h3 className="text-2xl mt-10">ITERATION</h3>
            <h1 className="text-4xl font-medium mb-5">
              How might we help the clinicians to use the platform faster?
            </h1>
            <p className="text-2xl">
              My colleagues and I began asking a few prompt questions to gather
              ideas:
            </p>
            <p className="text-2xl">
              Q. How can we organize the menus in differently to clearly convey
              the message that one of the menus is for the remote control on the
              glass and the other menu is for the desktop use for the clinician?
            </p>
            <div className="md:flex md:justify-between my-5 space-y-5 md:space-y-0">
              <img
                src={Prompt1}
                alt="Prompt 1"
                width={350}
                className="mx-auto md:mx-0"
              />
              <img
                src={Prompt2}
                alt="Prompt 2"
                width={350}
                className="mx-auto md:mx-0"
              />
            </div>
            <p className="text-2xl mt-3">
              Q. How can we change the navigation menu for the dashboard to make
              it intuitive?
            </p>
            <div className="md:flex md:justify-between my-5 space-y-5 md:space-y-0">
              <img
                src={Prompt3}
                alt="Prompt 3"
                width={350}
                className="mx-auto md:mx-0"
              />
              <img
                src={Prompt4}
                alt="Prompt 4"
                width={350}
                className="mx-auto md:mx-0"
              />
            </div>
            <p className="text-2xl mt-3">
              Q. How should we change the login process to promote a quick
              access?
            </p>
            <div className="md:flex md:justify-between my-5 space-y-5 md:space-y-0">
              <img
                src={Prompt5}
                alt="Prompt 5"
                width={350}
                className="mx-auto md:mx-0"
              />
              <img
                src={Prompt6}
                alt="Prompt 6"
                width={350}
                className="mx-auto md:mx-0"
              />
            </div>
          </div>
          {/* ======================== COMPETITIVE ANALYSIS =================== */}
          <div id="competitive-analysis">
            <h3 className="text-2xl mt-10">COMPETITIVE ANALYSIS</h3>
            <h1 className="text-4xl font-medium mb-5">
              Well-established brands were well-interacting with users
            </h1>
            <p className="text-2xl">
              We compared other platforms that are renowned and well-established
              that many people use:
            </p>
            <div className="md:flex md:justify-between my-5 space-y-5 md:space-y-0">
              <img
                src={Microsoft}
                alt="Microsoft Office Teams"
                width={350}
                className="bg-white rounded-xl mx-auto md:mx-0"
              />
              <img
                src={GoogleMeet}
                alt="Google Meet logo"
                width={350}
                className="mx-auto md:mx-0"
              />
            </div>
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
          {/* ======================== DESIGN PROCESS =================== */}
          <div id="design-process">
            <h3 className="text-2xl mt-10">DESIGN PROCESS</h3>
            <h1 className="text-4xl font-medium mb-5">
              Redesigning the Login, the Dashboard, and the Video-call Window
            </h1>
            <p className="text-2xl">&#x276E; Low-Fi &#x276F;</p>
            <div className="md:flex md:justify-between my-5 space-y-5 md:space-y-0 md:gap-5">
              <img
                src={LowFi1}
                alt="Low-Fi 1"
                width={300}
                className="mx-auto md:mx-0"
              />
              <img
                src={LowFi2}
                alt="Low-Fi 2"
                width={300}
                className="mx-auto md:mx-0"
              />
              <img
                src={LowFi3}
                alt="Low-Fi 3"
                width={300}
                className="mx-auto md:mx-0"
              />
            </div>
            <p className="text-2xl">&#x276E; High-Fi &#x276F;</p>
            <span>
              Due to the time-constraint, we have jumped straight into the
              High-Fi
            </span>
            <div className="md:flex md:justify-between my-5 space-y-5 md:space-y-0 md:gap-5">
              <img
                src={HighFi1}
                alt="High-Fi 1"
                width={300}
                className="mx-auto md:mx-0"
              />
              <img
                src={HighFi2}
                alt="High-Fi 2"
                width={300}
                className="mx-auto md:mx-0"
              />
              <img
                src={HighFi3}
                alt="High-Fi 3"
                width={300}
                className="mx-auto md:mx-0"
              />
            </div>
            <p className="text-2xl text-center my-3">
              &#x276E; Final Demo &#x276F;
            </p>
            <video width="700" height="500" controls className="mx-auto">
              <source src={Demo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-2xl text-center my-3">
              &#x276E; Design Systems &#x276F;
            </p>
            <img
              src={DesignSystem}
              alt="Design System"
              width={800}
              className="mx-auto"
            />
          </div>
          {/* =========================== USABILITY TESTING =================== */}
          <div className="my-10" id="usability-testing">
            <h3 className="text-2xl">USABILITY TESTING</h3>
            <h1 className="text-3xl md:text-4xl font-medium">
              A moderated Usability Testing with 8 participants
            </h1>
            <p className="my-2 text-2xl font-semibold">
              What have we succeeded in?
            </p>
            <ul className="list-disc px-10 space-y-5">
              <li>
                video-call: all users clearly understood how to use the controls
                and they understood where each type of control belongs to
              </li>
              <li>
                dashboard: 6 out of 8 users expressed that the new design on
                each page is intuitive
              </li>
            </ul>
            <p className="my-2 text-2xl font-semibold">
              What lessons have we learned?
            </p>
            <ul className="list-disc px-10 space-y-5">
              <li>
                UX terminology: some of the terminologies that we have used in
                the new design might still be confusing to the users.
              </li>
            </ul>
          </div>
          {/* =========================== DESIGN CHANGES =================== */}
          <div className="my-10" id="design-changes">
            <h3 className="text-2xl">DESIGN CHANGES</h3>
            <div className="md:justify-between md:items-center">
              <h4 className="text-2xl my-3 text-center md:hidden">Old</h4>
              <div className="hidden text-2xl my-3 md:block">
                <div className="flex justify-between px-40">
                  <h4>Old</h4>
                  <h4>New</h4>
                </div>
              </div>
              <div className="md:flex md:items-center md:justify-between space-y-5 md:space-y-0 md:mb-5">
                <img
                  src={OldDesign}
                  alt="Old call log"
                  className="mx-auto md:mx-0"
                />
                <img
                  src={NewDesign}
                  alt="New call log"
                  className="mx-auto md:mx-0"
                />
              </div>
            </div>
            <div>
              <h4 className="text-2xl my-3 text-center md:hidden">New</h4>
              <div className="md:flex md:items-center md:justify-between space-y-5 md:space-y-0">
                <img
                  src={OldDesign2}
                  alt="Old Video-call session"
                  className="mx-auto md:mx-0"
                />
                <img
                  src={NewDesign2}
                  alt="New Video-call session"
                  className="mx-auto md:mx-0"
                />
              </div>
            </div>
          </div>
          {/* =========================== LESSONS LEARNED =================== */}
          <div className="my-10" id="lessons-learned">
            <h3 className="text-2xl">LESSONS LEARNED</h3>
            <h1 className="text-4xl font-medium my-3">
              It is important to learn about the business structure.
            </h1>
            <p className="text-2xl">
              I only thought that designs that cannot be accommodated by
              technology are the bad designs. However, I&#39;ve had a chance to
              learn that it is another type of no-good design if the design
              cannot reflect the business structure.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
