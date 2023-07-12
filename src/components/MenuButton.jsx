import Button from "./Button"

function MenuButton({ toggle, children }) {

    console.log(toggle, open);

    return (
        <Button size="lg" variant="" onClick={toggle}>{children}</Button>
    )
}

export default MenuButton