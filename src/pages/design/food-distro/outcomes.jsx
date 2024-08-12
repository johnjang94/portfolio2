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
            the food receivers found this system to be helpful in finding
            <span className="text-blue-500">reliable food givers</span>.
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
