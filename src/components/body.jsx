import React, { Suspense, useEffect } from "react";
import Login from "./_forms/login";
import BrowsePage from "./_browse/BrowsePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Body = () => {
 
  const movieGpt_Router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/browse",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <BrowsePage />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={movieGpt_Router} />;
};

export default Body;
