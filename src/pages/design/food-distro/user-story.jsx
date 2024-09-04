export default function UserStory() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl uppercase">User Story</h3>
      <div className="md:mx-20 space-y-5">
        <p>
          We have decided to write user stories to be able to understand what
          kind of information is considered as MVP.
        </p>
        <p>The following is an example:</p>
        <p>
          &#34;As a taker, I want the ability to search for surplus food in the
          neighbourhood using a map so that I can decide the option that best
          suits me based on the location.&#34;
        </p>
        <ul className="px-10 space-y-3">
          <li>
            user would be able to see a precise location of the food-giver
          </li>
          <li>
            user would be able to see a specific list of food items that are
            offered by the food-giver.
          </li>
        </ul>
      </div>
    </div>
  );
}
