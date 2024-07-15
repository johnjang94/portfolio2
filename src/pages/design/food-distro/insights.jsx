export default function Insights() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl">INSIGHTS</h3>
      <div className="md:mx-20 space-y-5">
        <p>
          Based on the competitive analysis, users want a designated drop-off
          and pick-up location because it could be tough to arrange meetings at
          the individual level (unless they wanted to).
        </p>
        <p>
          According to the interviews, the voice of the food takers needed to be
          heard as well. Most apps only display what is available instead of
          acknowledging the users what items are on demand too.
        </p>
        <p>
          Reasons to <span className="text-green-500">craft</span> a new mobile
          application:
        </p>
        <ul className="px-5 space-y-5 text-gray-600">
          <li>Improves communication among users</li>
          <li>Food distribution is made better - matching demand and supply</li>
        </ul>
      </div>
    </div>
  );
}
