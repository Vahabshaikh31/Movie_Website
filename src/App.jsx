import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./pages/About";
import Movie from "./pages/Movie";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import AppLayout from "./components/layouts/AppLayout";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "movie", element: <Movie /> },
      ],
    },
    {
      path: "*",
      element: <h1>Page Not Found</h1>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
