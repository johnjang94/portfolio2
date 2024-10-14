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
            categorized questions on the following 7 of direct or indirect
            benchmarked companies for The Sakhi:
          </p>
          <div className="space-y-2">
            <li className="px-10">Product Quality</li>
            <p className="px-20">
              Q. Do the products these brands label as Premium or Non-Premium
              meet the shoppers&#39; expectations of what they consider Premium
              or Non-Premium?
            </p>
          </div>
          <div className="space-y-2">
            <li className="px-10">Price</li>
            <p className="px-20">
              Q. Do shoppers feel that the prices of both Premium and
              Non-Premium products meet their expectations of what is considered
              &#39;affordable&#39; when comparing value and price?
            </p>
          </div>
          <div className="space-y-2">
            <li className="px-10">Categorization</li>
            <p className="px-20">
              Q. How do these brands classify different products?
            </p>
            <p className="px-20">
              Q. Do these classifications practically guide the shoppers to
              discover the products that they had in mind?
            </p>
          </div>
          <div className="space-y-2">
            <li className="px-10">Web Usability</li>
            <p className="px-20">
              Q. Does the layout, the specification, and the detail of these
              brands&#39; digital introductions effectively align with their
              internal goals?
            </p>
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
