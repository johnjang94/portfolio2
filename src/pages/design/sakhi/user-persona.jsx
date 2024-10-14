import { sakhi } from "../../../utils/sakhi";

export default function UserPersona() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl uppercase">User Persona</h3>
      <div className="md:mx-20 space-y-5">
        <div className="space-y-3">
          <p>
            As mentioned earlier, The Sakhi wants to reach out to many
            communities and the following comments seem the main challenges that
            shoppers face from other established platforms:
          </p>
          <ul className="text-red-500 text-center py-10 space-y-3">
            <li>&#34;There are not enough categories.&#34;</li>
            <li>&#34;Wish there is a way to compare.&#34;</li>
            <li>&#34;There are not enough visuals.&#34;</li>
          </ul>
          <img
            src={sakhi.Caterina}
            width={900}
            alt="Caterina"
            className="text-3xl rounded-3xl"
          />
          <img
            src={sakhi.Vegha}
            width={900}
            alt="Vegha"
            className="text-3xl rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
