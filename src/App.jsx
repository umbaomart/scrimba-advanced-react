import { useState } from 'react'
import Menu from './components/Menu'
import MenuButton from './components/MenuButton'
import MenuDropdown from './components/MenuDropdown'
import MenuItem from './components/MenuItem'

import './App.css'

function App() {

  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]

  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      {
        <MenuDropdown>
          {
            sports.map((sport, index) => (
              <MenuItem key={index}>{sport}</MenuItem>
            ))
          }
        </MenuDropdown>
      }
    </Menu>
  )
}

export default App


