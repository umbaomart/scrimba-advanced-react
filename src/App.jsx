import Toggle from "./components/Toggle/index"
import Star from "./components/Star"

import './Style.css'

export default function App() {
    return (
        <>
            <Toggle>
                <Toggle.Button>
                    <Star />
                </Toggle.Button>
                <Toggle.On>The toggle is on</Toggle.On>
                <Toggle.Off>The toggle is off</Toggle.Off>
            </Toggle>
        </>
    )
}