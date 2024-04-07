import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TugoNav() {
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 1);
      prevScrollPos = currentScrollPos;

      // Detect active section
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          currentScrollPos >= sectionTop - 100 &&
          currentScrollPos <= sectionTop + sectionHeight - 100
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`sticky top-5 z-10 ${visible ? "opacity-100" : "hidden"}`}
      >
        <div className="flex justify-between px-10 my-3">
          <Link to="/televu">
            <button
              className={
                activeSection === "header" ? "nav-button active" : "nav-button"
              }
            >
              TUGO
            </button>
          </Link>
          <div className="flex gap-5">
            <Link to="/design">
              <button
                className={
                  activeSection === "design-overview"
                    ? "nav-button active"
                    : "nav-button"
                }
              >
                Design Home
              </button>
            </Link>
            <Link to="/televu">
              <button
                className={
                  activeSection === "tugo" ? "nav-button active" : "nav-button"
                }
              >
                TeleVU
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
