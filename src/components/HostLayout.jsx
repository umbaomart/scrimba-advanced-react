import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const activeStyle = {
    fontWeight: "bold",
    color: "#161616",
    textDecoration: "underline"
}

export default function HostLayout() {

    return (
        <>
            <nav className="host-nav">
                <NavLink
                    to="/host"
                    end
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    style={({ isActive }) => isActive ? activeStyle : null}
                    to="/host/income"
                >
                    Income
                </NavLink>
                <NavLink
                    style={({ isActive }) => isActive ? activeStyle : null}
                    to="/host/vans"
                >
                    Vans
                </NavLink>
                <NavLink
                    style={({ isActive }) => isActive ? activeStyle : null}
                    to="/host/reviews"
                >
                    Reviews
                </NavLink>
            </nav>
            <h1>Host Layout goes here</h1>
            <Outlet />
        </>
    )
}