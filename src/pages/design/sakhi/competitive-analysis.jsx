import { sakhi } from "../../../utils/sakhi";

export default function CompetitiveAnalysis() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl uppercase">Competitive Analysis</h3>
      <div className="md:mx-20 space-y-5">
        <ul className="list-disc space-y-5">
          <p>
            As The Sakhi is a new start-up brand, we needed to understand what
            existing brands offer to shoppers in-depth first. We have decided to
            conduct a thorough investigation in terms of the following
            categories on the following 7 of direct or indirect benchmarked
            companies for The Sakhi:
          </p>
          <div className="space-y-2">
            <li className="mx-10">Product Quality</li>
          </div>
          <div className="space-y-2">
            <li className="mx-10">Price</li>
          </div>
          <div className="space-y-2">
            <li className="mx-10">Categorization</li>
          </div>
          <div className="space-y-2">
            <li className="mx-10">Web Usability</li>
          </div>
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
