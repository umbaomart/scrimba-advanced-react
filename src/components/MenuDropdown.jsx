import React from "react";

function MenuDropdown({ children, open, toggle }) {

    console.log(toggle, open);

    return open ? (
        <div className="menu-dropdown">
            {
                React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        open, toggle
                    })
                })
            }
        </div>
    ) : null
}

export default MenuDropdown