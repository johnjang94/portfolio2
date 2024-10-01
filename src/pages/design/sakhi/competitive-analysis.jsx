import { sakhi } from "../../../utils/sakhi";

export default function CompetitiveAnalysis() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl uppercase">Competitive Analysis</h3>
      <div className="md:mx-20 space-y-5">
        <ul className="list-disc space-y-3">
          <p>7+ brands were thoroughly assessed and examined in terms of...</p>
          <li className="px-10">price</li>
          <li className="px-10">product quality</li>
          <li className="px-10">categorization</li>
          <li className="px-10">web usability</li>
        </ul>
        <img
          src={sakhi.competition}
          alt="Competitive analysis"
          width={1000}
          className="rounded-2xl mx-auto"
        />
      </div>
    </div>
  );
}
