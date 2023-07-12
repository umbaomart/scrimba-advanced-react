import React from "react"
import Button from "./Button"

import { MenuContext } from "./Menu"

function MenuButton({ children }) {
    const { toggle } = React.useContext(MenuContext)

    return (
        <Button onClick={toggle} size="lg" variant="" >{children}</Button>
    )
}

export default MenuButton