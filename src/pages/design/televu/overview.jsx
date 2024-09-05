export default function Overview() {
  return (
    <div>
      <h3 className="text-xl uppercase">Overview</h3>
      <div className="md:mx-20 my-3">
        <div>
          <p className="font-semibold">Problem</p>
          <p className="p-5">
            The drop-out rate on the use of the video-call that TeleVU
            Innovation software offers records about{" "}
            <span className="text-red-500">80%</span>.
          </p>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <p className="p-5">
            The drop-out rate has been{" "}
            <span className="text-blue-500">decreased to 20%</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
