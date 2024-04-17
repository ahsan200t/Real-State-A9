/* eslint-disable react/prop-types */
import { Navigate,useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const PrivetRout = ({ children }) => {
  const { user, loading} = UseAuth();
  const location = useLocation();
  if(loading){
    return <h1 className="text-5xl text-center font-medium">
    <span className="loading loading-spinner loading-lg"></span>
    </h1>
  }
  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivetRout;
