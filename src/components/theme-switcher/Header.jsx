import React from 'react'
import { ThemeContext } from '../../App'

export default function Header() {
    const {theme} = React.useContext(ThemeContext)

    const theme_name = theme[0].toUpperCase() + theme.slice(1);

    return (
        <header className={`${theme}-theme`}>
            <h1>{theme_name} Theme</h1>
        </header>
    )
}