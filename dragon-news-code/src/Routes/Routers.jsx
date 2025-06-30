import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "./Pages/Home";
import CategoryNews from "./Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        element:<Home></Home> ,
      },
      {
        path: "/category/:id",
        element:<CategoryNews></CategoryNews> ,
        loader:()=>fetch('/news.json'),
      },
    ],
  },
  {
    path: "/auth",
    element: <div>Authentication Layout</div>,
  },
  {
    path: "/news",
    element: <div>News Layout</div>,
  },
  {
    path: "/*",
    element: <div>Error 404 </div>,
  },
]);

export default router;
