import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const activeStyles = {
    fontWeight: "bold",
    color: "#161616",
    textDecoration: "underline"
}

export default function HostLayout() {

    return (
        <>
            <nav className="host-nav">
                <NavLink
                    to="."
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    style={({ isActive }) => isActive ? activeStyles : null}
                    to="income"
                >
                    Income
                </NavLink>
                <NavLink
                    style={({ isActive }) => isActive ? activeStyles : null}
                    to="vans"
                >
                    Vans
                </NavLink>
                <NavLink
                    style={({ isActive }) => isActive ? activeStyles : null}
                    to="reviews"
                >
                    Reviews
                </NavLink>
            </nav>
            <h1>Host Layout goes here</h1>
            <Outlet />
        </>
    )
}