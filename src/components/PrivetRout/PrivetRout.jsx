/* eslint-disable react/prop-types */
import { Navigate,useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const PrivetRout = ({ children }) => {
  const { user } = UseAuth();
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivetRout;
