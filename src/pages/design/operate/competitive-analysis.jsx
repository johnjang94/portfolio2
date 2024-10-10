import { OperateEase } from "../../../utils/operate";

export default function CompetitiveAnalysis() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl uppercase">Competitive Analysis</h3>
      <div className="md:mx-20 space-y-5">
        <ul className="list-disc space-y-3">
          <p className="font-bold">
            When it comes to the inventory management, the direct competitor
            offers useful information such as
          </p>
          <li className="px-10">sales and revenues</li>
          <li className="px-10">key statistics</li>
          <li className="px-10">operation expenses</li>
        </ul>
        <img
          src={OperateEase.Competition}
          alt="Competitive analysis"
          width={1200}
          className="rounded-2xl mx-auto"
        />
        <ul className="list-disc space-y-3 my-5">
          <p>
            Still, they <span className="text-red-500">fall short</span> on the
            following points despite the benefits:
          </p>
          <li className="px-10">
            overwhelming amount of information on the dashboard
          </li>
          <li className="px-10">customization is limited</li>
        </ul>
      </div>
    </div>
  );
}
