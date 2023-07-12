
function MenuDropdown({ children, toggle, open }) {

    console.log(toggle, open);

    return open ? (
        <div className="menu-dropdown">
            {children}
        </div>
    ) : null
}

export default MenuDropdown