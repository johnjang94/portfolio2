import Ruminate from "../assets/development/ruminate.png";
import KBlock from "../assets/development/kblock.png";
import Portfolio4 from "../assets/development/portfolio-v4.png";

const images = {
  Ruminate,
  KBlock,
  Portfolio4,
};

export default function getImage(imageName) {
  return images[imageName] || null;
}
