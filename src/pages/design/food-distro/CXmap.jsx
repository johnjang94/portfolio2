import { foodDistroImages } from "../../../utils/foodDistroImages";

export default function CXmap() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl">CX Maps</h3>
      <div className="md:mx-20">
        <p>
          We have drawn two different user flows for the food giver and the food
          taker.
        </p>
      </div>
      <img
        src={foodDistroImages.userflow1}
        alt="Userflow 1"
        className="rounded-xl"
      />
      <img
        src={foodDistroImages.userflow2}
        alt="Userflow 2"
        className="rounded-xl"
      />
      <img
        src={foodDistroImages.userflow3}
        alt="Userflow 3"
        className="rounded-xl"
      />
    </div>
  );
}
