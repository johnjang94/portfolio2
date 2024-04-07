import { useEffect } from "react";
import ToolsNav from "../../components/second-nav/about/tools-nav";

export default function Tools() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-fit">
      <ToolsNav />
      <div className="md:my-16 my-11 md:w-2/6 mx-auto">
        <h1 className="text-center mb-2 font-bold text-3xl">
          Development Tools
        </h1>
        <h3 className="text-center mb-5 text-3xl">Front-End Tools</h3>
        <p className="px-20 md:px-0">
          JavaScript, TypeScript, Next.js, React, JQuery, Axios, CSS, Tailwind
          CSS, Bootstrap, Web API, REST API
        </p>
        <h3 className="text-center my-5 text-3xl">Back-End Tools</h3>
        <p className="px-20 md:px-0">Node.js, Express, MongoDB, Mongoose</p>
        <h1 className="text-center my-5 font-bold text-3xl">Design Tools</h1>
        <p className="px-20 md:px-0">Figma, Figjam</p>
      </div>
    </div>
  );
}
