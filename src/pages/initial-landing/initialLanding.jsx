import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./initialLanding.css";

export default function InitialLanding() {
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const h1_element = document.getElementById("big-text");
    const h3_element = document.getElementById("sub-text");
    h1_element.style.display = "none";
    h3_element.style.display = "none";
    setTimeout(() => {
      h1_element.style.display = "block";
      h1_element.classList.add("h1-animate");
    }, 1000);
    setTimeout(() => {
      h1_element.classList.add("h1-animate2");
      h3_element.classList.add("h3-animate");
      h3_element.style.display = "block";
    }, 3500);

    const div_element = document.getElementById("landing");
    setTimeout(() => {
      div_element.classList.add("animate-white-to-black");
    }, 4500);

    setTimeout(() => {
      h1_element.classList.add("h1-animate3");
      h3_element.classList.add("h3-animate2");
    }, 8500);

    setTimeout(() => {
      navigate("/home"); // Use navigate instead of window.location.href
    }, 11000);
  }, [navigate]); // Add navigate to the dependency array

  return (
    <div id="landing" className="text-center py-72 bg-white">
      <h1 id="big-text">Welcome</h1>
      <h3 id="sub-text" className="text-5xl">
        to John Jang&#39;s Portfolio
      </h3>
    </div>
  );
}
