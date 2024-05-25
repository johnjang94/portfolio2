import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/root";
import InitialLanding from "./pages/initial-landing/initialLanding";

// Home page & About Me
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Tools from "./pages/about/tools";
import Hobby from "./pages/about/hobby";

// Design section
import DesignHome from "./pages/design/design-home";
import Televu from "./pages/design/televu";
import FoodDistro from "./pages/design/foodDistro";
import Tugo from "./pages/design/tugo";

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
      { index: true, element: <InitialLanding /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/tools", element: <Tools /> },
      { path: "/my-hobby", element: <Hobby /> },
      // Design section
      { path: "/design", element: <DesignHome /> },
      { path: "/televu", element: <Televu /> },
      { path: "/food", element: <FoodDistro /> },
      { path: "/tugo", element: <Tugo /> },
      // Development section
      { path: "/development", element: <DevelopmentHome /> },
      // Other
      { path: "/contact", element: <Contact /> },
      { path: "/lock", element: <Login /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
