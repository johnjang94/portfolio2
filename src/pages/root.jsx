import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/mainNav";
import Banner from "../components/banner";

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

  const getBackgroundClass = () => {
    if (pathname.includes("/lock")) {
      return "bg-animated bg-cover";
    } else if (pathname.includes("/tools") && pathname.includes("/tugo")) {
      return "bg-glow bg-contain";
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
