export default function Impact() {
  return (
    <div>
      <h3 className="text-xl uppercase">Impact</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <p className="font-semibold">Based on the usability testing:</p>
        <ul className="px-5 list-disc space-y-3">
          <li>Task success rate</li>
          <p className="px-5">
            85% of participants have successfully navigated themselves from the
            home page to the cart page.
          </p>
          <li>Screen time</li>
          <p className="px-5">
            the average time that users stay engaged on the website increased
            from 2 minutes to 5 minutes.
          </p>
        </ul>
      </div>
    </div>
  );
}
