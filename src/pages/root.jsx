import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Nav from "../components/navigation";
import Banner from "../components/banner";
import Contact from "./contact";

const queryClient = new QueryClient();

export default function Root() {
  const location = useLocation();
  const { pathname } = location;

  const shouldHideNav = () => {
    return pathname === "/";
  };

  const shouldHideBanner = () => {
    return pathname === "/";
  };

  const [isContactOpen, setIsContactOpen] = useState(false);
  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <div className="bg-glow bg-cover">
      <div>
        {!shouldHideNav() && <Nav toggleContact={toggleContact} />}
        <QueryClientProvider client={queryClient}>
          <Outlet toggleContact={toggleContact} />{" "}
          {/* Pass toggleContact to Outlet */}
        </QueryClientProvider>
        {!shouldHideBanner() && <Banner />}
        {isContactOpen && <Contact toggleContact={toggleContact} />}
      </div>
    </div>
  );
}
