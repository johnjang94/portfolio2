import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/root";

// Home page & About Me
import Home from "./pages/home/home";
import About from "./pages/about/about";

// Design section
import Televu from "./pages/design/televu";
import TelevuBrief from "./pages/design/televu-brief";
import FooddistrO from "./pages/design/food-distro";
import FoodDistro from "./pages/design/foodDistro";
import TuGoInsurance from "./pages/design/tugo-insurance";
import Tugo from "./pages/design/tugo";
import Xperience from "./pages/design/experience";
import SAHKI from "./pages/design/the-sahki";

// Development section
import DevelopmentHome from "./pages/development/development-home";

// Contact & Extra
import Contact from "./pages/contact";
import Login from "./components/lock/login";

// Wrong link
import NotFound from "./pages/notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      // Design section
      { path: "/televu", element: <Televu /> },
      { path: "/televu-brief", element: <TelevuBrief /> },
      { path: "/food", element: <FoodDistro /> },
      { path: "/food-distro", element: <FooddistrO /> },
      { path: "/tugo", element: <Tugo /> },
      { path: "/tugo-insurance", element: <TuGoInsurance /> },
      { path: "/experience", element: <Xperience /> },
      { path: "/the-sahki", element: <SAHKI /> },
      // Development section
      { path: "/development", element: <DevelopmentHome /> },
      // Other
      { path: "/contact", element: <Contact /> },
      { path: "/lock", element: <Login /> },
      // For any wrong URL, redirect to:
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
