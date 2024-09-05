import { foodDistro } from "../../../utils/food-distro";

export default function CompetitiveAnalysis() {
  return (
    <div>
      <h3 className="text-xl uppercase">Competitive Analysis</h3>
      <div className="md:mx-20 my-5 space-y-5">
        <p>
          This was a way to widen our perspectives for inspiration and identify
          gaps that other brands have.
        </p>
        <img
          src={foodDistro.CompetitiveAnalysis}
          alt="Competitive analysis"
          width={900}
          className="text-3xl rounded-3xl"
        />
      </div>
    </div>
  );
}
