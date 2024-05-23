import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [inputBg, setInputBg] = useState("bg-gray-200");
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const CORRECT_PASSWORD = import.meta.env.VITE_PASSWORD;
  const [errorMessage, setErrorMessage] = useState("");
  const [attemptCount, setAttemptCount] = useState(0);

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
    if (password === CORRECT_PASSWORD) {
      navigate("/tugo");
    } else {
      setAttemptCount(attemptCount + 1);
      const remainingAttempts = 5 - attemptCount - 1;
      if (remainingAttempts > 0) {
        setErrorMessage(
          `Incorrect Password. ${remainingAttempts} more attempts available`
        );
      } else {
        navigate("/home");
      }
    }
  };

  return (
    <div onSubmit={handleSubmit}>
      <div className="p-28 rounded-2xl bg-white gap-10 my-10 mx-auto w-fit opacity-border">
        <h1 className="text-center mb-20 text-4xl">Password?</h1>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form className="flex items-center mb-3">
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
          <span className="text-red-500">please send me a message!</span>
        )}
      </div>
    </div>
  );
}
