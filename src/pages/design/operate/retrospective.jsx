export default function Retrospective() {
  return (
    <div>
      <h3 className="text-xl uppercase">Looking back...</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <p className="font-semibold">
          This was my first SaaS project. I only used to assume that SaaS
          project is oriented for the office-use, but I came to realize that
          SaaS is helpful when it comes to automating and systemizing the
          actions that repeat periodically.
        </p>
        <ul className="px-5 space-y-3">
          <li className="text-blue-500">
            Best Lesson 1 | SaaS for B2B is complex
          </li>
          <p className="px-5">
            In this project, all the services were offered as a package. On the
            other hand, I did not have any idea what exactly it means. It was a
            new discovery of how different systems can collaborate and be
            offered as a package. In addition, I was amazed to find out how
            complex the interactivity of different activities occur at the same
            time.
          </p>
          <li className="text-blue-500">
            Best Lesson 2 | Discovery of Unknown
          </li>
          <p className="px-5">
            It was a journey to understand the system and the need of market.
            Compared to other projects which were redesign of existing products,
            this was a design of launching a new product. We needed to iterate
            multiple times to meet the assessment and the need.
          </p>
        </ul>
      </div>
    </div>
  );
}
