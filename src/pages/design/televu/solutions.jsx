import { televuImages2 } from "../../../utils/televuImages";

export default function Solutions() {
  return (
    <div>
      <h3 className="text-xl">SOLUTIONS</h3>
      <div className="md:mx-20 my-3">
        <p className="font-semibold">
          After a few design iterations, the following designs were chosen by
          the stakeholder:
        </p>
        <ul className="list-disc px-5 space-y-3 my-3 text-gray-500">
          <li>Simplified login</li>
          <li>
            Clear indication of different menus for web browser control and
            video control
          </li>
        </ul>
        <div className="space-y-5 my-3">
          <img
            src={televuImages2.List}
            alt="List page"
            width={900}
            className="rounded-xl"
          />
          <img
            src={televuImages2.Report}
            alt="Insurance page final design"
            width={900}
            className="rounded-xl"
          />
          <img
            src={televuImages2.Video}
            alt="Insurance page final design"
            width={900}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
