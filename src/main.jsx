import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddProducts from "./pages/AddProducts.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import UpdateProduct from "./pages/UpdateProduct.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

import Brands from "./pages/layouts/Brands.jsx";
import PreOrders from "./pages/PreOrders.jsx";
import Collection from "./pages/Collection.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/db.json"),
      },

      {
        path: "/products/:brand",
        element: (
          <PrivateRoutes>
            <Products></Products>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://fashion-server-sepia.vercel.app/products_by_brand/${params.brand}`
          ),
      },

      {
        path: "/addproducts",
        element: (
          <PrivateRoutes>
            <AddProducts></AddProducts>
          </PrivateRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <Cart></Cart>
          </PrivateRoutes>
        ),
        loader: () => fetch(`https://fashion-server-sepia.vercel.app/cart`),
      },
      // {
      //   path: "/products/:brand",
      //   element: (
      //     <PrivateRoutes>
      //       <Products></Products>
      //     </PrivateRoutes>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`https://fashion-server-sepia.vercel.app/products_by_brand/${params.brand}`),
      // },
      {
        path: "productdetails/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails></ProductDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://fashion-server-sepia.vercel.app/products/${params.id}`
          ),
      },

      {
        path: "updateproducts/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct></UpdateProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://fashion-server-sepia.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/preorders",
        element: (
          <PrivateRoutes>
            <PreOrders></PreOrders>
          </PrivateRoutes>
        ),
      },
      {
        path: "/collection",
        element: (
          <PrivateRoutes>
            <Collection></Collection>
          </PrivateRoutes>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoutes>
            <Contact></Contact>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
