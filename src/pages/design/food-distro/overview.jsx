export default function Overview() {
  return (
    <div>
      <h3 className="text-xl">OVERVIEW</h3>
      <div className="md:mx-20 my-3">
        <div>
          <p className="font-semibold">Problem</p>
          <p className="p-5">
            Research indicates that many individuals find scheduling the
            meet-ups <span className="text-red-500">to be challenging</span> for
            both the food-givers and the food-takers. In addition, the
            food-takers are also concerned with {/* */}
            <span className="text-red-500">
              the hygiene and the freshness
            </span>{" "}
            of the food items as the conditions for many of them are considered
            as <span className="text-red-500">red flag</span> despite being
            donations.
          </p>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <div className="flex items-end">
            <p className="px-5 py-6">We have</p>
            <ul>
              <li>
                a&#41; improved connecting individuals{" "}
                <span className="text-blue-500">up to 30%</span>
              </li>
              <li>
                b&#41; received{" "}
                <span className="text-blue-500">the highest rating</span> in
                trusteeship and reliability
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
