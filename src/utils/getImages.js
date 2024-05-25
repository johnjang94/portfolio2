import Ruminate from "../assets/ruminate.png";
import KBlock from "../assets/kblock.png";
import Portfolio4 from "../assets/portfolio-v4.png";

const images = {
  Ruminate,
  KBlock,
  Portfolio4,
};

export default function getImage(imageName) {
  return images[imageName] || null;
}
