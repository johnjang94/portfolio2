import { OperateEase } from "../../../utils/operate";

export default function Insight() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl uppercase">Insight</h3>
      <div className="md:mx-20 space-y-5">
        <p className="px-10">
          According to surveys, most hoteliers prefer an integrative Property
          Management System (PMS).
        </p>
        <img
          src={OperateEase.Insights}
          alt="Insights"
          className="text-3xl rounded-3xl"
        />
      </div>
    </div>
  );
}
