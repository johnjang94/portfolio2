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
      <div className="w-full md:w-3/6 md:mx-auto px-10 space-y-5">
        <p>
          I&#39;m a Product Designer at a start-up called OPERATION EASE, where
          I am currently on a mission to automating hospitality management with
          a group of talented designers. I focus on creating stylish designs
          that align with business objectives and enhance customer satisfaction.
        </p>
        <p>
          Coming with a background in Neuroscience, Education, and Software
          Development, UX/UI Design or Product Design was indeed not my first
          destination either as my occupation or as a career. On the other hand,
          I was always intrigued by how different types of visuals make us to
          respond in certain ways.
        </p>
        <p>
          Ever since high school (and until the moment I graduated with
          Neuroscience), I had deep interest in how visuals impact the
          development of infants from 0 to 5 years. After then, I was interested
          in learning how these visuals influence the decision-making process of
          primary and secondary school students. In fact, this specific type of
          interest on the interaction between the visuals and the humans came to
          me clearer and stronger when I had a chance to work as an English as a
          Second Language instructor in Korea for approximately 2 years.
        </p>
        <p>
          After wrapping up my experience in Korea, I started to seriously
          contemplate and identify this journey of understanding the connection
          between the visuals and human-responses. After a while, I was able to
          recognize that this type of interaction is called UX/UI Design (or so
          called as Product Design).
        </p>
        <p>
          As a Product Designer, I take a strategic approach to my designs. I
          consider user voices, technical aspect of the development, and
          business aspect in my designs. I am deeply interested in understanding
          the message that we receive from the stakeholders and the users, and
          enjoy the process of iteration on finding the match between the
          valuable visuals and the voices I heard.
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
        <p>Thanks for dropping-by and have a read. Have a good day.</p>
      </div>
    </div>
  );
}
