import { useEffect } from "react";
import { TuGoNav } from "../../components/designSubNav";

export default function Tugo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TuGoNav />
    </div>
  );
}
