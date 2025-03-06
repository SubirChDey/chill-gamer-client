import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllReviews from "../pages/AllReviews";
import ResetPassword from "../pages/ResetPassword";
import PrivateRoutes from "./PrivateRoutes";
import AddReview from "../pages/AddReview";
import MyReviews from "../pages/MyReviews";
import WatchList from "../pages/WatchList";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/reviews",
        element: <PrivateRoutes>
          <AllReviews></AllReviews>
        </PrivateRoutes>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/reset",
        element: <ResetPassword></ResetPassword>
      },
      {
        path: "/addReview",
        element: <PrivateRoutes>
          <AddReview></AddReview>
        </PrivateRoutes>
      },
      {
        path: "/myReviews",
        element: <PrivateRoutes>
          <MyReviews></MyReviews>
        </PrivateRoutes>
      },
      {
        path: "/watchlist",
        element: <PrivateRoutes>
          <WatchList></WatchList>
        </PrivateRoutes>
      },
      {
        path: "/profile",
        element: <PrivateRoutes>
          <MyProfile></MyProfile>
        </PrivateRoutes>
      },
      {
        path: "/updateProfile",
        element: <PrivateRoutes>
          <UpdateProfile></UpdateProfile>
        </PrivateRoutes>
      },


    ]
  },

]);


export default router;