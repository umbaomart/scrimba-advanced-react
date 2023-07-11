function MenuDropdown({ items }) {

    return (
        <div className="menu-dropdown">
            {
                items.map((item, index) => {
                    return <div className="menu-item" key={index}>{item}</div>
                })
            }
        </div>
    )
}

export default MenuDropdown