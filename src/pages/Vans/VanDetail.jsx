import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"

export default function VanDetail() {
    const location = useLocation()
    const param = useParams()
    // const search = location.state?.search || ""
    // const type = location.state?.type || "all"


    // const searchParams = new URLSearchParams(search)
    // let typeFilter = searchParams.get("type") != null ? searchParams.get("type") : "all"
    // typeFilter = typeFilter.charAt(0).toUpperCase() + typeFilter.slice(1)

    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${param.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [param.id])

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <div className="van-detail-container">
            <Link
                to={`../?${search}`}
                relative="path"
                className="back-button"
            >&larr; { `Back to ${type} vans`}</Link>
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}