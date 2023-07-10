import Button from './components/Button'
import { FcGoogle } from 'react-icons/fc'

import './App.css'

function App() {

  return (
    <main>
      <Button
        size="lg"
        onClick={() => console.log("Logging in...")}
      >
        Log in with Google
      </Button>
    </main>
  )
}

export default App


