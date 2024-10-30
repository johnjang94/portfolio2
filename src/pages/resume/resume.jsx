import { useState } from "react";
import LOCKED from "../../components/lock/resume-lock";

export default function Resume() {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const handleCorrectPassword = () => {
    setIsPasswordCorrect(true);
  };

  return (
    <section>
      {isPasswordCorrect && (
        <div className="my-10">
          <iframe
            className="pdf mx-auto"
            src="/product_designer.pdf"
            width="800"
            height="500"
          ></iframe>
        </div>
      )}
      {!isPasswordCorrect && (
        <section className="w-full my-28">
          <LOCKED onCorrectPassword={handleCorrectPassword} />
        </section>
      )}
    </section>
  );
}
