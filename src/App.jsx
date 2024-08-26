import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./pages/About";
import Movie from "./pages/Movie";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import AppLayout from "./components/layouts/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { getMovieData } from "./api/GetApidata";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home />, key: "home" },
        { path: "about", element: <About />, key: "about" },
        { path: "contact", element: <Contact />, key: "contact" },
        {
          path: "movie",
          element: <Movie />,
          loader: getMovieData,
          key: "movie",
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
