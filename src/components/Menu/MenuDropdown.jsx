import React from "react"
import { ToggleContext } from "../Toggle/Toggle"

export default function MenuDropdown({ children }) {
    const { on } = React.useContext(ToggleContext)

    return on ? (
        <div className="menu-dropdown">
            {children}
        </div>
    ) : null
}