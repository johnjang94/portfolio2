export default function Overview() {
  return (
    <div>
      <h3 className="text-xl">OVERVIEW</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold">Problem</p>
          <p className="p-5">
            Many hotelier managers find the inventory management{" "}
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
          <p className="px-8 py-5">Please stay tuned for further update.</p>
          {/* <p className="p-5">
            We implemented a simplified inventory system for lodging and
            restaurant management, reducing time spent on occupancy checks,
            stock monitoring, and vendor orders by{" "} */}
          {/* <span className="text-blue-500">30%</span>, which is an average of{" "} */}
          {/* */}
          {/* <span className="text-blue-500">20 minutes</span>.
          </p> */}
        </div>
      </div>
    </div>
  );
}
