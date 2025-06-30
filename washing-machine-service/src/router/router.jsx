import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import RootLayout from '../RootLayout/RootLayout';
import CategoriesData from '../Components/CategoriesData';
import CategoriesDataDetails from '../Pages/CategoriesDataDetails';
import About from '../Pages/About';
import Error from '../Pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/category",
        Component: CategoriesData,
      },
      {
        path: "/category/:id",
        Component: CategoriesDataDetails,
      },
      {
        path: "/*",
        Component: Error,
      },
    ],
  },
]);
  

export default router;