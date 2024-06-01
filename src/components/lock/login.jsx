import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const TUGO = import.meta.env.VITE_TUGO;
  const DISTRO = import.meta.env.VITE_DISTRO;
  const [errorMessage, setErrorMessage] = useState("");
  const [attemptCount, setAttemptCount] = useState(0);

  const [inputBg, setInputBg] = useState("bg-gray-200");
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [password, setPassword] = useState("");

  const handleFocus = () => {
    setInputBg("bg-white");
  };

  const handleBlur = () => {
    setInputBg("bg-gray-200");
  };

  const handleClick = () => {
    setShowMessage(true);
    setShowButton(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (attemptCount >= 5) {
      setErrorMessage("You have reached the maximum number of attempts.");
      navigate("/home");
      return;
    }
    if (password === TUGO) {
      navigate("/tugo");
    } else if (password === DISTRO) {
      navigate("/food");
    } else {
      setAttemptCount(attemptCount + 1);
      const remainingAttempts = 5 - attemptCount - 1;
      if (remainingAttempts > 0) {
        setErrorMessage(`Please check my resume.`);
      } else {
        navigate("/home");
      }
    }
  };

  return (
    <div>
      <div className="text-white my-52 md:my-28 md:w-2/6 w-full p-10 mx-auto">
        <h1 className="text-center mb-20 text-4xl">Password?</h1>
        {errorMessage && <p className="text-[#FF00FF]">{errorMessage}</p>}
        <form className="flex items-center mb-3" onSubmit={handleSubmit}>
          <input
            type="password"
            className={`p-2 w-full rounded-l-lg ${inputBg} hover:bg-slate-100`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="p-2 rounded-r-lg bg-cyan-400">
            OK
          </button>
        </form>
        {showButton && (
          <button onClick={handleClick} className="text-blue-300 underline">
            Forgot password
          </button>
        )}
        {showMessage && (
          <span className="text-[#FF00FF]">please check my resume!</span>
        )}
      </div>
    </div>
  );
}
