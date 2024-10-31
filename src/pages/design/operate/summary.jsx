export default function Summary() {
  return (
    <div>
      <h3 className="text-xl uppercase">Summary</h3>
      <div className="md:mx-20 my-5 space-y-5">
        <div className="flex gap-[5.5rem]">
          <p className="font-semibold">Role</p>
          <p>Product Designer</p>
        </div>
        <div className="flex gap-20">
          <p className="font-semibold">Team</p>
          <ul>
            <li>Team 1 - 5 designers</li>
            <li>Team 2 - 4 designers</li>
            <li>1 Project Manager</li>
            <li>1 Product Owner</li>
          </ul>
        </div>
        <div className="flex gap-14">
          <p className="font-semibold">Timeline</p>
          <p>10 weeks</p>
        </div>
      </div>
    </div>
  );
}
