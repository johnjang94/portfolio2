export default function Solutions() {
  return (
    <div>
      <h3 className="text-xl uppercase">Solution</h3>
      <div className="md:mx-20 my-3 space-y-10">
        <div className="space-y-3">
          <p className="font-semibold">Iteration 1 | Simplified Navigation</p>
          <ul className="px-10 space-y-3">
            <p>We have redesigned the navigation in two different ways:</p>
            <li className="px-8">
              We have simplified overall navigation within the platform itself.
            </li>
            <p className="px-14 text-gray-400">
              i.e. we introduce new arrivals first, then allow shoppers to
              browse for more
            </p>
            <li className="px-8">
              We came up with filter function that displays lots of varieties.
            </li>
          </ul>
          <div className="p-3 bg-white rounded-3xl">
            <img
              src=""
              alt="Final design for quick compare"
              className="text-3xl"
            />
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">Iteration 2 | Friendly Visuals</p>
          <p className="px-10">
            We used friendly terminologies and simple visuals to promote
            eye-catching shopping experience
          </p>
          <div className="p-3 bg-white rounded-3xl">
            <img
              src=""
              alt="Final design for product detail page"
              className="text-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
