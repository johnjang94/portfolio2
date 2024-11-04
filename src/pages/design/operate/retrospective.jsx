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
          <li className="text-blue-500">Best Lesson 2 | The Pivot</li>
          <p className="px-5">
            We were originally planning to combine the inventory dashboard for
            the room management and the food / beverage inventory. After the
            initial iteration and the usability testing on the initial
            iteration, we came to realize that we could offer two specialized
            management dashboards for room management and the food / beverage
            inventory. In fact, this gave us an option to offer our services in
            the concept of bundles. Having said that, we ended up creating two
            different dashboards that are specifically focused on each type of
            activity.
          </p>
        </ul>
      </div>
    </div>
  );
}
