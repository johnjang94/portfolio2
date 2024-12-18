export default function Overview() {
  return (
    <div>
      <h3 className="text-xl">OVERVIEW</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold">At Issue</p>
          <p className="p-5">
            Many hotelier managers find the existing inventory management from
            other brands{" "}
            <span className="text-red-500">difficult to control</span>.
          </p>
          <div className="px-8 space-y-3">
            <p>
              Problem 1 | Navigation is{" "}
              <span className="text-red-500">not straight-forward</span>
            </p>
            <p>
              Problem 2 | Suspected irrelevant content{" "}
              <span className="text-red-500">slows</span> users
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <p className="px-8 py-5">
            <span className="underline">3 out of 5 participants</span> were{" "}
            <span className="text-blue-500">optimistic</span> with new content
            displays, but they also pointed out that some terminologies might
            need to change.
          </p>
        </div>
      </div>
    </div>
  );
}
