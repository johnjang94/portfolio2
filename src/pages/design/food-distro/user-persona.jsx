import { foodDistro } from "../../../utils/food-distro";

export default function UserPersona() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl uppercase">User Persona</h3>
      <div className="md:mx-20 space-y-5">
        <div className="space-y-3">
          <p>
            Both the users who want to donate and the user who is seeking to
            receive the donations share the common concern:
          </p>
          <p className="text-red-500 text-center py-10 text-2xl">
            It is challenging to reach out.
          </p>
          <img
            src={foodDistro.FoodGiver}
            width={900}
            alt="Food Giver"
            className="text-3xl rounded-3xl"
          />
          <img
            src={foodDistro.FoodTaker}
            width={900}
            alt="Food Taker"
            className="text-3xl rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
