import { Navigate } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";

const PrivateRoutes = ({children}) => {
  const {user,loading} =useAuth()
 if(loading){
    return <span className="loading loading-infinity loading-lg"></span>
   }//take loading from daisyUI
 
  if(user){
  return children;
 }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
