import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRequired() {

    const isLoggedIn = localStorage.getItem("loggedIn")
    const location = useLocation()

    if (!isLoggedIn) {
        return <Navigate
            to="/login"
            state={{ message: "You must login first", from:  location.pathname}}
            replace={true}
        />
    }

    return (<Outlet />)
}