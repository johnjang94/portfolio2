export default function Retrospective() {
  return (
    <div>
      <h3 className="text-xl uppercase">Final Thoughts & Takeaways</h3>
      <div className="md:mx-20 my-5 space-y-5">
        <div>
          <p>
            <span className="text-red-500">Lots of challenges</span> for a small
            group of team
          </p>
          <p className="p-5">
            I think that I was fortunate to be a part of an e-commerce project,
            but the progress was notably slow due to such small group of team.
          </p>
        </div>
        <p>
          Clear expectation are <span className="text-blue-500">vital</span>.
        </p>
        <ul className="px-5 space-y-3">
          <p>
            <span className="text-red-500">Main reasons</span> that the
            struggles have been stagnating are...
          </p>
          <li className="px-5">
            we had a bit of different perspectives on how the project flows
          </li>
          <li className="px-5">
            the majority of us were volunteers who were committed to other
            businesses which delayed the discussions to bring solutions
          </li>
          <li className="px-5">
            we had general plans but no specific plan or a way to keep up with
            rapid changes
          </li>
        </ul>
      </div>
    </div>
  );
}
