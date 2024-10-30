import { foodDistro } from "../../../utils/food-distro";

export default function StyleGuide() {
  return (
    <div>
      <h3 className="text-xl uppercase">Style Guide</h3>
      <ul className="md:mx-20 my-5 space-y-5 list-decimal">
        <p className="px-10">
          We created the fonts, the colors, the buttons and other interactive
          assets for Food Distro organization.
        </p>
        <img
          src={foodDistro.Fonts}
          alt="Food Distro fonts"
          width={600}
          className="rounded-2xl mx-auto"
        />
        <img
          src={foodDistro.Component}
          alt="Food Distro component"
          width={600}
          className="rounded-2xl mx-auto"
        />
      </ul>
    </div>
  );
}
