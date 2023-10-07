import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import { getVans } from "../../api"

export default function VanDetail() {
    const [van, setVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const {id} = useParams()
    const location = useLocation()

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans(id)
                setVan(data)
            } catch (err) {
                setError(err)
            }
        }

        // fetch(`/api/vans/${id}`)
        //     .then(res => res.json())
        //     .then(data => setVan(data.vans))
    }, [id])

    if (loading) return <h2>Loading...</h2>

    if (error) return <h2>Error loading van</h2>

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