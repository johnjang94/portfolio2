import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaFolder } from "react-icons/fa";
import getImage from "../../utils/getImages";
import { Link } from "react-router-dom";
import projectsData from "./projects.json";
import PropTypes from "prop-types";
import Footer from "../../components/footer";

const cardContainerClass = "md:flex md:grid-cols-2 mx-auto md:w-4/6 my-20";
const cardImageClass =
  "md:block hidden md:w-3/6 mx-auto rounded-xl shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]";
const cardImageClassMobile =
  "block md:hidden mx-auto m-5 mt-0 rounded-xl shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]";
const cardTextClass = "p-5 md:w-4/6 z-10";
const iconContainerClass =
  "flex md:justify-start space-x-3 -mt-2 md:my-3 text-xl md:text-2xl";

const DevelopmentHome = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setProjects(projectsData);
  }, []);

  const renderProjectCard = (project, isOdd) => {
    const imageSrc = getImage(project.srcImage);

    return (
      <div className={cardContainerClass} key={project.id}>
        {!isOdd && (
          <img
            src={imageSrc}
            alt={project.projectTitle}
            className={cardImageClass}
          />
        )}
        <div className={cardTextClass}>
          {project.featured && (
            <h5 className="md:text-start text-center">{project.featured}</h5>
          )}
          <h1 className="md:text-start text-center md:text-3xl text-2xl md:my-5 my-1">
            {project.projectTitle}
          </h1>
          <img
            src={imageSrc}
            alt={project.projectTitle}
            className={cardImageClassMobile}
          />
          <p className="w-full mx-auto md:text-left md:mx-0">
            {project.projectSummary}
          </p>
          <div className="flex md:flex-col items-center md:items-start justify-between md:justify-normal">
            <div className="flex-wrap space-x-2 text-gray-400 md:my-5">
              {project.toolsUsed.map((tool, index) => (
                <span key={index} className="md:mr-2 mb-2 text-xs md:text-xl">
                  {tool}
                </span>
              ))}
            </div>
            <div className={iconContainerClass}>
              <a href={project.githubLink}>
                <FaGithub />
              </a>
              <a href={project.liveLink}>
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        {isOdd && (
          <img
            src={imageSrc}
            alt={project.projectTitle}
            className={cardImageClass}
          />
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-between px-10 my-3">
        <Link to="/development">
          <button>DEVELOPMENT</button>
        </Link>
      </div>
      <section className="bg-cover my-5 py-10">
        <h2 className="md:text-4xl text-2xl my-5 md:w-4/6 md:mx-auto text-center">
          Some things I have built
        </h2>
        {projects.map((project, index) =>
          renderProjectCard(project, index % 2 !== 0)
        )}
      </section>
      <section>
        <h1 className="text-3xl my-10 text-center">My Archives</h1>
        <div className="md:grid-cols-3 p-5 md:flex md:gap-5 md:mx-48 md:justify-between">
          <ArchiveCard
            title="Simplified YouTube"
            description="For learning purposes, this is a mini-version of YouTube with good quality of streaming."
            tools={["React", "JavaScript", "Tailwind CSS"]}
            githubLink="https://github.com/johnjang94/cloneYouTube"
            liveLink="https://youtube-myversion.netlify.app/"
          />
          <ArchiveCard
            title="Mini-Game"
            description="Let's have some fun: click the carrots only."
            tools={["JavaScript"]}
            githubLink="https://github.com/johnjang94/carrot"
            liveLink="https://johnjang94.github.io/carrot/"
          />
          <ArchiveCard
            title="To-Do List"
            description="For learning purposes, this is a mini-version of YouTube with good quality of streaming."
            tools={["JavaScript"]}
            githubLink="https://github.com/johnjang94/to-do-app"
            liveLink="https://johnjang94.github.io/to-do-app/"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

const ArchiveCard = ({ title, description, tools, githubLink, liveLink }) => (
  <div className="bg-zinc-400 rounded-xl p-5 md:w-3/6 w-full my-5 md:my-0">
    <div className="flex justify-between text-2xl">
      <a href={githubLink}>
        <FaFolder />
      </a>
      <a href={liveLink}>
        <FaExternalLinkAlt />
      </a>
    </div>
    <h2 className="text-xl my-3">{title}</h2>
    <p className="text-gray-200">{description}</p>
    <div className="flex flex-wrap justify-start text-white my-5">
      {tools.map((tool, index) => (
        <span key={index} className="mr-2">
          {tool}
        </span>
      ))}
    </div>
  </div>
);

ArchiveCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};

export default DevelopmentHome;
