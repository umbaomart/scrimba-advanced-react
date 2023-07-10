import Button from './components/Button'
import Button2 from './components/Button2'
import Marquee from './components/Marquee'
import { BiShoppingBag } from 'react-icons/bi';
import './App.css'

function App() {

  return (
    <main>
      <Marquee>️🧛‍♀ Welcome to Horrorville 🧛‍♀️</Marquee>
      {/* <Button text="Click here"></Button> */}
      <Button2 text="">
        {/* Icon goes here */}
        <BiShoppingBag />
        Buy Now
      </Button2>
    </main>
  )
}

export default App


