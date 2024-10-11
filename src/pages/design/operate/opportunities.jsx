export default function Opportunity() {
  return (
    <div>
      <h3 className="text-xl uppercase">Opportunity</h3>
      <ul className="md:mx-20 my-5 space-y-5 list-decimal">
        <li className="font-bold">Simplification</li>
        <p className="px-10">
          After the tutorial from Pet Pooja, I rather ended up having some
          doubts such as...
        </p>
        <p className="px-18 py-3 text-red-500">
          If the design was straight-forward and intuitive, would the tutorial
          have been necessary at all?
        </p>
        <div className="space-y-3">
          <p className="px-10 font-semibold">
            Decision 1 | Display only the essential information
          </p>
          <p className="px-20">Most users will not remember everything</p>
          <p className="px-10 font-semibold">
            Decision 2 | Keep the minimalistic design
          </p>
          <p className="px-20">
            Information overload never catches enough attention
          </p>
        </div>
        <li className="font-bold">Convenience</li>
        <p className="px-10">
          The status update needs to be made quickly and constantly because the
          product will be used by many people at the same time. This led me to
          think that simple one-click solution might save their time.
        </p>
      </ul>
    </div>
  );
}
