import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom";

export default function HostLayout() {
    return (
        <>
            <nav className="host-nav">
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </nav>
            <h1>Host Layout goes here</h1>
            <Outlet />
        </>
    )
}