import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/root";
import Home from "./pages/home/home";
import InitialLanding from "./pages/initial-landing/initialLanding";
import NotFound from "./pages/notfound";
import About from "./pages/about/about";
import Tools from "./pages/about/tools";
import Hobby from "./pages/about/hobby";
import DesignHome from "./pages/design/design-home";
import DevelopmentHome from "./pages/development/development-home";
import Televu from "./pages/design/televu";
import Tugo from "./pages/design/tugo";
import Contact from "./pages/contact";

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
      { path: "/design", element: <DesignHome /> },
      { path: "/televu", element: <Televu /> },
      { path: "/tugo", element: <Tugo /> },
      { path: "/development", element: <DevelopmentHome /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
