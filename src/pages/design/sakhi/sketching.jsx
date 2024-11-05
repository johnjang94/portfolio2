import { sakhi } from "../../../utils/sakhi";

export default function InitialSketch() {
  return (
    <div>
      <h3 className="text-xl uppercase">Sketch</h3>
      <div className="md:mx-20 my-5 space-y-5">
        <p>
          To make sure that the design is clear and intuitive, I came up with
          three different types of sketches for different pages.
        </p>
        <p>
          One of the examples is home page. The idea is that the shoppers are
          supposed to understand that they will either a&#41; be redirected to
          view the detail of a certain product or b&#41; be directed to a
          collection page that shows all kinds of products in one specific
          category. Some examples are shown as below:
        </p>
      </div>
      <img
        src={sakhi.HomeVersionOne}
        alt="Home Version 1"
        className="rounded-2xl mx-auto"
      />
      <img
        src={sakhi.HomeVersionTwo}
        alt="Home Version 1"
        className="rounded-2xl mx-auto"
      />
      <img
        src={sakhi.HomeVersionThree}
        alt="Home Version 1"
        className="rounded-2xl mx-auto"
      />
    </div>
  );
}
