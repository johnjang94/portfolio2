import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const PASSWORD = import.meta.env.VITE_PASSWORD;
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.trim() === PASSWORD) {
      navigate("/sahki");
    } else {
      setErrorMessage("Incorrect password. Please try again.");
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
            className="p-2 w-full rounded-l-lg bg-gray-200 hover:bg-slate-100 text-black"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            aria-label="Password Input"
          />
          <button type="submit" className="p-2 rounded-r-lg bg-cyan-400">
            OK
          </button>
        </form>
      </div>
    </div>
  );
}
