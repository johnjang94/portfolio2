export default function Takeaways() {
  return (
    <div>
      <h3 className="text-xl">KEY TAKEAWAYS</h3>
      <div className="md:mx-20 my-3 space-y-3">
        <p className="font-semibold">
          New designs{" "}
          <span className="text-red-500">did not necessarily resolve</span>{" "}
          supply & demand issue.
        </p>
        <p className="px-5 text-gray-500">
          There were times that the food takers wanted certain items from the
          local communities. Unfortunately, the application{" "}
          <span className="text-red-500">was not able to</span> fill the gap
          between supply and demand when the balance was broken.
        </p>
      </div>
      <div className="md:mx-20 my-3 space-y-3">
        <p className="font-semibold">The impact of stigma is real</p>
        <p className="px-5 text-gray-500">
          Although it was not mentioned in the research outcome, the idea of
          sharing food was perceive as similar to what the food bank does and
          many locals who need help were{" "}
          <span className="text-red-500">hesitant to reach out</span>. More
          marketing to raise awareness on locals helping locals seemed necessary
          to reduce the food waste.
        </p>
      </div>
    </div>
  );
}
