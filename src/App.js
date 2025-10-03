import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocesery")); // ✅ fix spelling if needed

const AppLayout = () => {
  return (
    <Provider store={AppStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

// ✅ Export the router, not AppLayout
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurant/:ID", element: <RestaurantMenu /> },
    ],
  },
]);

// ✅ Export the router
export default AppRouter;
