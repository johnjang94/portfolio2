export default function Overview() {
  return (
    <div>
      <h3 className="text-xl uppercase">Overview</h3>
      <div className="md:mx-20 my-3">
        <div>
          <p className="font-semibold">Problem</p>
          <div className="p-5">
            <p>
              Shoppers are not convinced that The Sahki as an e-commerce
              platform is a reliable online platform.
            </p>
            <p>How do we build the trusteeship with the shoppers?</p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Aimed Objectives</p>
          <div className="p-5">
            <ul className="px-5 space-y-3 list-decimal">
              <li>Re-imagine the Exploration</li>
              <p className="px-5">redesign home, product detail, cart, etc.</p>
              <p className="px-5">redesign the user flow</p>
              <li>Renovate vendor information</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
