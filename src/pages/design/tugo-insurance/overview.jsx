export default function Overview() {
  return (
    <div>
      <h3 className="text-xl">OVERVIEW</h3>
      <div className="md:mx-20 my-3">
        <div className="md:hidden">
          <div>
            <p className="font-semibold">Business need</p>
            <p className="p-5">
              Tugo Travel Insurance company needed to recover the sales.
            </p>
          </div>
          <div>
            <p className="font-semibold">Goal</p>
            <p className="p-5">
              We needed to design a solution that was simple and clear for both
              current and potential travelers to make sure that they understand
              what they are signing up for from Tugo Travel Insurance service.
            </p>
          </div>
          <div>
            <p className="font-semibold">Personal Challenge</p>
            <p className="p-5">
              The pool of users was thin and we had to find a way to reach out
              to them.
            </p>
          </div>
          <div>
            <p className="font-semibold">Results</p>
            <p className="p-5">
              We had{" "}
              <span className="text-blue-500">85% task completion rate</span> on
              the process of browsing the packages to making a purchase.
            </p>
          </div>
        </div>
        <table className="text-start hidden md:block">
          <tbody>
            <tr>
              <th>Business need</th>
              <td className="p-5 w-4/6">
                Tugo Travel Insurance company needed to recover the sales.
              </td>
            </tr>
            <tr>
              <th>Goal</th>
              <td className="p-5">
                We needed to design a solution that was simple and clear for
                both current and potential travelers to make sure that they
                understand what they are signing up for from Tugo Travel
                Insurance service.
              </td>
            </tr>
            <tr>
              <th>Personal Challenge</th>
              <td className="p-5">
                The pool of users was thin and we had to find a way to reach out
                to them.
              </td>
            </tr>
            <tr>
              <th>Results</th>
              <td className="p-5">
                We had{" "}
                <span className="text-blue-500">85% task completion rate</span>{" "}
                on the process of browsing the packages to making a purchase.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
