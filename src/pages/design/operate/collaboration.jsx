import { OperateEase } from "../../../utils/operate";

export default function Collaboration() {
  return (
    <div>
      <h3 className="text-xl uppercase">Development In Progress</h3>
      <p className="md:mx-20 my-5">
        As I am familiar with HTML, CSS, JavaScript, I helped the team to leave
        a good web design annotation note and I also initiated development
        environment setup.
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
