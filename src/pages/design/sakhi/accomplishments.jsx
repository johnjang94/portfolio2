export default function Accomplishments() {
  return (
    <div>
      <h3 className="text-xl uppercase">Accomplishments</h3>
      <div className="md:mx-20 my-3">
        <ul className="space-y-5 list-disc">
          <p>
            We have successfully reached our target by offering the following
            differentiated services:
          </p>
          <li className="px-10">
            Shoppers can place an order in{" "}
            <span className="text-blue-500">maximum 3-clicks</span>
          </li>
          <li className="px-10">
            We reduced the amount of time that the shoppers use in browsing and
            comparison different products by{" "}
            <span className="text-blue-500">60%</span> of time, which is an
            average of <span className="text-blue-500">5 minutes</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
