export default function Impact() {
  return (
    <div>
      <h3 className="text-xl uppercase">Impact</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <p className="font-semibold">
          Since this was Phase 0, we have not actually been able to launch the
          platform in this phase. On the other hand, the participants who joined
          us in usability testing have shown the following performances:
        </p>
        <ul className="px-10 space-y-3">
          <p>
            We reached the click-through rate (CTR) of{" "}
            <span className="text-blue-500">3.5%</span> with new pages we
            created.
          </p>
          <li>Screen time</li>
          <p className="px-5">
            the average time that users stay engaged on the website increased{" "}
            {/* */}
            <span className="text-blue-500">from 2 minutes to 5 minutes</span>.
          </p>
        </ul>
      </div>
    </div>
  );
}
