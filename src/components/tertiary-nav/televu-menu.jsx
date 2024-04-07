import { useState } from "react";

export default function TelevuMenu() {
  const [selectedSection, setSelectedSection] = useState("background");

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSelectedSection(id); // Set the selected section
    }
  };

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    handleScroll(selectedOption);
  };
  return (
    <div className="sticky top-10 z-10">
      <div className="mx-10 mt-28 space-y-5 p-2 border-l-4 border-l-zinc-200 hidden md:block">
        <div
          className={`rounded-xl p-2 ${
            selectedSection === "background" ? "bg-gray-300" : ""
          }`}
        >
          <button onClick={() => handleScroll("background")}>Background</button>
        </div>
        <div
          className={` rounded-xl p-2 ${
            selectedSection === "research" ? "bg-gray-300" : ""
          }`}
        >
          <button onClick={() => handleScroll("research")}>Research</button>
        </div>
        <div
          className={` rounded-xl p-2 ${
            selectedSection === "iteration" ? "bg-gray-300" : ""
          }`}
        >
          <button onClick={() => handleScroll("iteration")}>Iteration</button>
        </div>
        <div
          className={` rounded-xl p-2 ${
            selectedSection === "competitive-analysis" ? "bg-gray-300" : ""
          }`}
        >
          <button onClick={() => handleScroll("competitive-analysis")}>
            Competitive Analysis
          </button>
        </div>
        <div
          className={` rounded-xl p-2 ${
            selectedSection === "design-process" ? "bg-gray-300" : ""
          }`}
        >
          <button onClick={() => handleScroll("design-process")}>
            Design Process
          </button>
        </div>
        <div
          className={` rounded-xl p-2 ${
            selectedSection === "usability-testing" ? "bg-gray-300" : ""
          }`}
        >
          <button onClick={() => handleScroll("usability-testing")}>
            Usability Testing
          </button>
        </div>
        <div
          className={` rounded-xl p-2 ${
            selectedSection === "design-changes" ? "bg-gray-300" : ""
          }`}
        >
          <button onClick={() => handleScroll("design-changes")}>
            Design Changes
          </button>
        </div>
        <div
          className={` rounded-xl p-2 ${
            selectedSection === "lessons-learned" ? "bg-gray-300" : ""
          }`}
        >
          <button onClick={() => handleScroll("lessons-learned")}>
            Lessons Learned from the Project
          </button>
        </div>
      </div>
      <div className="block md:hidden mx-5 mt-28 mb-5 w-full">
        <select
          name="menu"
          id="menu"
          className="p-2 rounded-xl"
          onChange={handleSelectChange}
          value={selectedSection}
        >
          <option value="background">Background</option>
          <option value="research">Research</option>
          <option value="iteration">Iteration</option>
          <option value="competitive analysis">Competitive Analysis</option>
          <option value="design process">Design Process</option>
          <option value="design systems">Design Systems</option>
          <option value="usability testing">Usability Testing</option>
          <option value="design changes">Design Changes</option>
          <option value="Lessons Learned">Lessons Learned</option>
        </select>
      </div>
    </div>
  );
}
