function MenuItem({children, toggle, open}) {

    console.log(open);

    return (
        <div className="menu-item">{children}</div>
    )
}

export default MenuItem