import { Link } from "react-router-dom";
import DesignHomeNav from "../../components/second-nav/design/design-home-nav";
import { useEffect } from "react";

export default function DesignHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <DesignHomeNav />
      <section className="bg-cover my-10 py-10">
        <h2 className="md:text-9xl text-7xl my-2 text-center">TELEVU</h2>
        <img
          src="../src/assets/televu.png"
          alt="TeleVU"
          width={650}
          className="mx-auto p-3 rounded-xl"
        />
        {/* I need to center the following button */}
        <div className="text-center">
          <Link to="/televu">
            <button className="bg-black hover:bg-white text-white hover:text-black p-3 rounded-full my-3">
              MORE INFO
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
