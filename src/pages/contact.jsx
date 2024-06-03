import { useState } from "react";
import { MdOutlineSend } from "react-icons/md";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const SERVER = import.meta.env.SERVER;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${SERVER}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.text();
      alert(result);
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="md:my-5 my-28 md:py-4 px-10">
      <h1 className="md:text-3xl text-lg md:my-5 my-20 text-center">
        Stay in touch with me!
      </h1>
      <div className="w-full max-w-lg mx-auto">
        <form id="registrationForm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              className="w-full rounded-lg p-1"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email address</label>
            <br />
            <input
              type="text"
              id="email"
              className="w-full rounded-lg p-1"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="inquiry">Inquiry Title</label>
            <br />
            <input
              type="text"
              id="inquiry"
              className="w-full rounded-lg p-1"
              value={formData.inquiry}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              id="message"
              className="w-full rounded-lg p-1"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="right-0">
            <button
              type="submit"
              className="p-2 bg-blue-400 rounded-xl text-center flex items-center gap-2"
            >
              Send <MdOutlineSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
