export default function Opportunity() {
  return (
    <div>
      <h3 className="text-xl uppercase">Opportunity</h3>
      <ul className="md:mx-20 my-5 space-y-5 list-decimal">
        <li>Friendly description</li>
        <p className="px-5 text-gray-400">
          The Sakhi entails information about the occasion, the product
          material, the meaning behind the product, and a clear instruction on
          how to keep the clothes in good condition.
        </p>
        <div className="px-40 py-40 bg-slate-300 rounded-2xl">
          <p>This is the picture box where the description detail goes in</p>
        </div>
        <li>Convenience</li>
        <p className="px-5 text-gray-400">
          The Sakhi provides simple ways to compare, save, and place an order.
        </p>
        <div className="px-40 py-40 bg-slate-300 rounded-2xl">
          <p>This is the picture box where the convenience goes in</p>
        </div>
      </ul>
    </div>
  );
}
