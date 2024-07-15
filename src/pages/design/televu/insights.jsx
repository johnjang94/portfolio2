import { televuImages2 } from "../../../utils/televuImages";

export default function Insights() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl">INSIGHTS</h3>
      <div className="md:mx-20 space-y-5">
        <p>
          TeleVU application needs to provide immediate feedback to its users.
        </p>
        <p>
          The design needs to communicate clearly with the users rather than the
          users requesting a tutorial prior to the use.
        </p>
        <img
          src={televuImages2.Login}
          alt="Login page"
          width={900}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
