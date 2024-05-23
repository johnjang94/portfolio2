import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/navigation";
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
    return pathname === "/lock" ? "bg-animated bg-cover" : "bg-glow bg-contain";
  };

  return (
    <div className={getBackgroundClass()}>
      <div>
        {!shouldHideNav() && <Nav pathname={pathname} />}
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
        {!shouldHideBanner() && <Banner />}
      </div>
    </div>
  );
}
