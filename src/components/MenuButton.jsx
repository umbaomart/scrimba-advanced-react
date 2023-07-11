import Button from "./Button"

function MenuButton({ toggle, children }) {

    return (
        <Button size="lg" variant="" onClick={toggle}>{children}</Button>
    )
}

export default MenuButton