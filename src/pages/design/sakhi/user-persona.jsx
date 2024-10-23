import { sakhi } from "../../../utils/sakhi";

export default function UserPersona() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl uppercase">User Persona</h3>
      <div className="md:mx-20 space-y-5">
        <div className="space-y-3">
          <p>
            In addition to the competitive analysis, we needed the voices on
            what specific issues the potential shoppers were currently
            experiencing:
          </p>
          <ul className="text-red-500 text-center py-10 space-y-3">
            <li>
              &#34;Many Indian platforms have a complex navigation menu or
              filter.&#34;
            </li>
            <li>&#34;Not many brands offer comparison among products.&#34;</li>
            <li>
              &#34;Visuals that they have do not speak enough messages.&#34;
            </li>
          </ul>
          <img
            src={sakhi.Caterina}
            width={900}
            alt="Caterina"
            className="text-3xl rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
