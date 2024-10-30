import { OperateEase } from "../../../utils/operate";

export default function Solutions() {
  return (
    <div>
      <h3 className="text-xl uppercase">Solutions</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <p className="font-bold">Solution 1 | Simplification</p>
        <p className="px-10">
          Users have a specialized, simple, and focused dashboard for different
          types of inventory (room occupancy, Food & Beverage materials)
        </p>
        <div className="gap-5 space-y-5 bg-slate-300 rounded-3xl p-5">
          <img
            src={OperateEase.Occupancy}
            alt="Room occupancy dashboard sketch"
            className="mx-auto"
          />
          <img
            src={OperateEase.Food}
            alt="Food dashboard sketch"
            className="mx-auto"
          />
        </div>
        <p className="font-bold">Solution 2 | Convenience</p>
        <p className="px-10">
          Users can check / modify room rates, the cost on goods sold, list of
          suppliers, order information, etc. on a click of a button from each
          dashboard
        </p>
        <div className="bg-slate-300 rounded-3xl space-y-5 p-5">
          <img
            src={OperateEase.Cost}
            width={800}
            alt="Cost on Goods Sold"
            className="rounded-2xl"
          />
          <img
            src={OperateEase.Room}
            width={800}
            alt="Room"
            className="rounded-2xl"
          />
          <img
            src={OperateEase.Statistics}
            width={800}
            alt="Statistics"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
