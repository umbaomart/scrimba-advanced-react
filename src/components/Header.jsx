import React from 'react'
import { ThemeContext } from '../App'

export default function Header() {
    const value = React.useContext(ThemeContext)
    const theme_name = value[0].toUpperCase() + value.slice(1);

    return (
        <header className={`${value}-theme`}>
            <h1>{theme_name} Theme</h1>
        </header>
    )
}