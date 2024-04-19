import { useState } from "react";
import Ruminate from "./ruminate";
import TechFleet from "./tech_fleet";
import Televu from "./televu";

export default function Work() {
  const [selectedComponent, setSelectedComponent] = useState("Ruminate");

  const handleClick = (component) => {
    setSelectedComponent(component);
  };
  return (
    <div className="my-64">
      <header className="md:flex justify-between items-center">
        <h1 className="md:text-4xl text-2xl text-center md:text-start mb-3">
          PLACES I WORKED AT
        </h1>
        <div className="bg-slate-400 md:w-3/6 w-full h-1"></div>
      </header>
      <section className="flex flex-col md:flex-row">
        {/* First div */}
        <div className="border-r border-gray-500 md:w-2/12 py-9 lg:ml-10 ml-5 space-y-8 mt-5 md:block hidden">
          <button
            className={`text-xl ${
              selectedComponent === "Ruminate"
                ? "border-b pb-2 border-black"
                : ""
            }`}
            onClick={() => handleClick("Ruminate")}
          >
            Ruminate
          </button>
          <br />
          <button
            className={`text-xl ${
              selectedComponent === "TechFleet"
                ? "border-b pb-2 border-black"
                : ""
            }`}
            onClick={() => handleClick("TechFleet")}
          >
            Tech Fleet
          </button>
          <br />
          <button
            className={`text-xl ${
              selectedComponent === "Televu" ? "border-b pb-2 border-black" : ""
            }`}
            onClick={() => handleClick("Televu")}
          >
            TeleVU Inc.
          </button>
        </div>
        {/* Second div */}
        <div className="md:hidden grid-cols-3 space-x-3 mx-auto mt-5">
          <button
            className={`text-xl ${
              selectedComponent === "Ruminate"
                ? "border-b pb-2 border-black"
                : ""
            }`}
            onClick={() => handleClick("Ruminate")}
          >
            Ruminate
          </button>
          <button
            className={`text-xl ${
              selectedComponent === "TechFleet"
                ? "border-b pb-2 border-black"
                : ""
            }`}
            onClick={() => handleClick("TechFleet")}
          >
            Tech Fleet
          </button>
          <button
            className={`text-xl ${
              selectedComponent === "Televu" ? "border-b pb-2 border-black" : ""
            }`}
            onClick={() => handleClick("Televu")}
          >
            TeleVU Inc.
          </button>
        </div>
        <div className="lg:w-4/6 w-full mx-5 md:my-12 my-5">
          {selectedComponent === "Ruminate" && <Ruminate />}
          {selectedComponent === "TechFleet" && <TechFleet />}
          {selectedComponent === "Televu" && <Televu />}
        </div>
      </section>
    </div>
  );
}
