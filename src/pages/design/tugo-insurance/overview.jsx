export default function Overview() {
  return (
    <div>
      <h3 className="text-xl">OVERVIEW</h3>
      <div className="md:mx-20 my-3">
        <div className="md:hidden">
          <div>
            <p className="font-semibold">Business need</p>
            <p className="p-5">
              As an insurance company that offers financial assistance to
              travelers, the existing solution was confusing and not leading to
              the sale of service.
            </p>
          </div>
          <div>
            <p className="font-semibold">Goal</p>
            <p className="p-5">
              We needed to design a solution that was simple and intuitive for
              both current and potential travelers to make sure that TuGo Travel
              Insurance is their preferred choice of cover.
            </p>
          </div>
          <div>
            <p className="font-semibold">Personal Challenge</p>
            <p className="p-5">
              It was hard to find travelers who actually used TuGo Travel
              Insurance because we did not have an adequate amount of resources
              to reach out to the users.
            </p>
          </div>
          <div>
            <p className="font-semibold">Results</p>
            <p className="p-5">
              We had{" "}
              <span className="text-blue-500">60% increased traffic</span> on
              TuGo Travel Insurance website and{" "}
              <span className="text-blue-500">30% increased willingness</span>{" "}
              to rely on TuGo service for insurance.
            </p>
          </div>
        </div>
        <table className="text-start hidden md:block">
          <tbody>
            <tr>
              <th>Business need</th>
              <td className="p-5 w-4/6">
                As an insurance company that offers financial assistance to
                travelers, the existing solution was confusing and not leading
                to the sale of service.
              </td>
            </tr>
            <tr>
              <th>Goal</th>
              <td className="p-5">
                We needed to design a solution that was simple and intuitive for
                both current and potential travelers to make sure that TuGo
                Travel Insurance is their preferred choice of cover.
              </td>
            </tr>
            <tr>
              <th>Personal Challenge</th>
              <td className="p-5">
                It was hard to find travelers who actually used TuGo Travel
                Insurance because we did not have an adequate amount of
                resources to reach out to the users.
              </td>
            </tr>
            <tr>
              <th>Results</th>
              <td className="p-5">
                We had{" "}
                <span className="text-blue-500">60% increased traffic</span> on
                TuGo Travel Insurance website and{" "}
                <span className="text-blue-500">30% increased willingness</span>{" "}
                to rely on TuGo service for insurance.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
