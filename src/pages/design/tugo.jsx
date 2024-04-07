import { useEffect } from "react";
import TugoNav from "../../components/second-nav/design/tugo-nav";

export default function Tugo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TugoNav />
    </div>
  );
}
