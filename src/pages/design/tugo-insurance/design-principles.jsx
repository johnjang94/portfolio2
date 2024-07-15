import { tugoInsurance } from "../../../utils/tugoinsuranceImages";
import { TbTargetArrow } from "react-icons/tb";
import { RiGuideFill } from "react-icons/ri";

export default function Principles() {
  return (
    <div>
      <div className="space-y-5">
        <h3 className="text-xl">DESIGN PRINCIPLES</h3>
        <div className="md:mx-20 space-y-5">
          <div>
            <div className="flex items-start gap-2">
              <p className="font-semibold">Focused Content</p>
              <TbTargetArrow className="text-red-500 text-xl" />
            </div>
            <p className="p-5 text-gray-500">
              effectively use categorization and simplify designs to lower
              cognitive load for travelers
            </p>
          </div>
          <div>
            <div className="flex items-start gap-2">
              <p className="font-semibold">Clear Guidance</p>
              <RiGuideFill className="text-blue-500 text-xl" />
            </div>
            <p className="p-5 text-gray-500">
              clearly indicate how travelers can find more information on
              different types of insurance packages, how they can sign up, and
              how they can reach out to the customer service with a click.
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 space-y-3">
        <h3 className="text-xl my-5">SITE MAP</h3>
        <p>
          To ensure straight-forward interaction with the travelers, we created
          a concrete idea of the flow
        </p>
        <img
          src={tugoInsurance.SiteMap}
          alt="Site Map"
          className="rounded-xl mx-auto"
        />
      </div>
    </div>
  );
}
