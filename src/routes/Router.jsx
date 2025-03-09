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
import ReviewDetail from "../pages/ReviewDetail";
import UpdateReview from "../pages/UpdateReview";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/review'),
      },
      {
        path: "/reviews",
        element: <AllReviews></AllReviews>,
        loader: () => fetch('http://localhost:5000/review'),

      },
      {
        path: "/contact",
        element: <Contact></Contact>
        

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
        </PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/review'),
      },
      {
        path: "/updateReview/:id",
        element: <PrivateRoutes>
          <UpdateReview></UpdateReview>
        </PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`),
      },
      {
        path: "/review/:id",
        element:
          <ReviewDetail></ReviewDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`),
        // loader: async ({ params }) => {

        //   const res = await fetch('http://localhost:5173/review')
        //   const data = await res.json();

        //   const singleReview = data.find(d => d._id == params.id)
        //   return singleReview
        // },
      },
      {
        path: "/myWatchlist",
        element: <PrivateRoutes>
          <WatchList></WatchList>
        </PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/watchlist')
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