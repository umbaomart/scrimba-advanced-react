import { useOutletContext } from "react-router-dom"

export default function HostVansInfo() {
    const {currentVan} = useOutletContext()

    console.log(currentVan);

    return (
        <>
            <div className="host-van-detail-info">
                <h4>Name: {currentVan.name}</h4>
                <h4>Category: <span>{ currentVan.type }</span></h4>
                <h4>Description: <span>{ currentVan.description }</span></h4>
                <h4>Visibility: <span>Public</span></h4>
            </div>
        </>
    )
}