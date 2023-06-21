import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PablicRoute =({children}) => {
    const {profile} = useSelector((state) => state.user)
    const {state} = useLocation();
    return !profile ? children : <Navigate to={state ? state : '/login'}/>
}

export default PablicRoute;