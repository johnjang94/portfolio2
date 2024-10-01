import { sakhi } from "../../../utils/sakhi";

export default function Developers() {
  return (
    <div>
      <h3 className="text-xl uppercase">Shopify Developers</h3>
      <div className="md:mx-20 my-5 space-y-5">
        <p>
          We liaised with the shopify developers to understand and better design
          the feasibility of the customizations we bring to the table:
        </p>
        <img
          src={sakhi.Shopify}
          alt="Shopify Developers"
          width={1200}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
