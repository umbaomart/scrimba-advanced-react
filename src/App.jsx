import Avatar from './components/Avatar'
import bob from './assets/bob.jpg'

import './App.css'

function App() {

  return (
    <main>
      <Avatar src={bob} alt="bob" />
      <br />
      <Avatar>BZ</Avatar>
      <br />
      <Avatar />
    </main>
  )
}

export default App


