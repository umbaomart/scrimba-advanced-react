import React from 'react'
import {BsStar, BsStarFill} from 'react-icons/bs'

export default function Star() {
    const [starred, setStarred] = React.useState(false)

    function toggle() {
        setStarred(prevStarred => !prevStarred)
    }

    return (
        starred ?
        <BsStarFill className='star filled' onClick={toggle} /> :
        <BsStar className='star' onClick={toggle} />
    )
}