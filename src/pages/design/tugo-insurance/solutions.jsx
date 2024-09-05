import { tugoInsurance } from "../../../utils/tugo-insurance";

export default function Solutions() {
  return (
    <div>
      <h3 className="text-xl uppercase">Design Results</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <p className="px-5 space-y-3">
          We renovated the home page with buttons to reach out to the customer
          service faster or be able to claim the insurance assistance with a
          click of a button.
        </p>
        <img
          src={tugoInsurance.Home}
          width={900}
          alt="Home"
          className="rounded-3xl"
        />
        <p className="px-5 space-y-3">
          We created a dedicated insurance package page where the users can have
          an adequate amount of information with a simple-click from the home
          page.
        </p>
        <img
          src={tugoInsurance.Insurance}
          width={900}
          alt="Insurance"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
}
