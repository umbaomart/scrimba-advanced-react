import Button from './components/Button'

import './App.css'

function App() {

  return (
    <main>
      <Button
        size="lg"
        className='green'
        onClick={() => console.log("Logging in...")}
      >
        Log in with Google
      </Button>
    </main>
  )
}

export default App


