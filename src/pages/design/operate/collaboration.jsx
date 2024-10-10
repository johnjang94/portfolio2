import { OperateEase } from "../../../utils/operate";

export default function Collaboration() {
  return (
    <div>
      <h3 className="text-xl uppercase">Developers Workshop</h3>
      <p className="md:mx-20 my-5">
        My colleagues and I have liaised with web developers and we left good
        annotation notes for CSS and prototyping
      </p>
      <img
        src={OperateEase.Developers}
        alt="CSS Example"
        width={800}
        className="rounded-3xl mx-auto"
      />
    </div>
  );
}
