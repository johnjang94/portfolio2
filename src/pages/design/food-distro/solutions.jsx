import { foodDistro } from "../../../utils/food-distro";

export default function Solutions() {
  return (
    <div>
      <h3 className="text-xl">SOLUTIONS</h3>
      <div className="md:mx-20 my-3 space-y-10">
        <div className="space-y-3">
          <p className="font-semibold">Solution 1</p>
          <p className="px-10">
            Users can quickly look for available food givers around the area and
            get some detail on the item listing that the food giver has.
          </p>
          <div className="flex grid-cols-3 w-2/6">
            <img
              src={foodDistro.Search}
              alt="Final design for Search function"
              className="rounded-3xl"
            />
            <img
              src={foodDistro.Map}
              alt="Final design for Map"
              className="rounded-3xl"
            />
            <img
              src={foodDistro.Map2}
              alt="Final design for Map"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">Solution 2</p>
          <p className="px-10">
            Users can easily schedule a pick-up with food givers.
          </p>
          <div className="flex grid-cols-3 w-2/6">
            <img
              src={foodDistro.Request}
              alt="Final design for request"
              className="rounded-3xl"
            />
            <img
              src={foodDistro.Request2}
              alt="Final design for request"
              className="rounded-3xl"
            />
            <img
              src={foodDistro.Confirmation}
              alt="Final design for confirmation"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">Solution 3</p>
          <p className="px-10">
            Food-takers can leave a review on the food-givers to alert other
            food-takers about the freshness and the reliability.
          </p>
          <div className="flex grid-cols-3 w-2/6">
            <img
              src={foodDistro.Review}
              alt="Final design for Review"
              className="rounded-3xl"
            />
            <img
              src={foodDistro.Review2}
              alt="Final design for Review2"
              className="rounded-3xl"
            />
            <img
              src={foodDistro.Report}
              alt="Final design for Report"
              className="rounded-3xl"
            />
          </div>
        </div>
        {/* <div className="my-3 space-y-3 md:grid md:grid-cols-3 md:gap-5">
          <img
            src={foodDistro.Order}
            alt="Order page"
            className="rounded-xl md:mt-3"
          />
          <img
            src={foodDistro.Product}
            alt="Product Detail page"
            className="rounded-xl"
          />
          <img
            src={foodDistro.Search}
            alt="Search page"
            className="rounded-xl"
          />
        </div> */}
      </div>
    </div>
  );
}
