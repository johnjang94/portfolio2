import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/mainNav";
import Banner from "../components/banner";

const queryClient = new QueryClient();

export default function Root() {
  const { pathname } = useLocation();

  const shouldHideNav = () => {
    return pathname === "/";
  };

  const shouldHideBanner = () => {
    return pathname === "/";
  };

  const getBackgroundClass = () => {
    const registeredPaths = [
      "/home",
      "/about",
      "/design",
      "/televu",
      "/food",
      "/tugo",
      "/experience",
      "/development",
      "/contact",
      "/lock",
    ];

    const isRegistered = registeredPaths.some((path) => pathname === path);
    if (!isRegistered) {
      return "bg-background bg-cover";
    }

    if (pathname === "/lock") {
      return "bg-background bg-cover";
    } else if (
      pathname === "/tools" ||
      pathname === "/contact" ||
      pathname === "/experience"
    ) {
      return "bg-glow bg-cover";
    } else {
      return "bg-glow bg-contain";
    }
  };

  return (
    <div className={getBackgroundClass()}>
      {!shouldHideNav() && <Nav pathname={pathname} />}
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      {!shouldHideBanner() && <Banner />}
    </div>
  );
}
