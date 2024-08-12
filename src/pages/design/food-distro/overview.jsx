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
              We needed to design a solution that offers easy search functions.
            </p>
          </div>
          <div>
            <p className="font-semibold">Personal Challenge</p>
            <p className="p-5">
              Although I did not express to the participants, it took me a while
              to process what it feels like to skip a meal because you could not
              afford to eat all three meals a day.
            </p>
          </div>
          <div>
            <p className="font-semibold">Results</p>
            <p className="p-5">1 in 5 test participants liked the new search</p>
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
                We needed to design a solution that offers easy search
                functions.
              </td>
            </tr>
            <tr>
              <th>Personal Challenge</th>
              <td className="p-5">
                Although I did not express to the participants, it took me a
                while to process what it feels like to skip a meal because you
                could not afford to eat all three meals a day.
              </td>
            </tr>
            <tr>
              <th>Results</th>
              <td className="p-5">
                1 in 5 test participants liked the new search
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
