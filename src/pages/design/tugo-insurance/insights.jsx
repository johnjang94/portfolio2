import { tugoInsurance } from "../../../utils/tugoinsuranceImages";

export default function Insights() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl">INSIGHTS</h3>
      <div className="md:mx-20 space-y-5">
        <ul>
          TuGo Web application recorded{" "}
          <span className="text-red-500">50% bounce-off rate</span> during the
          initial research.
          <div className="space-y-2 my-5">
            <li className="text-slate-500 px-10">
              many participants could not actually find information on packages
              because they were not directed to the page where each package was
              introduced with detail (i.e. what does &#34;Emergency Medical
              Insurance include?&#34;)
            </li>
            <img
              src={tugoInsurance.INSIGHT1}
              alt="Insight 1"
              className="rounded-2xl"
            />
          </div>
          <div className="space-y-2 my-5">
            <li className="text-slate-500 px-10">
              many participants did not understand the reason behind the submenu
              that has different status categories (i.e. Canadian Residents,
              Seniors, Visitors, etc.) because the list of the insurance
              packages that are offered looked the same.
            </li>
            <img
              src={tugoInsurance.INSIGHT2}
              alt="Insight 2"
              className="rounded-2xl"
            />
          </div>
          <div className="space-y-2 my-5">
            <li className="text-slate-500 px-10">
              many participants did not understand why they need to indicate the
              travel dates or who is traveling when they only want to learn more
              about the features of each insurance product itself
            </li>
            <img
              src={tugoInsurance.INSIGHT3}
              alt="Insight 3"
              className="rounded-2xl"
            />
          </div>
        </ul>
      </div>
    </div>
  );
}
