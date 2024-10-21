export default function Summary() {
  return (
    <div>
      <h3 className="text-xl uppercase">Summary</h3>
      <div className="md:mx-20 my-5 space-y-5">
        <div className="flex gap-[5.5rem]">
          <p className="font-semibold">Role</p>
          <ul>
            <li>Product Designer</li>
            <li>UX Research Assistant</li>
          </ul>
        </div>
        <div className="flex gap-20">
          <p className="font-semibold">Team</p>
          <ul>
            <li>1 Product Designer</li>
            <li>1 UX/UI Designer</li>
            <li>2 UX Researchers</li>
            <li>1 Project Manager</li>
            <li>1 Product Manager</li>
          </ul>
        </div>
        <div className="flex gap-14">
          <p className="font-semibold">Timeline</p>
          <div>
            <p>17 weeks</p>
          </div>
        </div>
      </div>
    </div>
  );
}
