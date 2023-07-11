import { useState } from 'react'
import Menu from './components/Menu'
import MenuButton from './components/MenuButton'
import MenuDropdown from './components/MenuDropdown'

import './App.css'

function App() {

  return (
    <>
      <Menu>
        <MenuButton>Sports</MenuButton>
        {
          <MenuDropdown items={["Tennis", "Pickleball", "Racquetball", "Squash"]} />
        }
      </Menu>
    </>
  )
}

export default App


