import React from "react"
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => {
                const vansList = data.vans;
                typeFilter ? setVans(vansList.filter(van => van.type === typeFilter)) : setVans(data.vans)
            })
    }, [typeFilter])

    const vanElements = vans.map(van => {
        return (
            <div key={van.id} className="van-tile">
                <Link to={`/vans/${van.id}`}>
                    <img src={van.imageUrl} />
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        )
    })


    return (

        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button className="van-type simple" onClick={() => setSearchParams({type: "simple"})}>Simple</button>
                <button className="van-type luxury" onClick={() => setSearchParams({type: "luxury"})}>Luxury</button>
                <button className="van-type rugged" onClick={() => setSearchParams({type: "rugged"})}>Rugged</button>
                <button className="van-type clear-filters" onClick={() => setSearchParams({})}>Clear</button>
                {/* <Link className="van-type simple" to="?type=simple">Simple</Link>
                <Link className="van-type luxury" to="?type=luxury">Luxury</Link>
                <Link className="van-type rugged" to="?type=rugged">Rugged</Link>
                <Link className="van-type clear-filters" to=".">Clear</Link> */}
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}