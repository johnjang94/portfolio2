import { RiInstagramFill } from "react-icons/ri";
import HobbyNav from "../../components/second-nav/about/hobby-nav";
import { useEffect } from "react";

export default function Hobby() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HobbyNav />
      <div>
        <h1 className="text-center my-20 md:text-2xl text-4xl px-10 md:px-0">
          When I am not designing or coding, I do...
        </h1>
        <div>
          <div className="flex justify-between mb-3 px-10 items-center">
            <h1 className="text-3xl">Dance</h1>
            <a href="https://www.instagram.com/itsdancing_j/">
              <RiInstagramFill className="text-3xl bg-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%) bg-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%) bg-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)" />
            </a>
          </div>
          <div className="px-10 md:grid-cols-3 md:flex gap-5">
            <a href="https://www.instagram.com/p/CHS2d3BjO4mvHTW_ckC6NPfOZKOZ_uYZAVkc7s0/">
              <img
                src="../src/assets/black_swan.png"
                alt="Black Swan Cover"
                width={500}
                className="rounded-xl h-80"
              />
            </a>
            <a href="https://www.instagram.com/p/CsjRqvxrhc3/">
              <img
                src="../src/assets/BTBT.png"
                alt="BTBT"
                width={500}
                className="rounded-xl h-80 my-5 md:my-0"
              />
            </a>
            <a href="https://www.instagram.com/p/C1kGlqNrQva/">
              <img
                src="../src/assets/batter_up.png"
                alt="Batter_Up"
                width={500}
                className="rounded-xl h-80"
              />
            </a>
          </div>
        </div>
        <div className="flex justify-between my-5 px-10 items-center">
          <h1 className="text-3xl">Travel Blog</h1>
          <a href="https://www.instagram.com/itsfoodie_j/">
            <RiInstagramFill className="text-3xl" />
          </a>
        </div>
        <div className="px-10 md:grid-cols-3 md:flex gap-5">
          <a href="https://www.instagram.com/p/Cf_60OEAbhf/">
            <img
              src="../src/assets/banff.png"
              alt="Banff"
              width={500}
              className="rounded-xl h-80"
            />
          </a>
          <a href="https://www.instagram.com/p/CgLbAABgv1F/">
            <img
              src="../src/assets/islands.png"
              alt="Islands"
              width={500}
              className="rounded-xl h-80 my-5 md:my-0"
            />
          </a>
          <a href="https://www.instagram.com/p/Cf_7azVOy0E/?img_index=1">
            <img
              src="../src/assets/park.png"
              alt="Park"
              width={500}
              className="rounded-xl h-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
