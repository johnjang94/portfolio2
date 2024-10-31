export default function Retrospective() {
  return (
    <div>
      <h3 className="text-xl uppercase">Looking back...</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <ul className="px-5 space-y-3">
          <li className="text-blue-500">
            Best Lesson 1 | The Subscription Model
          </li>
          <p className="px-5">
            In this project, all the services were offered as a package. As I am
            not a business-person yet, it was a good opportunity to find out
            what a business model looks like and how it works in reality.
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
