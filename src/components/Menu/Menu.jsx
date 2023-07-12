import React, { useState } from 'react'

const MenuContext = React.createContext()

function Menu({ children }) {
    const [open, setOpen] = useState(false)

    function toggle() {
        setOpen(!open)
    }

    return (
        <MenuContext.Provider value={{open, toggle}}>
            <div className="menu">
               {children}
            </div>
        </MenuContext.Provider >
    )
}

export default Menu
export { MenuContext }