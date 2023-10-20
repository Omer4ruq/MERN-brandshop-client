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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("db.json"),
      },

      {
        path: "/products/:brand",
        element: (
          <PrivateRoutes>
            <Products></Products>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products_by_brand/${params.brand}`),
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
        loader: () => fetch(`http://localhost:5000/cart`),
      },
      // {
      //   path: "/products/:brand",
      //   element: (
      //     <PrivateRoutes>
      //       <Products></Products>
      //     </PrivateRoutes>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/products_by_brand/${params.brand}`),
      // },
      {
        path: "productdetails/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails></ProductDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },

      {
        path: "updateproducts/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct></UpdateProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
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
