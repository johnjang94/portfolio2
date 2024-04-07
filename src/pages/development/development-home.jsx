import { useEffect } from "react";
import DevelopmentHomeNav from "../../components/second-nav/development/development-home-nav";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import Footer from "../../components/footer/footer";

export default function DevelopmentHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <DevelopmentHomeNav />
      <section className="bg-cover my-5 py-10">
        <h2 className="md:text-4xl text-2xl my-5 md:w-4/6 md:mx-auto text-center">
          Some things I have built
        </h2>
        {/* ====================== RUMINATE ========================= */}
        <div className="md:flex md:grid-cols-2 mx-auto md:w-4/6">
          <img
            src="../src/assets/ruminate.png"
            alt="Ruminate"
            width={650}
            className="md:w-3/6 mx-auto p-3 rounded-xl hidden md:block"
          />
          <div className="p-5 md:w-4/6 z-10">
            <h5 className="md:text-end text-center">Featured Project</h5>
            <h1 className="md:text-end text-center text-3xl mb-5">Ruminate</h1>
            <p className="w-full mx-auto md:text-left md:mx-0">
              A web app for a non-profit organization in the U.S. that strives
              to lower the poverty rate by connecting small local business
              owners and potential customers who are seeking for good quality of
              consumable products.
            </p>
            <div className="flex space-x-10 text-gray-400 my-5">
              <span>React</span>
              <span>TypeScript</span>
              <span>Firebase</span>
            </div>
            <div className="flex space-x-5 my-3 text-2xl">
              <a href="https://github.com/johnjang94/project_ruminate">
                <FaGithub />
              </a>
              <a href="https://ruminate-frontend.netlify.app/">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <img
            src="../src/assets/ruminate.png"
            alt="Ruminate"
            width={650}
            className="md:w-3/6 mx-auto p-3 rounded-xl block md:hidden"
          />
        </div>
        {/* ======================= K-BLOCK =========================== */}
        <div className="md:flex md:grid-cols-2 mx-auto md:w-4/6">
          <div className="p-5 md:w-4/6 z-10">
            <h5 className="md:text-start text-center">Featured Project</h5>
            <h1 className="md:text-start text-center text-3xl mb-5">
              Kadena Web Blockchain
            </h1>
            <p className="w-full mx-auto md:text-left md:mx-0">
              A WEB3 app for NFT users. From this website, users can view the
              current trends of different NFT types, list of transactions
              (live), transaction history, NFT wallet, etc. (currently, still
              under-construction)
            </p>
            <div className="flex space-x-10 text-gray-400 my-5">
              <span>React</span>
              <span>JavaScript</span>
              <span>Tailwind CSS</span>
            </div>
            <div className="flex space-x-5 my-3 text-2xl">
              <a href="https://github.com/techfleetworks/k-block-app">
                <FaGithub />
              </a>
              <a href="https://kblock.vercel.app/">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <img
            src="../src/assets/kblock.png"
            alt="K-Block"
            width={650}
            className="md:w-3/6 mx-auto p-3 rounded-xl"
          />
        </div>
      </section>
      <section>
        <h1 className="text-3xl my-10 text-center">My Archives</h1>
        <div className="md:grid-cols-3 p-5 md:flex md:gap-5 md:mx-48 md:justify-between">
          {/* ================== YOUTUBE ===================== */}
          <div className="bg-zinc-400 rounded-xl p-5 md:w-3/6 w-full">
            <div className="flex justify-between text-2xl">
              <a href="https://github.com/johnjang94/cloneYouTube">
                <FaFolder />
              </a>
              <a href="https://youtube-myversion.netlify.app/">
                <FaExternalLinkAlt />
              </a>
            </div>
            <h2 className="text-xl my-3">Simplified YouTube</h2>
            <p className="text-gray-200">
              For learning purposes, this is a mini-version of YouTube with good
              quality of streaming.
            </p>
            <div className="flex justify-between text-white my-5">
              <span>React</span>
              <span>JavaScript</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
          {/* ================== GAME ===================== */}
          <div className="bg-zinc-400 rounded-xl p-5 md:w-3/6 w-full my-5 md:my-0">
            <div className="flex justify-between text-2xl">
              <a href="https://github.com/johnjang94/carrot">
                <FaFolder />
              </a>
              <a href="https://johnjang94.github.io/carrot/">
                <FaExternalLinkAlt />
              </a>
            </div>
            <h2 className="text-xl my-3">Mini-Game</h2>
            <p className="text-gray-200">
              Let&#39;s have some fun: click the carrots only.
            </p>
            <div className="text-white mt-10">
              <span>JavaScript</span>
            </div>
          </div>
          {/* ==================== To-Do List ============================ */}
          <div className="bg-zinc-400 rounded-xl p-5 md:w-3/6 w-full">
            <div className="flex justify-between text-2xl">
              <a href="https://github.com/johnjang94/to-do-app">
                <FaFolder />
              </a>
              <a href="https://johnjang94.github.io/to-do-app/">
                <FaExternalLinkAlt />
              </a>
            </div>
            <h2 className="text-xl my-3">To-Do List</h2>
            <p className="text-gray-200">
              For learning purposes, this is a mini-version of YouTube with good
              quality of streaming.
            </p>
            <div className="text-white my-5">
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
