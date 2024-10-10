import { OperateEase } from "../../../utils/operate";

export default function UserPersona() {
  return (
    <div>
      <h3 className="text-xl uppercase">User Persona</h3>
      <p className="md:mx-20 mt-5">
        Regardless of the hotel size and rating, many hotelier managers have the
        similar voice:
      </p>
      <p className="my-5 text-center text-red-500">
        &#34;Inventory management is difficult to control.&#34;
      </p>
      <img
        src={OperateEase.Persona}
        alt="User Persona Example"
        className="text-3xl rounded-3xl"
      />
    </div>
  );
}
