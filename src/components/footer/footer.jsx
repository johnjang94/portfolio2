import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <section className="text-center">
        <h3 className="text-center text-3xl my-5">Explore Further</h3>
        <p className="text-center">CONTINUE YOUR JOURNEY</p>
        <div className="md:grid-cols-3 md:gap-16 justify-center md:flex my-5">
          <Link to="/design">
            <button className="hover:bg-gray-200 rounded-xl hover:brightness-125 p-3">
              <img
                src="src/assets/design-home.jpeg"
                alt="Design Home"
                width={400}
                className="rounded-xl h-80"
              />
              <h3 className="mx-10 my-5">Design Home</h3>
            </button>
          </Link>
          <Link to="/about">
            <button className="hover:bg-gray-200 rounded-xl hover:brightness-125 my-5 md:my-0 p-3">
              <img
                src="src/assets/profile.png"
                alt="My profile"
                width={375}
                className="rounded-xl"
              />
              <h3 className="mx-10 my-5">About me</h3>
            </button>
          </Link>
          <Link to="/development">
            <button className="hover:bg-gray-200 rounded-xl hover:brightness-125 p-3">
              <img
                src="src/assets/development.png"
                alt="Development"
                width={375}
                className="rounded-xl"
              />
              <h3 className="mx-10 my-5">Software Development</h3>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
