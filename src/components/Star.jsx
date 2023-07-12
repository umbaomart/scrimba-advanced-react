import React from 'react'
import {BsStar, BsStarFill} from 'react-icons/bs'
import { ToggleContext } from './Toggle/Toggle'

export default function Star() {
    const { on } = React.useContext(ToggleContext);

    return (
        on ?
        <BsStarFill className='star filled' /> :
        <BsStar className='star' />
    )
}