import { useState } from "react";
import WorkHistory from "./work-history.json";

export default function Work() {
  const defaultJob = WorkHistory.find((job) => job.company === "Ruminate");
  const [selectedJobId, setSelectedJobId] = useState(defaultJob.id);

  const handleClick = (job) => {
    setSelectedJobId(job.id);
  };

  const getTextSize = (job) => {
    if (job.id === 2) {
      return "text-lg md:text-base";
    } else {
      return "text-xl";
    }
  };

  const renderJobButtons = () => {
    return WorkHistory.map((job) => (
      <button
        key={job.id}
        className={`${getTextSize(job)} ${
          selectedJobId === job.id ? "underline pb-2" : ""
        }`}
        onClick={() => handleClick(job)}
      >
        {job.company}
      </button>
    ));
  };

  const renderSelectedJobInfo = () => {
    const selectedJob = WorkHistory.find((job) => job.id === selectedJobId);
    if (!selectedJob) return null;

    return (
      <div>
        <h2 className="font-bold my-5 text-xl md:text-2xl">
          {selectedJob.position} @ {selectedJob.company}
        </h2>
        <p className="text-xl my-3">{selectedJob.dates}</p>
        <p>Mission Objective: {selectedJob.missionObjective}</p>
        <ul className="space-y-3 mt-3">
          {selectedJob.responsibilities.map((responsibility, index) => (
            <li key={index}>- {responsibility}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="my-8">
      <header className="md:flex justify-between items-center">
        <h1 className="md:text-4xl text-2xl text-center md:text-start mb-3">
          PLACES I WORKED AT
        </h1>
        <div className="bg-slate-400 md:w-3/6 w-full h-1"></div>
      </header>
      <section className="flex flex-col md:flex-row">
        <div className="border-r border-gray-500 md:w-4/12 space-y-8 my-6 md:block hidden">
          {renderJobButtons()}
        </div>
        <div className="md:hidden grid-cols-3 space-x-3 mx-auto border-b-2 border-gray-300">
          {renderJobButtons()}
        </div>
        <div className="md:w-4/6 pl-4">{renderSelectedJobInfo()}</div>
      </section>
    </div>
  );
}
