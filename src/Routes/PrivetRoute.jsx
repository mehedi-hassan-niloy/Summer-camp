import { useContext } from "react";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="w-56 progress"></progress>
    }

    if(user) {
        return children;
    }
    return <Navigate state={{ from: location }}  to='/login' replace></Navigate>
};

export default PrivetRoute;