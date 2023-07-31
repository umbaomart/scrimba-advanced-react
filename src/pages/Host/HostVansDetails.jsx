import React from 'react'
import { useParams } from 'react-router-dom'

export default function HostVansDetails() {
    const [van, setVan] = React.useState(null);
    const {id} = useParams();

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [id])

    return van ? (
        <div className="cardItem">
            <div className="cardItem__image">
                <img src={van.imageUrl} alt={van.name} />
            </div>
            <div className="cardItem__info">
                <p>{van.type}</p>
                <h2>{van.name}</h2>
                <p>{van.price}</p>
            </div>
        </div>
    ) : <h2>Loading...</h2>
}