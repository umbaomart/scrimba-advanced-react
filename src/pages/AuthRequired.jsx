import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequired() {

    const authenicated = true;

    if (!authenicated) {
        return <Navigate
            to="/login"
            state={{ message: "You must login first" }}
        />
    }

    return (<Outlet />)

}