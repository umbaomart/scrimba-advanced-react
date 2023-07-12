import React from 'react'

import Toggle from "./components/Toggle"
import Star from "./components/Star"

import './Style.css'

export default function App() {
    return (
        <>
            <Toggle>
                <Star />
            </Toggle>
        </>
    )
}