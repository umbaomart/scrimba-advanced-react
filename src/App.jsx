import Toggle from "./components/Toggle/index"
import Star from "./components/Star"
import { BsStar, BsStarFill } from "react-icons/bs"

import './Style.css'

export default function App() {
    return (
        <>
            <Toggle>
                {/* <Toggle.Button>
                    <Star />
                </Toggle.Button> */}
                <Toggle.Button>
                    <Toggle.On>
                        <BsStarFill className='star filled' />
                    </Toggle.On>
                    <Toggle.Off>
                        <BsStar className='star' />
                    </Toggle.Off>
                </Toggle.Button>
            </Toggle>
        </>
    )
}