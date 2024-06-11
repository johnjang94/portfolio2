import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const sections = [
  { id: "background", label: "Background" },
  { id: "research", label: "Research" },
  { id: "competitive-analysis", label: "Competitive Analysis" },
  { id: "design-process", label: "Design Process" },
  { id: "usability-testing", label: "Usability Testing" },
  { id: "design-changes", label: "Design Changes" },
  { id: "lessons-learned", label: "Lessons Learned from the Project" },
];

export default function TeleVUNav({ currentSection }) {
  const [selectedSection, setSelectedSection] = useState(currentSection);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSelectedSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let closestSection = sections[0].id;
      let closestDistance = Math.abs(
        document.getElementById(sections[0].id).offsetTop - scrollY
      );

      sections.forEach((section) => {
        const distance = Math.abs(
          document.getElementById(section.id).offsetTop - scrollY
        );
        if (distance < closestDistance) {
          closestSection = section.id;
          closestDistance = distance;
        }
      });

      setSelectedSection(closestSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setSelectedSection(currentSection);
  }, [currentSection]);

  return (
    <div className="sticky top-10 z-10">
      <div className="mx-10 mt-28 space-y-5 p-2 border-l-4 border-l-zinc-200 hidden md:block">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`rounded-xl p-2 ${
              selectedSection === section.id ? "bg-gray-300" : ""
            }`}
          >
            <button onClick={() => handleScroll(section.id)}>
              {section.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

TeleVUNav.propTypes = {
  currentSection: PropTypes.string.isRequired,
};
