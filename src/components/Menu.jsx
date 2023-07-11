import React, { useState } from 'react'

function Menu({ children }) {
    const [open, setOpen] = useState(false)

    function toggle() {
        setOpen(!open)
    }

    return (
        // <div className="menu">{ children }</div>
        <div className="menu">
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    open, toggle
                })
            })}
        </div>
    )
}

export default Menu