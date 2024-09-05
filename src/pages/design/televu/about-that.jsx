export default function AboutThat() {
  return (
    <div>
      <h3 className="text-xl uppercase">About That</h3>
      <div className="md:mx-20 my-5 space-y-5">
        <p>What were the project objectives?</p>
        <ul className="list-decimal px-5 space-y-3">
          <li>Improve the interaction with users</li>
          <div className="px-5 space-y-2">
            <p>Many users want to have immediate feedback</p>
            <p className="text-gray-500">
              The average time to load the video screen was 5 seconds, but there
              was no immediate message that alerted the users that the screen
              was loading.
            </p>
          </div>
          <li>Simplify the controls</li>
          <div className="px-5 space-y-2">
            <p>
              Users want a clear difference between two different layers of
              menus in the video-call screen
            </p>
            <p className="text-gray-500">
              There was a layer of menu with controls for desktop browser on the
              top of the video-call window and another layer of menu for the
              mobile screen on the left side. The major problem was that it was
              unclear which navigation menu controls the video-call window on
              the desktop browser and which one is designated for the mobile
              screen.
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
}
