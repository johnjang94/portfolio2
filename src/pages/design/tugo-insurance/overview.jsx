export default function Overview() {
  return (
    <div>
      <h3 className="text-xl uppercase">Overview</h3>
      <div className="md:mx-20 my-3">
        <div>
          <p className="font-semibold">Problem</p>
          <div className="p-5">
            <p>
              The retention and the conversion rates for TuGo Travel Insurance
              is low.
            </p>
            <p>How might we increase the sales?</p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <div className="p-5">
            <p>
              The task completion rate was increased to{" "}
              <span className="text-blue-500">85%</span>
            </p>
            <p>
              The screen time was{" "}
              <span className="text-blue-500">increased from 2m to 5m</span> in
              average
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
