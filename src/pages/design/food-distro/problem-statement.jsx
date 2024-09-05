import { foodDistro } from "../../../utils/food-distro";

export default function ProblemStatement() {
  return (
    <div>
      <h3 className="text-xl">PROBLEM STATEMENT</h3>
      <div className="md:mx-20 my-5">
        <p>
          Young generation tends to over-purchase food items and ends-up
          throwing away relatively more food to the trash compared to the older
          generations.
        </p>
        <img
          src={foodDistro.FoodWaste}
          alt="Food Waste"
          width={900}
          className="my-5 rounded-3xl"
        />
        <p>
          Even though many of them share this understanding that the food waste
          is not good, the rate of food waste remained high.
        </p>
        <img
          src={foodDistro.Barriers}
          alt="Food Waste"
          width={900}
          className="my-5 rounded-3xl"
        />
      </div>
    </div>
  );
}
