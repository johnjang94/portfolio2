import { tugoInsurance } from "../../../utils/tugoinsuranceImages";

export default function Insights() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl">INSIGHTS</h3>
      <div className="md:mx-20 space-y-5">
        <p>
          According to SWOT and competitive analysis, some of the user flows and
          the UIs were unnecessarily repeating.
        </p>
        <img
          src={tugoInsurance.INSIGHT1}
          alt="Insight 1"
          className="rounded-xl mx-auto"
        />
        <p>
          According to early surveys, the potential travelers were confused with
          a few of repeated use of terminologies and too many options to choose
          the insurance.
        </p>
        <img
          src={tugoInsurance.INSIGHT2}
          alt="Insight 2"
          className="rounded-xl mx-auto"
        />
        <p>
          Reasons to <span className="text-green-500">freshen up</span> the look
          of TuGo Web Application:
        </p>
        <ul className="p-5 space-y-5">
          <li>Manuals needed to be more simplistic and intuitive</li>
          <li>Travelers were exposed to the irrelevant content</li>
        </ul>
      </div>
    </div>
  );
}
