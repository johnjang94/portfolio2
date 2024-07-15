import { tugoInsurance } from "../../../utils/tugoinsuranceImages";

export default function Solutions() {
  return (
    <div>
      <h3 className="text-xl">SOLUTIONS</h3>
      <div className="md:mx-20 my-3">
        <p className="font-semibold">
          The winner design looked like as follows, but why?
        </p>
        <ul className="list-disc mx-10">
          <li>highlighted key points yet simple</li>
          <li>convenient to claim coverages</li>
        </ul>
        <div className="my-3 space-y-3">
          <img
            src={tugoInsurance.Homepage}
            alt="Home page final design"
            className="rounded-xl"
          />
          <img
            src={tugoInsurance.Insurance}
            alt="Insurance page final design"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
