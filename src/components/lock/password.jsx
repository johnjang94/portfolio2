import { useState } from "react";
import PropTypes from "prop-types";

export default function Password({ onCorrectPassword }) {
  const PASSWORD = import.meta.env.VITE_PASSCODE;
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.trim() === PASSWORD) {
      onCorrectPassword();
    } else {
      setErrorMessage("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="py-10 md:w-3/6 w-5/6 mx-auto bg-slate-300 rounded-3xl">
      <h1 className="text-center text-3xl my-10">NDA</h1>
      <div className="p-20 text-center">
        <p>Please make your inquiry for the password.</p>
      </div>
      {errorMessage && <p className="text-[#FF00FF]">{errorMessage}</p>}
      <form
        className="flex items-center mb-3 w-4/6 mx-auto"
        onSubmit={handleSubmit}
      >
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
  );
}

Password.propTypes = {
  onCorrectPassword: PropTypes.func.isRequired,
};
