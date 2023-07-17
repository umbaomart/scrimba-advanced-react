import Star from "./components/Star"
import Menu from "./components/Menu/index"

import './Style.css'

export default function App() {
    return (
        <>
            <Star onChange={() => console.log('123') } />

            <br />

            <Menu onOpen={() => console.log('Menu Toggled')}>
                <Menu.Button>Menu</Menu.Button>
                <Menu.Dropdown>
                    <Menu.Item>Home</Menu.Item>
                    <Menu.Item>About</Menu.Item>
                    <Menu.Item>Contact</Menu.Item>
                    <Menu.Item>Blog</Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </>
    )
}
