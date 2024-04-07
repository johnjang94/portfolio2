import { MdOutlineSend } from "react-icons/md";
// import { useState, useEffect } from "react"; // Import useState and useEffect
// import "./contact.css";

export default function Contact() {
  // const [isContactClicked, setIsContactClicked] = useState(false); // State to track if contact button was clicked

  // useEffect(() => {
  //   const contact_element = document.getElementById("contact");
  //   contact_element.classList.add("contact-animate");
  // }, []);

  // const handleCloseClick = () => {
  //   const contact_element = document.getElementById("contact");
  //   contact_element.classList.remove("contact-animate");
  //   contact_element.classList.add("contact-animate-out");
  // };

  // const handleContactClick = () => {
  //   setIsContactClicked(true); // Update state when contact button is clicked
  // };

  return (
    <div className="my-10 py-14 px-5">
      <h1 className="text-3xl my-10 text-center">Stay in touch with me!</h1>
      <div className="w-full max-w-md mx-auto">
        <form action="">
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" id="name" className="w-full rounded-lg p-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="email address">Email address</label>
            <br />
            <input type="text" id="email" className="w-full rounded-lg p-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="inquiry">Inquiry Title</label>
            <br />
            <input type="text" id="inquiry" className="w-full rounded-lg p-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              type="text"
              id="message"
              className="w-full rounded-lg p-1"
            />
          </div>
          <div className="right-0">
            <button
              // onClick={handleContactClick}
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
