import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllAssignment from "../pages/AllAssignment/AllAssignment";
import PrivateRoute from "../Providers/PrivateRoute";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import MyAssignment from "../pages/MyAssignment/MyAssignment";
const router = createBrowserRouter([
    {
     path: "/",
     element: <MainLayout></MainLayout>,
     errorElement: <ErrorPage></ErrorPage>,
     children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"login",
        element: <Login></Login>
      },
      {
        path:"register",
        element: <Register></Register>
      },
      {
        path:"allassignment",
        element: <AllAssignment></AllAssignment>
      },
      {
        path:"createassignment",
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
      },
      {
        path:"myassignment",
        element: <PrivateRoute> <MyAssignment></MyAssignment> </PrivateRoute>
      }
     ]
    },
     ]);


export default router;