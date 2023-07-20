import React from "react"
// import Toggle from "./components/Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"
import useToggle from "./hooks/useToggle"

export default function Star() {
    const [on, toggle] = useToggle()

    function handleClick() {
        toggle();
    }

    return (
        <>
            {on ?
                <BsStarFill onClick={handleClick} className="star filled" /> :
                <BsStar onClick={handleClick} className="star" />
            }
        </>
    )
}