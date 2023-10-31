import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateProvider = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);

  if(loading) {
    return <div className="mt-44 mx-auto w-56">
        <span className="loading loading-ball loading-lg "></span>
        <span className="loading loading-ball loading-lg "></span>
        <span className="loading loading-ball loading-lg "></span>
    </div> 
  }

  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};


PrivateProvider.propTypes = {
    children: PropTypes.node,
  };
export default PrivateProvider;
