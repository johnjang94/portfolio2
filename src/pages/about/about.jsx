import { useEffect } from "react";
import AboutNav from "../../components/second-nav/about/about-nav";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mb-14">
      <AboutNav />
      <img src="assets/profile.png" alt="Profile" className="mx-auto my-14" />
      <div className="w-full md:w-3/6 md:mx-auto px-10 space-y-5">
        <p>
          My name is John and I enjoy crafting and building digital experience
          on the internet. I imagine and design my imagination first, then I let
          it breathe on the internet.
        </p>
        <p>
          I often heard that I am a creative person, but my true journey with
          design started back in 2021. It was during pandemic and I wanted to
          seek for a new journey away from teaching. This was the moment
          I&#39;ve encountered UX Design and since then, I have been redesigning
          website, creating a few digital products including dashboard portal
          for the use of medical professionals. Perhaps, I wasn&#39;t satisfied
          just with the design because it is not breathing.
        </p>
        <p>
          I&#39;ve decided to extend my adventure in web development in 2022.
          All I wanted to do was to bring my designed portfolio to the lively
          website. During the course, I encountered many website building
          sources that do not need me to understand the code. Though, these
          website builders had many limits. Sine I wanted more flexibility and
          further control (like full-level of customization), I ended up
          learning how to build web pages myself using HTML and CSS.
        </p>
        <p>
          Since then, I had a few opportunities to contribute as a Front-End
          Developer in different projects in different communities. I was a UI
          Developer for a blockchain project, a Software Developer for an
          e-commerce project, etc. I am currently dedicated to provide good
          digital experiment at Tech Fleet.
        </p>
      </div>
    </div>
  );
}
