import { createBrowserRouter } from "react-router-dom";
import Services from "../Pages/Home/Services/Services";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import AllService from "../Pages/AllService/AllService";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyReview from "../Pages/MyReview/MyReview";
import UpdateReview from "../Pages/UpdateReview/UpdateReview";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import AddService from "../Pages/AddService/AddService";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Services></Services>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <PrivateRoute>
          <AllService></AllService>
        </PrivateRoute>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatereview/:id",
        element: <UpdateReview></UpdateReview>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addservice",
        element: <AddService></AddService>
      },
    ],
  },
]);
