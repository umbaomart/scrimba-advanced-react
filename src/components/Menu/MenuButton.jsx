import React from "react"
import Button from "../Button/Button"
import { ToggleContext } from "../Toggle/Toggle"

export default function MenuButton({ children }) {
    const { toggle } = React.useContext(ToggleContext)

    return (
        <Button onClick={toggle}>{children}</Button>
    )
}