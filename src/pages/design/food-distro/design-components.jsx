import { foodDistroImages } from "../../../utils/foodDistroImages";

export default function DesignComponents() {
  return (
    <div>
      <h3 className="text-xl">DESIGN SYSTEM</h3>
      <div className="md:mx-20 my-5">
        <p>
          We created the design system that can be a reference for the future
          design team as well.
        </p>
        <img
          src={foodDistroImages.DesignComponent}
          alt="Design Component"
          className="m-2 rounded-2xl"
        />
      </div>
    </div>
  );
}
