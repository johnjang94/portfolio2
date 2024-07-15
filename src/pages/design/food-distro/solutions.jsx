import { foodDistroImages } from "../../../utils/foodDistroImages";

export default function Solutions() {
  return (
    <div>
      <h3 className="text-xl">SOLUTIONS</h3>
      <div className="md:mx-20 my-3 space-y-3">
        <p className="font-semibold">
          We have landed on the following designs:
        </p>
        <ul className="list-disc px-5 text-gray-500 space-y-3">
          <li>you can easily notice the available items in the local area</li>
          <li>
            you get the detail of the food category, food item, possible pick-up
            date & time, and the rating of the giver
          </li>
        </ul>
        <div className="my-3 space-y-3 md:grid md:grid-cols-3 md:gap-5">
          <img
            src={foodDistroImages.Order}
            alt="Order page"
            className="rounded-xl md:mt-3"
          />
          <img
            src={foodDistroImages.Product}
            alt="Product Detail page"
            className="rounded-xl"
          />
          <img
            src={foodDistroImages.Search}
            alt="Search page"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
