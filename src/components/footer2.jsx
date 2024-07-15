import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function OtherMenu() {
  return (
    <div className="md:flex md:items-center md:space-x-40 justify-center space-y-10 md:space-y-0 mx-8 md:mx-0">
      <Link to="/">
        <div className="flex items-center border border-[#F8481C] p-5 rounded-2xl gap-2 text-blue-500 hover:underline">
          <button>Check out other projects</button>
          <button>
            <FaLongArrowAltRight />
          </button>
        </div>
      </Link>
      <a href="mailto:jscolbe9675@gmail.com">
        <div className="flex items-center border border-[#F8481C] p-5 rounded-2xl gap-2 text-blue-500 hover:underline">
          <button>Contact me for the full detail of the project</button>
          <button>
            <FaLongArrowAltRight />
          </button>
        </div>
      </a>
    </div>
  );
}
