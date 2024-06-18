import { useEffect } from "react";
import Profile from "../../assets/accessory/profile.png";
import { toolsImages } from "../../utils/toolsImages";

// FOR MY HOBBIES SECTION
import { RiInstagramFill } from "react-icons/ri";

// photo
import BlackSwan from "../../assets/about/dance/black_swan.png";
import BTBT from "../../assets/about/dance/BTBT.png";
import BatterUp from "../../assets/about/dance/batter_up.png";
import Banff from "../../assets/about/travel/banff.png";
import Islands from "../../assets/about/travel/islands.png";
import Park from "../../assets/about/travel/park.png";
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mb-14">
      <div className="md:flex md:space-x-2 md:my-20 md:items-center md:justify-center text-center">
        <h1 className="mt-20 md:mt-0 md:text-5xl text-2xl">Hi 👋🏼</h1>
        <h1 className="mb-20 md:mb-0 md:text-5xl text-2xl">
          My name is John Jang
        </h1>
      </div>
      <img src={Profile} alt="Profile" className="mx-auto my-14" />
      <div className="w-full md:w-3/6 md:mx-auto px-10 space-y-5">
        <p>
          I am a Canadian who currently resides in Toronto, Ontario, Canada 🇨🇦{" "}
          <br />I enjoy crafting digital experience and building various
          products on the internet. I imagine and design my imagination first,
          then I let it breathe on the internet.
        </p>
        <p>
          I often heard that I am a creative person, but my true journey with
          design began back in 2021. It was during pandemic and I wanted to seek
          for a new journey away from teaching. This was the moment I&#39;ve
          encountered UX Design and since then, I have been redesigning website,
          creating a few digital products including dashboard portal for the use
          of medical professionals. Perhaps, I wanted to expand my journey a
          little further.
        </p>
        <p>
          In 2022, I was exposed to the world of Web Development for the first
          time. I learned the basics of Front-End (from HTML, CSS and
          JavaScript) and have built a few simple projects from making a to-do
          list to a static website. I have continued my journey in learning
          advanced level of web development technology using React, TypeScript,
          Next.js, and Tailwind CSS (for Front-End) as well as MongoDB,
          Express.js, Node.js, and many more (for Back-End).
        </p>
        <p>
          Since then, I have also had a few opportunities to contribute as a
          Front-End Developer in different projects in different communities. I
          was a UI Developer for a blockchain project, a Software Developer for
          an e-commerce project, etc. Even though I am a UX Designer, I am
          dedicated to build a good web application to the organizations that
          need my hands.
        </p>
      </div>
      <div className="w-full md:w-3/6 md:mx-auto px-10 my-10">
        <Link to="/development">
          <button className="text-blue-500 hover:underline p-5 hover:bg-slate-300 bg-slate-50 rounded-xl">
            Explore my development projects
          </button>
        </Link>
      </div>
      {/* ====================== TALKING ABOUT MY TOOLS ====================== */}
      <h2 className="text-center mt-20 text-3xl">MY TOOLS & SKILLS</h2>
      <div className="w-full md:grid-cols-2 md:mx-auto px-10 space-y-5 my-5 md:flex md:space-y-0">
        <div>
          <h3 className="text-center mb-2 text-xl">Design Tools</h3>
          <div className="justify-center space-y-5 md:w-3/6 md:mx-auto">
            <p className="text-center">Figma</p>
            <img
              src={toolsImages.Figma}
              alt="Figma logo"
              width={800}
              className="rounded-2xl mx-auto"
            />
            <p className="text-center">Figjam</p>
            <img
              src={toolsImages.Figjam}
              alt="Figma logo"
              width={300}
              className="rounded-2xl mx-auto"
            />
            <p className="text-center">Adobe XD</p>
            <img
              src={toolsImages.AdobeXD}
              alt="Figma logo"
              width={300}
              className="rounded-2xl mx-auto"
            />
          </div>
        </div>
        <div>
          <h3 className="text-center mb-10 text-xl">Design Skills</h3>
          <ul>
            <li>Design Research</li>
            <li>User-Centric Design</li>
            <li>Wireframe</li>
            <li>Prototype</li>
            <li>Human-Computer Interaction</li>
            <li>Iteration (Low-Fidelity ~ High-Fidelity)</li>
          </ul>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:mx-32 my-20">
        {/* ============== FRONT-END TOOLS ================= */}
        <div>
          <h3 className="text-center mb-10 text-base md:text-xl">
            Front-End Development Tools
          </h3>
          <div className="overflow-y-scroll space-y-5">
            <p className="text-center">JavaScript</p>
            <img
              src={toolsImages.JavaScript}
              alt="JavaScript logo"
              width={300}
              className="rounded-2xl mx-auto"
            />
            <p className="text-center">TypeScript</p>
            <img
              src={toolsImages.TypeScript}
              alt="TypeScript logo"
              width={300}
              className="rounded-2xl mx-auto"
            />
            <p className="text-center">React</p>
            <img
              src={toolsImages.React}
              alt="React logo"
              width={300}
              className="rounded-2xl mx-auto"
            />
            <p className="text-center">Tailwind CSS</p>
            <img
              src={toolsImages.Tailwind}
              alt="Tailwind CSS logo"
              width={300}
              className="rounded-2xl mx-auto"
            />
            <p className="text-center">Axios</p>
            <img
              src={toolsImages.Axios}
              alt="Axios logo"
              width={300}
              className="rounded-2xl mx-auto"
            />
            <p className="text-center">JQuery</p>
            <img
              src={toolsImages.JQuery}
              alt="JQuery logo"
              width={300}
              className="rounded-2xl mx-auto"
            />
            <p className="text-center">RESTful API</p>
            <img
              src={toolsImages.RESTAPI}
              alt="RESTful API logo"
              width={300}
              className="rounded-2xl mx-auto"
            />
          </div>
        </div>
        {/* ============== BACK-END ================= */}
        <div>
          <h3 className="text-center mb-10 text-base md:text-xl my-20 md:my-0">
            Back-End Development Tools
          </h3>
          <div className="overflow-y-scroll space-y-5 mt-10">
            <p className="text-center">Node.js</p>
            <img
              src={toolsImages.NodeJS}
              alt="Node.js logo"
              width={300}
              className="rounded-2xl mx-auto"
            />
            <p className="text-center">Express</p>
            <img
              src={toolsImages.ExpressJS}
              alt="Express logo"
              width={300}
              className="rounded-2xl mx-auto"
            />
            <p className="text-center">Mongo DB</p>
            <img
              src={toolsImages.MongoDB}
              alt="MongoDB logo"
              width={300}
              className="rounded-2xl mx-auto"
            />
          </div>
        </div>
      </div>
      {/* ============== OTHER TOOLS ================= */}
      <div>
        <h3 className="text-center mb-10 text-base md:text-xl">
          OTHER COMMUNICATION TOOLS
        </h3>
        <div className="overflow-y-scroll space-y-5 w-fit mx-auto">
          <p className="text-center">git</p>
          <img
            src={toolsImages.Git}
            alt="Git logo"
            width={300}
            className="rounded-2xl mx-auto"
          />
          <p className="text-center">Github</p>
          <img
            src={toolsImages.Github}
            alt="Github logo"
            width={300}
            className="rounded-2xl mx-auto"
          />
          <p className="text-center">Vercel</p>
          <img
            src={toolsImages.Vercel}
            alt="Vercel logo"
            width={300}
            className="rounded-2xl mx-auto"
          />
          <p className="text-center">Netlify</p>
          <img
            src={toolsImages.Netlify}
            alt="Netlify logo"
            width={300}
            className="rounded-2xl mx-auto"
          />
          <p className="text-center">AWS</p>
          <img
            src={toolsImages.AWS}
            alt="AWS logo"
            width={300}
            className="rounded-2xl mx-auto"
          />
        </div>
      </div>
      {/* ====================== TALKING ABOUT MY TOOLS ====================== */}
      <h2 className="text-center mt-40 text-3xl 2xl:text-5xl">MY HOBBIES</h2>
      <div>
        <h1 className="text-center my-10 text-sm md:text-2xl 2xl:text-4xl px-10 md:px-0">
          When I am not designing or coding, I do...
        </h1>
        <div>
          <div className="flex justify-between mb-3 px-10 items-center">
            <h1 className="text-3xl">Dance</h1>
            <a href="https://www.instagram.com/itsdancing_j/">
              <RiInstagramFill className="text-3xl bg-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%) bg-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%) bg-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)" />
            </a>
          </div>
          <div className="px-10 md:grid-cols-3 md:flex gap-5">
            <a href="https://www.instagram.com/p/CHS2d3BjO4mvHTW_ckC6NPfOZKOZ_uYZAVkc7s0/">
              <img
                src={BlackSwan}
                alt="Black Swan Cover"
                width={500}
                className="rounded-xl h-80"
              />
            </a>
            <a href="https://www.instagram.com/p/CsjRqvxrhc3/">
              <img
                src={BTBT}
                alt="BTBT"
                width={500}
                className="rounded-xl h-80 my-5 md:my-0"
              />
            </a>
            <a href="https://www.instagram.com/p/C1kGlqNrQva/">
              <img
                src={BatterUp}
                alt="Batter_Up"
                width={500}
                className="rounded-xl h-80"
              />
            </a>
          </div>
        </div>
        <div className="flex justify-between my-5 px-10 items-center">
          <h1 className="text-3xl">Travel Blog</h1>
          <a href="https://www.instagram.com/itsfoodie_j/">
            <RiInstagramFill className="text-3xl" />
          </a>
        </div>
        <div className="px-10 md:grid-cols-3 md:flex gap-5">
          <a href="https://www.instagram.com/p/Cf_60OEAbhf/">
            <img
              src={Banff}
              alt="Banff"
              width={500}
              className="rounded-xl h-80"
            />
          </a>
          <a href="https://www.instagram.com/p/CgLbAABgv1F/">
            <img
              src={Islands}
              alt="Islands"
              width={500}
              className="rounded-xl h-80 my-5 md:my-0"
            />
          </a>
          <a href="https://www.instagram.com/p/Cf_7azVOy0E/?img_index=1">
            <img
              src={Park}
              alt="Park"
              width={500}
              className="rounded-xl h-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
