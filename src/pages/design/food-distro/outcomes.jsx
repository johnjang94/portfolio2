export default function Outcomes() {
  return (
    <div>
      <h3 className="text-xl">OUTCOMES</h3>
      <div className="md:mx-20 my-3 space-y-3">
        <p className="font-semibold">
          1 in 3 participants rated the star system as{" "}
          <span className="text-blue-500">positive</span>.
        </p>
        <ul className="list-disc px-5 text-gray-500 space-y-3">
          <li>
            this system was more useful to the food takers as many of them were
            concerned with freshness and hygiene of the food they get.
          </li>
          <li>
            the food givers had a mixed view with the star system because{" "}
            <span className="text-red-500">
              they could not find a way to review
            </span>{" "}
            the food takers in terms of no-shows.
          </li>
        </ul>
      </div>
    </div>
  );
}
