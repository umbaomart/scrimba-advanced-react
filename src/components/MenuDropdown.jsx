function MenuDropdown({ children, open }) {

    return open ? (
        <div className="menu-dropdown">
            {children}
        </div>
    ) : null
}

export default MenuDropdown