import { useEffect } from "react";
import { MyIntroduction } from "../../utils/about";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="md:flex md:space-x-2 md:my-20 md:items-center md:justify-center text-center">
        <h1 className="mt-20 md:mt-0 md:text-5xl text-2xl">Hi 👋🏼</h1>
        <h1 className="mb-20 md:mb-0 md:text-5xl text-2xl">
          My name is John Jang
        </h1>
      </div>
      <img
        src={MyIntroduction.About}
        alt="My profile"
        width={400}
        className="mx-auto rounded-2xl my-10"
      />
      {/* <img src={Profile} alt="Profile" className="mx-auto my-14" /> */}
      <div className="w-full md:w-3/6 md:mx-auto px-10 space-y-5">
        <p>
          I&#39;m a Product Designer at a start-up called OPERATION EASE, where
          I am currently on a mission to automating hospitality management with
          a group of talented designers. I focus on creating stylish designs
          that align with business objectives and enhance customer satisfaction.
        </p>
        <p>
          I take a strategic approach to my designs. I consider user voices,
          technical aspect of the development, and business aspect in my
          designs. I am deeply interested in understanding the message that we
          receive from the stakeholders and the users, and enjoy the process of
          iteration on finding the match between the valuable visuals and the
          voices I heard.
        </p>
        <p>
          I have a number of hobbies and that I lost count. To name a few, I
          enjoy running, dancing, singing, climbing, traveling, etc. These days,
          you might catch me at gym (working out hard), at bookstores (reading
          for new inspirations) or{" "}
          <a
            href="http://www.johnjang.dev/"
            className="text-blue-500 hover:underline"
          >
            coding
          </a>{" "}
          at the local cafes --- struggling to let some of my designs breathe in
          life. If you are a foodie and enjoy talking about your journey
          (whatever it is),{" "}
          <a
            href="mailto:jscolbe9675@gmail.com"
            className="text-blue-500 hover:underline"
          >
            this
          </a>{" "}
          is where you can find me.
        </p>
      </div>
    </div>
  );
}
