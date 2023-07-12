import Toggle from "./components/Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"

import Menu from "./components/Menu/index"
import Button from "./components/Button/Button"

import './Style.css'

export default function App() {
    return (
        <>
            <Toggle>
                <Toggle.Button>
                    <Toggle.On>
                        <BsStarFill className='star filled' />
                    </Toggle.On>
                    <Toggle.Off>
                        <BsStar className='star' />
                    </Toggle.Off>
                </Toggle.Button>
            </Toggle>

            <br />

            <Toggle>
                <Menu>
                    <Menu.Button>Menu</Menu.Button>
                    <Menu.Dropdown>
                        <Menu.Item>Home</Menu.Item>
                        <Menu.Item>About</Menu.Item>
                        <Menu.Item>Contact</Menu.Item>
                        <Menu.Item>Blog</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Toggle>
        </>
    )
}