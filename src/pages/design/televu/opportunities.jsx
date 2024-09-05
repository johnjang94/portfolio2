import { televu } from "../../../utils/televu";

export default function Opportunity() {
  return (
    <div>
      <h3 className="text-xl uppercase">Opportunity</h3>
      <ul className="md:mx-20 my-5 space-y-5 list-decimal">
        <li>Distinguish navigation</li>
        <p className="px-5">
          The current navigation for the smart glass is located on the left
          side. However, the size, color, and the texture of all the icons are{" "}
          {/* */}
          <span className="text-red-500">the same</span> compared to the
          navigation menu for the desktop browser control. We have decided to
          make some changes for the mobile controls.
        </p>
        <li>Custom Design</li>
        <p className="px-5">
          The current design{" "}
          <span className="text-red-500">does not follow</span> the
          industry-standard. There are some indicators including
          &#34;recording&#34; that are unnecessarily big.
        </p>
        <li>Enhanced Human-Computer Interaction</li>
        <p className="px-5">
          The current system{" "}
          <span className="text-red-500">does not properly interact</span> with
          the users. For example, the system{" "}
          <span className="text-red-500">does not acknowledge</span> what is
          happening after the user initials a call to dial another clinician. In
          addition, the user {/* */}
          <span className="text-red-500">does not get notified</span> regarding
          where they can find recorded video footages after the recorded session
          is finished.
        </p>
        <div className="p-3 bg-white rounded-3xl">
          <img
            src={televu.TwoNavigations}
            alt="Two navigation menus"
            width={900}
            className=" text-3xl"
          />
        </div>
        <div className="p-3 bg-white rounded-3xl">
          <img
            src={televu.OriginalVideo}
            alt="Original Video"
            width={900}
            className=" text-3xl"
          />
        </div>
      </ul>
    </div>
  );
}
