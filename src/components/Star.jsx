import React from 'react'
import { ToggleContext } from './Toggle/Toggle'
import {BsStar, BsStarFill} from 'react-icons/bs'

export default function Star() {
    const { on } = React.useContext(ToggleContext);

    return (
        on ?
        <BsStarFill className='star filled' /> :
        <BsStar className='star' />
    )
}