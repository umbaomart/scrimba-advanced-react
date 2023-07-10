import Button from './components/Button'
import { FcGoogle } from 'react-icons/fc'

import './App.css'

/**
 * Challenge: Add an onClick handler to the Button
 * component instance (the one on this page). Then
 * make whatever changes you need for it to actually
 * work.
 *
 * Clicking the button should log "Logging in..."
 * to the console.
 */

function App() {

  return (
    <main>
      <Button onDoubleClick={() => console.log('Double Click...')} onClick={() => console.log("Logging in...")}>
        <FcGoogle />
        Log in with Google
      </Button>
    </main>
  )
}

export default App


