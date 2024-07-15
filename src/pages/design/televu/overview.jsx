export default function Overview() {
  return (
    <div>
      <h3 className="text-xl">OVERVIEW</h3>
      <div className="md:mx-20 my-3">
        <div className="md:hidden">
          <div>
            <p className="font-semibold">Business needs</p>
            <p className="p-5">
              As a private telecommunication company, TeleVU Innovation is
              seeking for some help in improving overall UI.
            </p>
          </div>
          <div>
            <p className="font-semibold">Goal</p>
            <p className="p-5">
              We needed to design a solution that offers simplified, convenient,
              and operational UI that reduces the delay in communication.
            </p>
          </div>
          <div>
            <p className="font-semibold">Personal Challenge</p>
            <p className="p-5">
              We could not gather an adequate amount of data from surgeons in
              comparison to the frontier clinicians like ambulance, family
              doctors, and nurses.
            </p>
          </div>
          <div>
            <p className="font-semibold">Results</p>
            <p className="p-5">We have reduced the loading time up to 20%</p>
          </div>
        </div>
        <table className="text-start hidden md:block">
          <tbody>
            <tr>
              <th>Business needs</th>
              <td className="p-5 w-4/6">
                As a private telecommunication company, TeleVU Innovation is
                seeking for some help in improving overall UI.
              </td>
            </tr>
            <tr>
              <th>Goal</th>
              <td className="p-5">
                We needed to design a solution that offers simplified,
                convenient, and operational UI that reduces the delay in
                communication.
              </td>
            </tr>
            <tr>
              <th>Personal Challenge</th>
              <td className="p-5">
                We could not gather an adequate amount of data from surgeons in
                comparison to the frontier clinicians like ambulance, family
                doctors, and nurses.
              </td>
            </tr>
            <tr>
              <th>Results</th>
              <td className="p-5">
                We needed to design a solution that offers simplified,
                convenient, and operational UI that reduces the delay in
                communication.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
