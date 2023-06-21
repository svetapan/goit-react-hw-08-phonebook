import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute =({children}) => {
    const {profile} = useSelector((state) => state.user)
    const location = useLocation();
    return profile ? children : <Navigate to='/login' state={location}/>
}

export default PrivateRoute;