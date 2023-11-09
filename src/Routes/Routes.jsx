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
import UpdateAssignment from "../pages/UpdateAssignment/UpdateAssignment";
import CardDetails from "../pages/CardDetails/CardDetails";
import SubmittedAssignment from "../pages/SumittedAssignment/SubmittedAssignment";
import MarkAssignment from "../pages/MarkedAssignment/MarkAssignment";
import SubmitMarking from "../pages/SumittedAssignment/SubmitMarking";

import SubmissionForm from "../SubmissionForm/SubmissionForm";

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
        element: <AllAssignment></AllAssignment>,
        loader: ()=>fetch('https://group-study-server-mhdzltc20-alfaz-hossains-projects.vercel.app/allassignment')

      },
      {
        path:"createassignment",
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
      },
     
      {
        path:"/update/:id",
        element: <PrivateRoute> <UpdateAssignment></UpdateAssignment> </PrivateRoute>,
         loader:({params})=>fetch(`https://group-study-server-mhdzltc20-alfaz-hossains-projects.vercel.app/update/${params.id}`)
      },
      {

        path:"/details/:id",
        element: <PrivateRoute> <CardDetails></CardDetails> </PrivateRoute>,
        loader: ()=>fetch('https://group-study-server-mhdzltc20-alfaz-hossains-projects.vercel.app/allassignment')
        
      },
      {
        path:"/submitassignment",
        element: <PrivateRoute> <SubmittedAssignment></SubmittedAssignment> </PrivateRoute>,
        loader:()=>fetch('https://group-study-server-mhdzltc20-alfaz-hossains-projects.vercel.app/submitassignment')
      },
      {
        path:"myassignment",
        element: <PrivateRoute> <MyAssignment></MyAssignment> </PrivateRoute>,
        loader:()=>fetch('https://group-study-server-mhdzltc20-alfaz-hossains-projects.vercel.app/submitassignment')
      },
      {
        path:"markedassignment",
        element: <PrivateRoute> <MarkAssignment></MarkAssignment> </PrivateRoute>
      },
      {
        path:'/marked/:id',
        element: <PrivateRoute> <SubmitMarking></SubmitMarking> </PrivateRoute>,
        loader:({params})=>fetch(`https://group-study-server-mhdzltc20-alfaz-hossains-projects.vercel.app/marked/${params.id}`)
      },
      
     ]
    },
     ]);


export default router;