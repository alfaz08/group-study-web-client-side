import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";

const PrivateRoutes = ({children}) => {
  const location = useLocation()
  const {user,loading} =useAuth()

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="animate-spin h-14 w-14 border-t-4 border-lime-300 rounded-full border-r-4"></div>
        <span className="text-lg mt-4">Data Loading! Please Wait</span>
      </div>
    );
  }
 
  if(user){
  return children;
 }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;