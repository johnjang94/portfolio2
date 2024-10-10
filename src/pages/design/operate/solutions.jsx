import { OperateEase } from "../../../utils/operate";

export default function Solutions() {
  return (
    <div>
      <h3 className="text-xl uppercase">Solutions</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <p className="font-bold">Solution 1 | Simplification</p>
        <p className="px-10">
          In my initial iteration, I designed a simpler dashboard where users
          can check all the necessary information in one-click.
        </p>
        <div className="grid grid-cols-2 items-center gap-5 bg-slate-300 rounded-3xl p-5">
          <img
            src={OperateEase.Occupancy}
            width={1200}
            alt="Room occupancy dashboard sketch"
            className="rounded-tr-3xl rounded-b-3xl h-80"
          />
          <img
            src={OperateEase.Food}
            width={900}
            alt="Food dashboard sketch"
            className="rounded-tr-3xl rounded-b-3xl h-80"
          />
        </div>
        <p className="font-bold">Solution 2 | Convenience</p>
        <p className="px-10">
          I have designed a system that automates checking and alerting to the
          users
        </p>
        <div className="bg-slate-300 rounded-3xl p-5">
          <img
            src={OperateEase.Explained}
            width={900}
            alt="Food dashboard explained"
          />
        </div>
      </div>
    </div>
  );
}
