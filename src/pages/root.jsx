import { queryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/mainNav";
import Banner from "../components/banner";
import { useEffect, useState } from "react";

export default function Root() {
  const { pathname } = useLocation();
  const [scrollToBottom, setScrollToBottom] = useState(false);

  const shouldHideNav = () => {
    return pathname === "/";
  };

  const shouldHideBanner = () => {
    return pathname === "/";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!pathname.includes("/design")) return;

      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight;

      if (scrollPosition + viewportHeight >= totalHeight) {
        setScrollToBottom(true);
      } else {
        setScrollToBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const getBackgroundClass = () => {
    let backgroundClass = "bg-glow bg-contain";
    if (pathname.includes("/design")) {
      if (scrollToBottom) {
        backgroundClass += " bg-design-bottom";
      }
    } else if (pathname.includes("/lock")) {
      backgroundClass = "bg-animated bg-cover";
    } else if (pathname.includes("/tools") && pathname.includes("/tugo")) {
      return "bg-animated bg-contain";
    }

    return backgroundClass;
  };

  return (
    <div
      className={getBackgroundClass()}
      style={{ transition: "background 0.5s ease" }}
    >
      <div
        className={`absolute w-full h-full ${
          scrollToBottom ? "bg-gray-700" : "bg-transparent"
        } transition-opacity duration-500`}
      />
      {!shouldHideNav() && <Nav pathname={pathname} />}
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      {!shouldHideBanner() && <Banner />}
    </div>
  );
}
