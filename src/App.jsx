import Button from './components/Button'
import { FcGoogle } from 'react-icons/fc'

import './App.css'

function App() {

  return (
    <main>
      <Button
        style={{ backgroundColor: 'pink', color: 'green' }}
        onClick={() => console.log("Logging in...")}
      >
        <FcGoogle />
        Log in with Google
      </Button>
    </main>
  )
}

export default App


