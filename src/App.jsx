import Button from './components/Button'

import './App.css'

function App() {

  return (
    <main>
      <Button
        size="sm"
        onClick={() => console.log("Logging in...")}
      >
        Log in with Google
      </Button>
      <Button
        size="lg"
        className='green'
        variant="success"
        onClick={() => console.log("Logging in...")}
      >
        Log in with Google
      </Button>
      <Button
        size="sm"
        className='green'
        variant="warning"
        onClick={() => console.log("Logging in...")}
      >
        Log in with Google
      </Button>
      <Button
        size="sm"
        className='green'
        variant="danger"
        onClick={() => console.log("Logging in...")}
      >
        Log in with Google
      </Button>
    </main>
  )
}

export default App


