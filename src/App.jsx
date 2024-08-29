import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./pages/About";
import Movie from "./pages/Movie";
import { Contact, contactData } from "./pages/Contact";
import Home from "./pages/Home";
import AppLayout from "./components/layouts/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { getMovieData } from "./api/GetApidata";
import { MovieDetail } from "./pages/MovieDeatail";
import { getMovieDetails } from "./api/getMovieDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home />, key: "home" },
        { path: "about", element: <About />, key: "ab out" },
        {
          path: "contact",
          element: <Contact />,
          key: "contact",
          action: contactData,
        },
        {
          path: "movie",
          element: <Movie />,
          loader: getMovieData,
          key: "movie",
        },
        {
          path: "movie/:MovieId",
          element: <MovieDetail />,
          loader: getMovieDetails,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
