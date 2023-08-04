import React from 'react'
import { Link, NavLink, useParams, Outlet } from 'react-router-dom'

export default function HostVansDetails() {
    const [currentVan, setCurrentVan] = React.useState(null)
    const { id } = useParams();
    const activeStyles = {
        fontWeight: "bold",
        color: "#161616",
        textDecoration: "underline"
    }

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [id])

    return currentVan ? (
        <section>
            <Link
                to="../"
                relative="path"
                className="back-button"
            >&larr; Back to all vans</Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >Details</NavLink>
                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >Photos</NavLink>
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >Pricing</NavLink>
                </nav>
                <Outlet context={{currentVan}} />
            </div>
        </section>
    ) : <h2>Loading...</h2>
}