export default function Overview() {
  return (
    <div>
      <h3 className="text-xl">OVERVIEW</h3>
      <div className="md:mx-20 my-3">
        <div className="md:hidden">
          <div>
            <p className="font-semibold">Societal needs</p>
            <p className="p-5">
              Some communities in the US wants to have another food distribution
              solution among locals.
            </p>
          </div>
          <div>
            <p className="font-semibold">Goal</p>
            <p className="p-5">
              We needed to design a solution that offers easy search functions
              and profile detail of users to indicate reliability.
            </p>
          </div>
          <div>
            <p className="font-semibold">Personal Challenge</p>
            <p className="p-5">
              Since this was a remote project in the US, we could only rely on
              the words from a representative of the non-profit organization
              that runs food distro mobile application rather than us being able
              to deep dive into the context.
            </p>
          </div>
          <div>
            <p className="font-semibold">Results</p>
            <ul className="p-5 space-y-3">
              <li>1 in 5 test participants liked the new search</li>
              <li>
                Mixed views on possible ranking system to indicate the
                reliability of individuals
              </li>
            </ul>
          </div>
        </div>
        <table className="text-start hidden md:block">
          <tbody>
            <tr>
              <th>Societal needs</th>
              <td className="p-5 w-4/6">
                Some communities in the US wants to have another food
                distribution solution among locals.
              </td>
            </tr>
            <tr>
              <th>Goal</th>
              <td className="p-5">
                We needed to design a solution that offers easy search functions
                and profile detail of users to indicate reliability.
              </td>
            </tr>
            <tr>
              <th>Personal Challenge</th>
              <td className="p-5">
                Since this was a remote project in the US, we could only rely on
                the words from a representative of the non-profit organization
                that runs food distro mobile application rather than us being
                able to deep dive into the context.
              </td>
            </tr>
            <tr>
              <th>Results</th>
              <ul className="p-5 space-y-3">
                <li>1 in 5 test participants liked the new search</li>
                <li>
                  Mixed views on possible ranking system to indicate the
                  reliability of individuals
                </li>
              </ul>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
