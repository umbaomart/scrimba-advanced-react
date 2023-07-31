import React from 'react'
import { Link, NavLink, useParams, Outlet } from 'react-router-dom'

export default function HostVansDetails() {
    const [currentVan, setCurrentVan] = React.useState(null)
    const { id } = useParams();

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
            </div>
            <ul>
                <li>
                    <NavLink
                        to="../"
                        relative="path"
                    >Details</NavLink>
                </li>
                <li>
                    <NavLink
                        to="photos"
                    >Photos</NavLink>
                </li>
                <li>
                    <NavLink
                        to="pricing"
                    >Pricing</NavLink>
                </li>
            </ul>
            <Outlet />
        </section>
    ) : <h2>Loading...</h2>
}